import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
//import { Helmet } from "react-helmet";
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function PackagePricing({ optionData, packageName, setData }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState();
    const [states] = useState('');
    const [country] = useState('');
    const [choose, setChoose] = useState('');
    const [amount, setAmount] = useState(0);
    const [opData, setOpData] = useState([]);
    const [extraBed,setExtraBed] = useState(0);
    const navigate = useNavigate();
    // const slug = useParams().id;

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

    const RoomInc = () => {
        var person = document.querySelector('#myTab .active').innerHTML;
        let ix = (person == "Indian") ? 0 : 1;

        let tdate = document.querySelectorAll('.travel_date')[ix].value;
        if (tdate == '') { swal('Please select travel date', ''); return; }

        let adultCount = parseInt(document.querySelectorAll('.no_of_adults')[ix].value);
        let childCount = parseInt(document.querySelectorAll('.no_of_kids')[ix].value);
        let roomCount = parseInt(document.querySelectorAll('.no_of_rooms')[ix].value);
        let rc = roomCount;

        let extra = ((adultCount + childCount) - rc * 2);
        let ead = (extra - childCount > 0) ? extra - childCount : 0;
        let ecc = (extra - ead > 0) ? extra - ead : 0;
        let safariCost = ((adultCount + childCount) * opData.safari_price);
        setExtraBed( (extra > 0) ? extra : 0 );
        let PkgPrice = parseInt(opData.price + (ead * opData.eadult) + (ecc * opData.echild));

        let fp = (PkgPrice * roomCount) + safariCost;
        document.querySelectorAll('.final-price')[ix].innerHTML = fp;
        setAmount(fp);
    }

    const setTotalPrice = e => {
        console.log(opData);
        var person = document.querySelector('#myTab .active').innerHTML;
        let ix = (person == "Indian") ? 0 : 1;

        let tdate = document.querySelectorAll('.travel_date')[ix].value;
        if (tdate == '') { swal('Please select travel date', ''); return; }

        let adultCount = parseInt(document.querySelectorAll('.no_of_adults')[ix].value);
        let childCount = parseInt(document.querySelectorAll('.no_of_kids')[ix].value);
        let rc = Math.ceil((adultCount + childCount) / 4);

        let extra = ((adultCount + childCount) - rc * 2);
        let ead = (extra - childCount > 0) ? extra - childCount : 0;
        let ecc = extra - ead;
        let safariCost = ((adultCount + childCount) * opData.safari_price);
        setExtraBed( (extra > 0) ? extra : 0 );
        let PkgPrice = parseInt(opData.price + (ead * opData.eadult) + (ecc * opData.echild));
        let fp = parseInt((rc * PkgPrice) + safariCost);

        document.querySelectorAll('.no_of_rooms')[ix].value = rc;
        document.querySelectorAll('.final-price')[ix].innerHTML = fp;
        setAmount(fp);



    }
    const proceed = (e) => {

        e.preventDefault();
        
        if (amount == 0) { swal('Please select travel date', ''); return; }
        var check = true;
        if (name === '' || number === '' || email === '' || date === '') {
            swal("Please fill all feilds to proceed", "Details are missing");
            check = false;

        }
        else {

            var package_sel = document.querySelector('#roomTab .active').innerHTML;
            var adultss = document.querySelector('.no_of_adults').value;
            var childd = document.querySelector('.no_of_kids').value;
            var rooms = document.querySelector('.no_of_rooms').value;

            if (check == true) {
                e.target.setAttribute('data-toggle', 'modal');
                e.target.setAttribute('data-target', '#exampleModalLong');
                document.getElementById('pcat').innerHTML = package_sel;
                document.getElementById('acount').innerHTML = adultss;
                document.getElementById('ccount').innerHTML = childd;
                document.getElementById('mdate').innerHTML = moment(date).format("YYYY-MM-DD");
                document.getElementById('amount').innerHTML = amount + ' INR';
            }

            var person = '';
            var person = document.querySelector('#myTab .active').innerHTML;
            var child_selector = '#tab-indian .active';
            if (person === 'Foreigner') {
                var child_selector = '#tab-foreigner .active';
            }

            var package_cat = document.querySelector(child_selector).innerHTML;
            var package_id = optionData[0].package_id;
            var category_id = optionData[0].category_id;

            const data = {
                "date": moment(date).format("YYYY-MM-DD"),
                "type": "package",
                "name": name,
                "mobile": number,
                "email": email,
                "country": country,
                "state": states,
                "package_option_id": optionData[0]._id,
                "package_id": package_id,
                "package_name": packageName,
                "no_of_adult": adultss,
                "no_of_kids": childd,
                "no_of_rooms": rooms,
                "amount": amount,
                "nationality_type": person,
                "category_id": category_id,
                "category_name": package_cat,

            }

            //setData(data);
            axios.post(`${process.env.REACT_APP_BASE_URL}/admin/customers/package`, data).then((result) => {

                localStorage.setItem('package_customer_id', result.data.data._id);
                localStorage.setItem('package_booking_id', result.data.data.package_booking);
                localStorage.setItem('bookingData', JSON.stringify(data));
                localStorage.setItem('extraBed',extraBed);
                window.location.href = ("/book-package");


            }).catch(
                function (error) {
                    console.log('Show error notification!', error.response.data.error.message);
                    swal(error.response.data.error.message);
                }
            )

        }

    }
    const CheckOptions = (e, date) => {

        if (date != null) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/package/packages/getOptions`, { date: date, cdata: optionData }).then((res) => {

                if (res.data.block == 1) { swal('Booking Not Available', ''); }
                else {

                    var person = document.querySelector('#myTab .active').innerHTML;
                    var pricedata = {};
                    var ix = (person === 'Indian') ? 0 : 1;
                    pricedata = (res.data.data[0].pricingData);

                   // document.querySelectorAll('.package-price')[ix].innerHTML = pricedata.price;
                    setOpData(pricedata);

                    let adultCount = parseInt(document.querySelectorAll('.no_of_adults')[ix].value);
                    let childCount = parseInt(document.querySelectorAll('.no_of_kids')[ix].value);
                    let roomCount = parseInt(document.querySelectorAll('.no_of_rooms')[ix].value);
                    let rc = roomCount;

                    let extra = ((adultCount + childCount) - rc * 2);
                    let ead = (extra - childCount > 0) ? extra - childCount : 0;
                    let ecc = (extra - ead > 0) ? extra - ead : 0;
                    let safariCost = ((adultCount + childCount) * pricedata.safari_price);
                    setExtraBed( (extra > 0) ? extra : 0 );
                    let PkgPrice = parseInt(pricedata.price + (ead * pricedata.eadult) + (ecc * pricedata.echild));

                    let fp = (PkgPrice * roomCount) + safariCost;
                    document.querySelectorAll('.final-price')[ix].innerHTML = fp;
                    setAmount(fp);

                    // document.querySelectorAll('.final-price')[ix].innerHTML = pricedata.price + pricedata.safari_price;
                    //setAmount(pricedata.price + pricedata.safari_price);
                }


            });
        }
    }
    React.useEffect(() => {
        var cat = document.querySelectorAll('#roomTab .nav-item');
        cat.forEach((itm, i) => {
            itm.onclick = () => {
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
                                <th scope="col" className='font-bold text-center'>Travel Date</th>
                                <th scope="col" className='font-bold text-center'>Adults</th>
                                <th scope="col" className='font-bold text-center'>Kids </th>
                                <th scope="col" className='font-bold text-center'>No of Rooms </th>
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

                                        {/*<td className='text-center'>
                                            <input className="check choose_package" type="radio" onChange={e => handleChange(e, option.price, option.kid)} adults={option.adults} category_id={option.category_id} rooms={option.rooms} id={"default-radio-" + key} name="default-radio" package_id={option.package_id} value={option._id} />
                                        </td>*/}
                                        <td className='text-center'>
                                            <input type="date" onChange={(e) => CheckOptions(e, e.target.value)} className="input-travel-date travel-date form-control travel_date" name="travel_date" min={moment().format("YYYY-MM-DD")} />
                                        </td>
                                        <td className='text-center'>
                                            <select id={`adults${option._id}`} sname="adult" p_option_id={option._id} aprice={option.extra_adult_price} ctotal={option.price} onChange={setTotalPrice} className="form-control no_of_adults">

                                                {new Array(20).fill().map((ch, i) => {
                                                    return (<option value={i + 1}>{i + 1}</option>)
                                                })}

                                            </select>
                                        </td>
                                        <td className='text-center'>
                                            <select id={`kids${option._id}`} sname="child" p_option_id={option._id} cprice={option.kid} ctotal={option.price} onChange={setTotalPrice} className="form-control no_of_kids">

                                                {new Array(20).fill().map((ch, i) => {
                                                    return (<option value={i}>{i}</option>)
                                                })}

                                            </select>
                                        </td>
                                        <td className='text-center'>

                                            <select id={`room${option._id}`} sname="room" onChange={RoomInc} className="form-control no_of_rooms">

                                                {new Array(20).fill().map((ch, i) => {
                                                    return (<option value={i + 1}>{i + 1}</option>)
                                                })}
                                            </select>
                                        </td>
                                        {/*<td className="package-price text-center">0</td>*/}
                                        <td className="final-price text-center" >0</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="user-detail">
                    <div className="row">

                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required="" />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="number" name="number" id="number" onChange={(e) => setNumber(e.target.value)} className="form-control" placeholder="Phone No" required="" />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        {/*<div className="form-group col-md-3">
                            <input type="text" className="form-control" name="states" id="states" onChange={(e) => setStates(e.target.value)} placeholder="State" required />
                        </div>*/}

                        {/*<div className="form-group col-md-3">
                            <input type="text" className="form-control" name="country" id="country" onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
                        </div>*/}

                    </div>
                    <div className="text-center">
                        <button type="button" id="#proceed" className="btn btn-warning btn-lg" onClick={proceed}>Proceed</button>


                    </div>
                </div>
            </div>
            {/* <Helmet>
                <script src="/js/Script.js" type="text/javascript" />
            </Helmet> */}
        </>
    )
}
