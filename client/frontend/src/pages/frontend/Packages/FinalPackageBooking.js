import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAlert } from "react-alert"
import axios from 'axios'
import { useParams } from "react-router-dom";
//import moment from 'moment';
//import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"



export default function FinalPackageBooking() {
    const navigate = useNavigate();

    let packageBookingInfo = localStorage.getItem("bookingData");
    const bookingId = localStorage.getItem("package_booking_id");

    if (packageBookingInfo !== null || packageBookingInfo !== '') {
        packageBookingInfo = JSON.parse(packageBookingInfo);

    } else {
        navigate("/package-details");
    }


    const params = useParams();
    const alert = useAlert();

    const [startDate, setStartDate] = useState();

    const [Gst, setGst] = useState(0);



    const HandlePayment = () => {

        console.log("StartDate", startDate);

        if ((packageBookingInfo.amount === '' || bookingId == '')) {
            alert.error("Data are missing please try again!");
            return true;
        } else {
            const options = {

                // key: credentials.razorpay_key,
                key: 'rzp_test_FvMwf7j3FOOnh8',
                // amount: PayAmount+('00').toString(),
                amount: Math.round(packageBookingInfo.amount * 100),
                currency: "INR",
                name: "Ranthambore",
                description: "Test Transaction",
                image: "/image/logo.png",

                handler: async function (response) {

                    const data = {
                        customer_id: '89790879879',
                        amount: packageBookingInfo.amount,
                        transaction_id: response.razorpay_payment_id,
                        booking_id: bookingId,
                    }

                    //successPay
                    axios.post(`${process.env.REACT_APP_BASE_URL}/admin/payment/package/${bookingId}`, data).then(result => {
                        if (result.status === 200) {

                            console.log('result booking', result);
                            alert.success("Booked");

                            // const paymentData = {
                            //     "customer_id": result.data.data._id,
                            //     "transaction_id": response.razorpay_payment_id,
                            //     "amount": PayAmount,
                            //     "booking_type": 'chambal'
                            // }

                            // axios.post(`${process.env.REACT_APP_BASE_URL}/admin/payment/chambal/${result.data.data.chambal_booking}`, paymentData, {
                            //     headers: {
                            //         'Accept': 'application/json, text/plain, */*',
                            //         'Content-Type': 'application/json'
                            //     },
                            // }).then((response) => {
                            //     axios.post(`${process.env.REACT_APP_BASE_URL}/payment`, paymentData, {
                            //         headers: {
                            //             'Accept': 'application/json, text/plain, */*',
                            //             'Content-Type': 'application/json'
                            //         },
                            //     }).then((response) => { });
                            // });

                            // localStorage.clear();
                            window.location.href = '/thankyou';
                        }
                    })

                },
                prefill: {
                    name: packageBookingInfo.name,
                    email: packageBookingInfo.email,
                    contact: packageBookingInfo.mobile,
                },
                notes: {
                    address: "Ranthambore",
                },
                theme: {
                    color: "#61dafb",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }
    }

    const loadScript = (src) => {
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

    const [disableDates, setDisableDates] = useState([]);

    var dates = [];

    useEffect(() => {

        const res = loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert.error("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // axios.get(`${process.env.REACT_APP_BASE_URL}/chambal/getDisableDates`, {
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ` + localStorage.getItem('accessToken')
        //     },
        // }).then(result => {

        //     dates = result.data.data.map(itm => (
        //         itm.date
        //     ))

        //     setDisableDates(dates);
        // });
    }, []);

    const HandleDisableDate = (date) => {
        setStartDate(date);
    }


    return (
        <div className="package-booking-details">
            <div className="packagebannersection" style={{ backgroundImage: "url(../image/hero-packages.jpeg)" }}>
                <div className="container sectionFrame">
                    <div className="banner-packageinfo">
                        <h1>Package Booking Online</h1>
                    </div>
                </div>
            </div>
            <div className="booking-detail-online">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="traveler-D">
                                <h2>Traveller Details</h2>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Travel Date :</strong></td>
                                            <td><input type="date" className="input-travel-date travel-date form-control" name="travel_date" min="2022-10-12" />
                                                <div className="text-danger travel-date-error" style={{ display: "none" }}>Booking not Available.Please Select another Date.</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Name :</td>
                                            <td>Developer</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile :</td>
                                            <td>000000000000</td>
                                        </tr>
                                        <tr>
                                            <td>Email ID :</td>
                                            <td>test123@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Packages :</td>
                                            <td>Corbett Fun Tour With 1 Jeep Safari</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="package-D">
                                <h2>Package Details</h2>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Package :</td>
                                            <td className="text-right">Standard</td>
                                        </tr>
                                        <tr>
                                            <td>Adults :</td>
                                            <td className="text-right">2 </td>
                                        </tr>
                                        <tr>
                                            <td>No of Rooms :</td>
                                            <td className="text-right">1 Rooms </td>
                                        </tr>
                                        <tr>
                                            <td>Price (RS) :</td>
                                            <td className="text-right" id="package-price">9850</td>
                                        </tr>
                                        <tr>
                                            <td>Kids :</td>
                                            <td className="text-right">2</td>
                                        </tr>
                                        <tr>
                                            <td>Total Child Cost :</td>
                                            <td className="text-right" id="total-kid-price">1800</td>
                                        </tr>
                                        <tr>
                                            <td>GST :</td>
                                            <td className="text-right">500</td>
                                        </tr>
                                        <tr>
                                            <td className="payable text-left">Payable Amount:</td>
                                            <td className="payable text-right" id="total-payable-amount">12150</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <div className="paynowoption">
                                <p className="text-center" id="show-message" style={{ display: "none", fontWeight: "bold" }}>Prices are high due to festival/Long weekend</p>
                                <ul className="list-inline usertype">
                                    <li className='list-inline-item'>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="6075" className="nationality-type" name="payment" data-payment="partially-paid" />
                                                <span className="forcustom half-payable-amount">Pay 50% ( INR <span>6075</span>)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="12150" className="nationality-type" name="payment" checked data-payment="paid" />
                                                <span className="forcustom total-payable-amount">Pay full (INR <span>{packageBookingInfo.amount} </span>)</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="findButton text-center">
                                <button onClick={HandlePayment} className="btn btn-warning btn-lg" id="razorpay">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
