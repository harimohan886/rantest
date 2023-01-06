import React, { useState,forwardRef, useImperativeHandle, useRef } from 'react';
//import { Helmet } from "react-helmet";
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function PackagePricing({ optionData, packageName }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState();
    const [states] = useState('');
    const [country] = useState('');
    const [choose, setChoose] = useState('');
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
   // const slug = useParams().id;

   

    const submit = () => {
        if (name === '' || number === '' || email === '' || date === '') {
            swal("Please fill all feilds to proceed");

        } else if (choose === '') {
            swal("Please choose one package");
        }
        else {

            var person = '';

            var person = document.querySelector('#myTab .active').innerHTML;
            var child_selector = '#tab-indian .active';
            if (person === 'Foreigner') {
                var child_selector = '#tab-foreigner .active';
            }

            var current = document.querySelector('.choose_package:checked');
            var package_cat = document.querySelector(child_selector).innerHTML;
            var package_id = current.getAttribute('package_id');
            var category_id = current.getAttribute('category_id');

            let nextSibling = current.parentNode.nextElementSibling;
            let counter = 0;
            let children = 0;
            let adults = current.getAttribute('adults');
            let rooms = current.getAttribute('rooms');
            while (nextSibling) {
                if (counter === 3) {
                    children = nextSibling.childNodes[0].selectedIndex;
                }
                nextSibling = nextSibling.nextElementSibling;
                counter++;
            }

            localStorage.setItem('adultss', adults);
            localStorage.setItem('childd', children);
            localStorage.setItem('pcat', package_cat)

            const data = {
                "date": moment(date).format("YYYY-MM-DD"),
                "type": "package",
                "name": name,
                "mobile": number,
                "email": email,
                "country": country,
                "state": states,
                "package_option_id": choose,
                "package_id": package_id,
                "package_name": packageName,
                "no_of_adult": adults,
                "no_of_kids": children,
                "no_of_rooms": rooms,
                "amount": amount,
                "nationality_type": person,
                "category_id": category_id,
                "category_name": package_cat,

            }

            axios.post(`${process.env.REACT_APP_BASE_URL}/admin/customers/package`, data).then((result) => {
                console.log('result', result.data)


                localStorage.setItem('package_customer_id', result.data.data._id);
                localStorage.setItem('package_booking_id', result.data.data.package_booking);
                localStorage.setItem('bookingData', JSON.stringify(data));
                navigate("/book-package");


            }).catch(
                function (error) {
                    console.log('Show error notification!', error.response.data.error.message);
                    swal(error.response.data.error.message);
                }
            )

        }


    }
    const handleChange = (e, price, child_cost) => {
        setChoose(e.target.value);

        let numChild = document.getElementById('kids' + e.target.value);
        let no_of_child = numChild.options[numChild.selectedIndex].text;
        let total_child_cost = 0;
        if (no_of_child) {
            total_child_cost = parseInt(child_cost * no_of_child)
        }

        let total = parseInt(total_child_cost) + parseInt(price)

        setAmount(total);

    }

    const setTotalPrice = e => {

        let childCount = e.nativeEvent.target.selectedIndex;
        let childPrice = e.target.getAttribute('cprice');
        let totalPrice = e.target.getAttribute('ctotal');
        let p_option_id = e.target.getAttribute('p_option_id');
        let total = parseInt(childPrice * childCount) + parseInt(totalPrice);
        e.target.parentNode.nextElementSibling.innerHTML = '';
        e.target.parentNode.nextElementSibling.innerHTML = total;

        if (choose === '' || p_option_id === choose) {
            setAmount(total);

        }


    }
    const proceed = (e)=>{

       e.preventDefault();
       var check = true;
       if (name === '' || number === '' || email === '' || date === '') {
          swal("Please fill all feilds to proceed","Details are missing");
          check = false;

        } else if (choose === '') {
            swal("Please choose one package","package is not selected");
            check = false;
        }
        else {
           
           var package_sel = document.querySelector('#roomTab .active').innerHTML;
           var c_option = document.querySelector('.choose_package:checked');
           var adultss = c_option.getAttribute('adults');
           var childd  = c_option.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].value;
           
           var btn = document.getElementById('#proceed');
          
           if(check == true){
            btn.setAttribute('data-toggle','modal');
            btn.setAttribute('data-target','#exampleModalLong');
            e.target.setAttribute('data-toggle','modal');
            e.target.setAttribute('data-target','#exampleModalLong');
            document.getElementById('pcat').innerHTML   = package_sel;
            document.getElementById('acount').innerHTML = adultss;
            document.getElementById('ccount').innerHTML = childd;
           } 

        }

    }
    React.useEffect(()=>{
        var cat = document.querySelectorAll('#roomTab .nav-item');
        cat.forEach((itm,i)=>{
            itm.onclick = () =>{
                setChoose('');
            }
        });
        
    })
    return (
        <>
    
            <div className='package-pricing'>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr key="099">
                                <th scope="col" className='font-bold text-center'>Select</th>
                                <th scope="col" className='font-bold text-center'>Adults</th>
                                <th scope="col" className='font-bold text-center'>No of Rooms </th>
                                <th scope="col" className='font-bold text-center'>Price (RS) </th>
                                <th scope="col" className='font-bold text-center'>Kids </th>
                                <th scope="col" className='font-bold text-center'>Total Price </th>
                            </tr>
                        </thead>
                        <tbody>


                            {optionData?.map((option, key) => {

                                var child = [];
                                for (let i = 0; i <= option.no_of_kids; i++) {
                                    child.push(i);
                                }


                                return (
                                    <tr key={key.toString()} className="package-group">
                                        <td className='text-center'>
                                            <input className="check choose_package" type="radio" onChange={e => handleChange(e, option.price, option.kid)} adults={option.adults} category_id={option.category_id} rooms={option.rooms} id={"default-radio-" + key} name="default-radio" package_id={option.package_id} value={option._id} />
                                        </td>
                                        <td className='text-center'>{option.adults}</td>
                                        <td className='text-center'> {option.rooms} Room {(option.extra_beds !== 0) ? option.extra_beds + " Extra Bed" : ''}</td>
                                        <td className="package-price text-center"> {option.price}</td>
                                        <td className='text-center'>

                                            <select id={`kids${option._id}`} p_option_id={option._id} cprice={option.kid} ctotal={option.price} onChange={setTotalPrice} className="form-control no_of_kids">

                                                {child && child.map((ch, i) => {
                                                    return (<option value={i}>{i}</option>)
                                                })}
                                            </select>
                                        </td>
                                        <td className="final-price text-center" >{option.price}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="user-detail">
                    <div className="row">
                        <div className="form-group col-md-3">
                            <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required="" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="number" name="number" id="number" onChange={(e) => setNumber(e.target.value)} className="form-control" placeholder="Phone No" required="" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        {/*<div className="form-group col-md-3">
                            <input type="text" className="form-control" name="states" id="states" onChange={(e) => setStates(e.target.value)} placeholder="State" required />
                        </div>*/}

                        {/*<div className="form-group col-md-3">
                            <input type="text" className="form-control" name="country" id="country" onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
                        </div>*/}

                        <div className="form-group col-md-3">
                            <input type="date" onChange={(e) => setDate(e.target.value)} className="input-travel-date travel-date form-control" name="travel_date" min={moment().format("YYYY-MM-DD")} />
                        </div>

                    </div>
                    <div className="text-center">
                        <button type = "button" id="#proceed" className="btn btn-warning btn-lg" onClick={proceed}>Proceed</button>


                    </div>
                </div>
            </div>
            {/* <Helmet>
                <script src="/js/Script.js" type="text/javascript" />
            </Helmet> */}
        </>
    )
}
