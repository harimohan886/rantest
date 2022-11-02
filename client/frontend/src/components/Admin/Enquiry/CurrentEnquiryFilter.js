import axios from 'axios';
import { React, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import moment from 'moment'

export default function CurrentEnquiryFilter(props) {
    const [bookingDate, setbookingDate] = useState(new Date());
    const [createdDate, setcreatedDate] = useState(new Date());

    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');
    const [customer, setCustomer] = useState('');
    const [customerData, setCustomerData] = useState([]);

    function getAllCustomer() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/bookings/current/customers`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(result => {
            if (result.data.data.length > 0) {
                setCustomerData(result.data.data)
            }
        })
    }

    useEffect(() => {
        getAllCustomer();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        let booking_date = '';
        let created_date = '';

        if (bookingDate && bookingDate !== 'null') {
            booking_date = moment(bookingDate).format('YYYY-MM-DD')


        }

        if (createdDate && createdDate !== 'null') {
            created_date = moment(createdDate).format('YYYY-MM-DD')


        }

        props.onSubmit({ phone, customer, booking_date, created_date })
    }




    return (
    <form className="grid grid-cols-4 gap-4 mt-2 mb-2" onSubmit={handleSubmit}>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
            <select id="customers" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Please select</option>
                
                <option>John Doe</option>
                <option>Mark Spencer</option>
                <option>Kaira</option>
            </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="number" id="phNumber" placeholder="Phone Number" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" placeholder="Email ID" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className='controlEnquiryDate'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Safari Booking Date</label>
            <DatePicker selected={bookingDate} onChange={(date) => setbookingDate(date)} />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vehicle Type <span style={{color: "#999", fontSize: "12px"}}>(Use it only for normal safari and remove from chambal safari)</span></label>
            <select id="vehicles" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Please Select</option>
                <option>Gypsy</option>
                <option>Canter</option>
            </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Safari Timing <span style={{color: "#999", fontSize: "12px"}}>(Use it according to normal/chambal timings)</span></label>
            <select id="timings" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Please Select</option>
                <option>Morning</option>
                <option>Evening</option>
            </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Safari Zone <span style={{color: "#999", fontSize: "12px"}}>(Use it only for normal safari and remove from chambal safari)</span></label>
            <select id="zones" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Please Select</option>
                <option>Zone 1/2/3/4/5</option>
                <option>Zone 6/7/8/9/10</option>
            </select>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;</label>
            <button type='button' className="text-white bg-hotel-maroon hover:bg-hotel-maroon focus:ring-4 focus:outline-none focus:bg-hotel-maroon font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <i className="fas fa-filter mr-2"></i> Filter
            </button>
            <button type='button' className="text-white bg-hotel-maroon hover:bg-hotel-maroon focus:ring-4 focus:outline-none focus:bg-hotel-maroon font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <i className="fas fa-filter mr-2"></i> Reset
            </button>
        </div>
    </form>
    )
}