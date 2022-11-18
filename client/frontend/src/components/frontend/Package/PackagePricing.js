import React, { useState, useEffect } from 'react';
//import { Helmet } from "react-helmet";
import swal from 'sweetalert'
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';



export default function PackagePricing({ optionData, packageName }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState();
    const [states, setStates] = useState('');
    const [country, setCountry] = useState('');
    const [choose, setChoose] = useState('');
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const slug = useParams().id;



    const submit = () => {
        if (name == '' || number == '' || email == '' || date == '') {
            swal("Please fill all feilds to proceed");

        } else if (choose == '') {
            swal("Please choose one package");
        }
        else {

            var person = '';

            var person = document.querySelector('#myTab .active').innerHTML;
            var child_selector = '#tab-indian .active';
            if (person == 'Foreigner') {
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
                if (counter == 3) {
                    children = nextSibling.childNodes[0].selectedIndex;
                }
                nextSibling = nextSibling.nextElementSibling;
                counter++;
            }

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

        if (choose === '' || p_option_id == choose) {
            setAmount(total);

        }


    }

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
                                        <td className='text-center'> {option.rooms} Room {(option.extra_beds != 0) ? option.extra_beds + " Extra Bed" : ''}</td>
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
                        <button type = "button" data-toggle="modal" data-target="#exampleModalLong"className="btn btn-warning btn-lg">Proceed</button>

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
                                    <td colSpan={3} className='text-black italic'>{moment(date).format("YYYY-MM-DD")}</td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>Package Name:</th>
                                    <td className='text-black italic'>{packageName}</td>
                                    <th className='text-black italic'>Package Category Name:</th>
                                    <td className='text-black italic'>{package_cat}</td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>No of Adults:</th>
                                    <td className='text-black italic'>{adults}</td>
                                    <th className='text-black italic'>No of Children:</th>
                                    <td className='text-black italic'>{children}</td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>Total Amount:</th>
                                    <td colSpan={3} className='text-black italic'> {amount} INR</td>
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
                        <button type="button" onClick={submit} className="primary-btn bg-lemon py-2 text-center px-3 shadow-lg rounded sm:text-base font-semibold text-kenpozome hover:text-kenpozome">Make Payment</button>
                    </div>
                    </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
            {/* <Helmet>
                <script src="/js/Script.js" type="text/javascript" />
            </Helmet> */}
        </>
    )
}
