import React, { useState , useEffect } from 'react'
import TravellerInputs from '../../components/frontend/Safari/TravellerInputs';
import axios from 'axios';
import { useAlert } from "react-alert";

export default function SafariTravellerBooking() {

    useEffect(() => {

        const res = loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert.error("Razorpay SDK failed to load. Are you online?");
            return;
        }
    },[]);

      const alert = useAlert();
      const [ Name , setName ] = useState(localStorage.getItem('selName'));
      const [ Phone , setPhone ] = useState(localStorage.getItem('selPhone'));
      const [ Email , setEmail ] = useState('');
      const [ State , setState ] = useState('');
      const [ Address , setAddress ] = useState('');
      const [ payable_Amount, setPayableAmount ] = useState(parseInt(0));

      const [users , setUsers ] = useState([{
        key: Date.now(),
        name: "",
        gender: "",
        nationality: "",
        idProof: "",
        idNumber: "",
        price: 0
      }]);

      const onChange = (i,e) => {
        
        let newUsers = [...users];
        newUsers[i]['name'] = e.name ;
        newUsers[i]['gender'] = e.gender ;
        newUsers[i]['nationality'] = e.nationality ;
        newUsers[i]['idProof'] = e.idProof ;
        newUsers[i]['idNumber'] = e.idNumber ;
        newUsers[i]['price'] = 0;

            const data = {
                "date": localStorage.getItem('selDate'),
                "person_type" : newUsers[i].nationality,
                "vehicle_type": localStorage.getItem('selVehicle')
            }

            var amt = parseInt(0);

            users.map((itm,ix) => (
                axios.post(`${process.env.REACT_APP_BASE_URL}/safari/getBookingPricesByDate`, data).then(res => {
                    if (res.status === 200) {
                        newUsers[i]['price'] = res.data.data.price
                    } 
                    amt = parseInt(amt) + parseInt(itm.price);
                    setPayableAmount(amt);
                })  
                
            ));
            
            setUsers(newUsers);
      };

      let addElement = () => {
        setUsers([...users, { 
            key: Date.now(),
            name: "",
            gender: "",
            nationality: "",
            idProof: "",
            idNumber: "",
            price: 0 
        }])
      };

      let removeElement = (i) => {
        let newFormValues = [...users];
        newFormValues.splice(i, 1);


        var amt = parseInt(0);

        newFormValues.map((itm,ix) => {
           
                amt = parseInt(amt) + parseInt(itm.price);
                setPayableAmount(amt);
            
        })

        setUsers(newFormValues);
      };

      const handleSaveData = () => {

        if(Email === '' && State === '' && Address === '') {
            alert.error("Please do not leave any fields blank.");
            return true;
        } else {
            const options = {

                // key: credentials.razorpay_key,
                key: 'rzp_test_FvMwf7j3FOOnh8',
                amount: payable_Amount+('00').toString(),
                currency: "INR",
                name: "Gir national park",
                description: "Test Transaction",
                image: "/image/logo.png",
              
                handler: async function (response) {
                                
                const data = {
                    "booked_persons" : users,
                    "name" : Name,
                    "mobile" : Phone,
                    "email" : Email,
                    "address" : Address,
                    "state" : State,
                    "date": localStorage.getItem('selDate'),
                    "zone": localStorage.getItem('selZone'),
                    "vehicle" : localStorage.getItem('selVehicle'),
                    "amount":  payable_Amount,
                    "timing": localStorage.getItem('selTiming'),
                    "transaction_id": response.razorpay_payment_id
                }

                    // axios.post(`/api/front/safari_booking/proof_attach/${localStorage.getItem('bid')}`, fileData,{
                    //     headers: {
                    //         'Accept': 'application/json, text/plain, */*',
                    //         'Content-Type': 'application/json'
                    //    },
                    // }).then((response)=>{});
                    
                    //successPay
                    axios.post(`${process.env.REACT_APP_BASE_URL}/admin/customers/safari`, data).then(result => {
                            if(result.status === 200 ) {
                            alert.success("Booked");
                            localStorage.clear();
                            window.location.href = '/thankyou';
                        }
                    })
                    
                },
                prefill: {
                    name: Name,
                    email: Email,
                    contact: Phone,
                },
                notes: {
                    address: "Gir national park",
                },
                theme: {
                    color: "#61dafb",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }

     }

      const loadScript=(src) =>{
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    return (
        <div className='container sectionFrame'>
            <div className='passanger'>
                <form className='form-inline ng-untouched ng-pristine ng-invalid' noValidate="">
                    <div className='travellerBook box clearfix'>
                        <h2>Safari booking details</h2>
                        <h3>Booking Person Details</h3>
                        <div className='bookPadding'>
                            <div className='row' style={{marginBottom: "20px"}}>
                                <div className='col-sm-3 col-xs-6'>
                                    <p><strong>Booking Date : </strong>{localStorage.getItem('selDate')}</p>
                                </div>
                                <div className='col-sm-3 col-xs-6'>
                                    <p><strong>Booking Zone : </strong>{localStorage.getItem('selZone')}</p>
                                </div>
                                <div className='col-sm-3 col-xs-6'>
                                    <p><strong>Booking Timing : </strong>{localStorage.getItem('selTiming')}</p>
                                </div>
                                <div className='col-sm-3 col-xs-6'>
                                    <p><strong>Booking Vehicle : </strong>{localStorage.getItem('selVehicle')}</p>
                                </div>  
                            </div>
                            <div className='row'>
                                <div className='col-sm-4'>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <label className='control-label'>Name</label>
                                            </div>
                                            <div className='col-sm-8'>
                                                <input type="text" value = {Name} onChange = {(e) => setName(e.target.value)} className='form-control' placeholder='Name' />
                                            </div>
                                        </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>Mobile No</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" value = {Phone}  onChange = {(e) => setPhone(e.target.value)} className='form-control' placeholder='Mobile Number' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>Email ID</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text"  value = {Email} onChange = {(e) => setEmail(e.target.value)} className='form-control' placeholder='Email ID' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4' style={{marginTop: "20px"}}>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>State</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <select className="form-control ng-pristine ng-invalid ng-touched" value = {State} onChange = {(e) => setState(e.target.value)} formcontrolname="state" id="state">
                                                <option>Please Select State</option>
                                                <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chattisgarh">Chattisgarh</option>
                                                <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
                                                <option value="Daman & Diu">Daman & Diu</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Poducherry">Poducherry</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-8' style={{marginTop: "20px"}}>
                                    <div className='row'>
                                        <div className='col-sm-2'>
                                            <label className='control-label'>Full address</label>
                                        </div>
                                        <div className='col-sm-10'>
                                            <textarea onChange = {(e) => setAddress(e.target.value)} className="form-control ng-untouched ng-pristine ng-invalid" cols="60" formcontrolname="address" id="address" placeholder="Full Address.."  rows="4" tabIndex="4"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fillTraveller table-responsive'>
                        <h3>Please fill out the Traveller Details</h3>
                        <span className='d-sm-none d-md-none d-lg-none d-xl-none text-danger font-bold text-center block mb-3'>*Scroll right to fill the details</span>
                        <table className='table bg-white'>
                            <thead>
                                <tr>
                                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Full name</th>
                                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Gender</th>
                                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Nationality</th>
                                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID Proof</th>
                                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID Number</th>
                                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.key}>
                                    { localStorage.getItem('selAvailable') >= index+1 ?  
                                    <>
                                         <TravellerInputs
                                            key={user.key}
                                            value={user}
                                            counter={index}
                                            onChange={e => onChange(index, e)}
                                        />
                                        <td className='border border-slate-300 text-center plusMinusInputs'>
                                            <button type="button" onClick={addElement} className='btn btn-success'>Add</button>
                                            <button type="button" onClick={() => removeElement(index)} disabled={users.length <= 1} className='btn btn-danger'>
                                                Delete
                                            </button>
                                        </td> 
                                    </> 
                                    :
                                     "Bookings seats are not available now!!!"                            
                                    }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                       
                        
                    </div>
                </form>
                        <div className='border border-slate-300 text-center plusMinusInputs'>
                            <button className='btn btn-success'>Payable amount : { payable_Amount }</button> &nbsp;
                            <button type="button" onClick={handleSaveData} className='btn btn-success'>Pay Now</button> &nbsp; 
                            <button className='btn btn-success'>Go Back</button>       
                        </div>
            </div>
        </div>    
    )
}
