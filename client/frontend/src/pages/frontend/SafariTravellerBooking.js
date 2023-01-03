import React, { useState , useEffect } from 'react'
import TravellerInputs from '../../components/frontend/Safari/TravellerInputs';
import axios from 'axios';
import { useAlert } from "react-alert";
import swal from 'sweetalert';

export default function SafariTravellerBooking() {

    useEffect(() => {

        getSettings();

        const res = loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert.error("Razorpay SDK failed to load. Are you online?");
            return;
        }
    },[]);

    function getSettings() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/settings/razorpay`).then(res => {
            setRazorpaykey(res.data.data.value.razorpay_key);
        })  
    }

      const alert = useAlert();
      const [ razorpaykey , setRazorpaykey ] = useState('');
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
            id_proof: "",
            idnumber: "",
            price: 0 
      }]);

      const onChange = (i,e) => {
        
        let newUsers = [...users];
        newUsers[i]['name'] = e.name ;
        newUsers[i]['gender'] = e.gender ;
        newUsers[i]['nationality'] = e.nationality ;
        newUsers[i]['id_proof'] = e.id_proof ;
        newUsers[i]['idnumber'] = e.idnumber ;
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
            id_proof: "",
            idnumber: "",
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
            swal('Please fill all person details',' Email/ State / Adress','warning');
            return true;
        } else {
            const options = {

                // key: credentials.razorpay_key,
                key: razorpaykey,
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
                    
                    //successPay
                    axios.post(`${process.env.REACT_APP_BASE_URL}/admin/customers/safari`, data).then(result => {
                            if(result.status === 200 ) {
                                alert.success("Booked");

                                const paymentData = {
                                    "customer_id": result.data.data._id,
                                    "transaction_id": response.razorpay_payment_id,
                                    "amount": payable_Amount,
                                    "booking_type": 'safari'
                                }

                                axios.post(`${process.env.REACT_APP_BASE_URL}/admin/payment/safari/${result.data.data.safari_booking}`, paymentData , {
                                        headers: {
                                        'Accept': 'application/json, text/plain, */*',
                                        'Content-Type': 'application/json'
                                   },
                                }).then((response)=>{
                                    axios.post(`${process.env.REACT_APP_BASE_URL}/payment/`, paymentData , {
                                        headers: {
                                            'Accept': 'application/json, text/plain, */*',
                                            'Content-Type': 'application/json'
                                       },
                                    }).then((response)=>{});
                                });

                                const UpdateData = {
                                    "date": localStorage.getItem('selDate'),
                                    "vehicle": localStorage.getItem('selVehicle'),
                                    "zone": localStorage.getItem('selZone'),
                                    "timing": localStorage.getItem('selTiming'),
                                    "booking_persons": users.length
                                }

                                axios.post(`${process.env.REACT_APP_BASE_URL}/safari/dates/update-avilability`, UpdateData , {
                                    headers: {
                                        'Accept': 'application/json, text/plain, */*',
                                        'Content-Type': 'application/json'
                                   },
                                }).then((response)=>{});

                                localStorage.removeItem('selName');
                                localStorage.removeItem('selPhone');
                                localStorage.removeItem('selDate');
                                localStorage.removeItem('selVehicle');
                                localStorage.removeItem('selZone');
                                localStorage.removeItem('selTiming');
                                localStorage.removeItem('selAvailable');
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

    const handlePayNow = (e) =>{
      e.preventDefault();
      var an = document.querySelector('.pname').value;
      var am = document.querySelector('.pmobile').value;
      var ae = document.querySelector('.pemail').value;
      var as = document.querySelector('.pstate').value;
      var aa = document.querySelector('.paddr').value;
      var mpop = true;
      if(an == ''){
        swal('Please fill Name','person name is fillable','warning');
        mpop = false;
        return;
      }
      if(am == ''){
        swal('Please fill mobile','person mobile number is fillable','warning');
        mpop = false;
        return;
      }
      if(ae == ''){
        swal('Please fill email','person email is fillable','warning');
        mpop = false;
        return;
      }
      if(as == 'Please Select State'){
        swal('Please select state','person state is not selected','warning');
        mpop = false;
        return;
      }
      if(aa == ''){
        swal('Please fill Address','person address is mandatory','warning');
        mpop = false;
        return;
      }
      var alen = localStorage.getItem('adults');
      var filter   = Array.prototype.filter;

      var tn = document.querySelectorAll('.tname');
      var tg = document.querySelectorAll('.tgender');
      var tna = document.querySelectorAll('.tnation');
      var tp = document.querySelectorAll('.tidproof');
      var tpi = document.querySelectorAll('.tidno');
      var tlen = tn.length;

        var $e_tn = filter.call(tn,function(node) {
            return node.value != ''
        });
        var $e_tg = filter.call(tg,function(node) {
            return node.value != 'Please Select'
        });
        var $e_tna = filter.call(tna,function(node) {
            return node.value != 'Please Select'
        });
        var $e_tp = filter.call(tp,function(node) {
            return node.value != 'Please Select'
        });
        var $e_tpi = filter.call(tpi,function(node) {
            return node.value != ''
        });
     
      if($e_tn.length < tlen){
        swal('Please fill traveller name','One of the traveller name is missing','warning');
        mpop = false;
        return;
      }
      if($e_tg.length < tlen){
        swal('Please select traveller gender','One of the traveller gender is not selected','warning');
        mpop = false;
        return;
      }
      if($e_tna.length < tlen){
        swal('Please select traveller nationality','One of the traveller nationality  is not selected','warning');
        mpop = false;
        return;
      }
      if($e_tp.length < tlen){
        swal('Please select traveller ID Proof','One of the traveller ID Proof is not selected','warning');
        mpop = false;
        return;
      }
      if($e_tpi.length < tlen){
        swal('Please fill traveller ID number','One of the traveller ID number is missing','warning');
        mpop = false;
        return;
      }

      if(mpop == true){
          var btn = document.getElementById('paynow');
          btn.setAttribute('data-toggle','modal');
          btn.setAttribute('data-target','#exampleModalLong');
      }
      
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
                                                <input type="text" value = {Name} onChange = {(e) => setName(e.target.value)} className='form-control pname' placeholder='Name' />
                                            </div>
                                        </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>Mobile No</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" value = {Phone}  onChange = {(e) => setPhone(e.target.value)} className='form-control pmobile' placeholder='Mobile Number' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>Email ID</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text"  value = {Email} onChange = {(e) => setEmail(e.target.value)} className='form-control pemail' placeholder='Email ID' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-4' style={{marginTop: "20px"}}>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>State</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <select className="form-control ng-pristine ng-invalid ng-touched pstate" value = {State} onChange = {(e) => setState(e.target.value)} formcontrolname="state" id="state">
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
                                            <textarea onChange = {(e) => setAddress(e.target.value)} className="form-control ng-untouched ng-pristine ng-invalid paddr" cols="60" formcontrolname="address" id="address" placeholder="Full Address.."  rows="4" tabIndex="4"></textarea>
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
                                    { localStorage.getItem('selAvailable') == 1 ?  
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
                            <button className='btn btn-light'>Payable amount : { payable_Amount }</button> &nbsp;
                            <button type="button" id="paynow" onClick={handlePayNow}   className='btn btn-success paynow'>Pay Now </button> &nbsp; 
                            <br />

                <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font-bold text-black" id="exampleModalLongTitle">Booking Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                    <div className="modal-body">
                            <div className='table-responsive'>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                    <th className='text-black italic'>Date of Visit</th>
                                    <td colSpan={3} className='text-black italic'>{localStorage.getItem('selDate')}</td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>Location:</th>
                                    <td className='text-black italic'>Safari Booking</td>
                                    <th className='text-black italic'>Timings:</th>
                                    <td className='text-black italic'>{localStorage.getItem('selTiming')}</td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>No of Passenger:</th>
                                    <td className='text-black italic'>{users.length}</td>
                                    <th className='text-black italic'>Zone:</th>
                                    <td className='text-black italic'>{localStorage.getItem('selZone')}</td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>Total Amount:</th>
                                    <td colSpan={3} className='text-black italic'> {payable_Amount} INR</td>
                                    </tr>
                                    <tr>
                                    <th colSpan={4} className='text-black italic'>Important Notes</th>
                                    </tr>
                                    <tr>
                                    <td colSpan={4}>
                                        <p className='text-black italic mb-3'>Do not refresh your browser or click the back button during the payment process.</p>
                                        <p className='text-black italic mb-3'>Click on Make Payment button if you are agree to the term & condition.</p>
                                        <p className='text-black italic mb-3'>Once you click on button, you will be redirected to payment page.</p>
                                        <p className='text-black italic mb-3'>Please choose your payment mode (Netbanking, Credit Cards, Debit Cards etc.) and proceed for payment.</p>
                                        <p className='text-black italic mb-3'>Once you successfully complete the transaction your Transaction ID is generated which you can use for further query if any related to transaction.</p>
                                        <p className='text-black italic mb-3'>Once you click the payment button, you are agreed to mentioned terms and conditions to make payment with <div className='font-bold'>DTNT</div></p>
                                        <p className='text-black italic mb-3'>Call the driver one day before Safari for confirming the reporting point. Contact details of the driver is mentioned at your booking voucher.</p>
                                        <p className='text-black italic mb-3'>Slight changes in visit time may be done by authority due to Weather/Seasonal changes.</p>
                                    </td>

                                    </tr>
                                </tbody>
                                </table>
                            </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 sm:text-base font-medium rounded text-sm py-2 px-3 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" data-dismiss="modal">Cancel</button>
                        <button type="button" onClick={handleSaveData}  className="primary-btn bg-lemon py-2 text-center px-3 shadow-lg rounded sm:text-base font-semibold text-kenpozome hover:text-kenpozome">Make Payment</button>
                    </div>
                    </div>
                </div>
                </div>
                            <button className='btn btn-danger goback'>Go Back</button>       
                        </div>
            </div>
        </div>    
    )
}
