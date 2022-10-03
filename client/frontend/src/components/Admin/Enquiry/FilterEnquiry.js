import { React, useState } from 'react';
import DatePicker from "react-datepicker";


export default function FilterEnquiry() {
    const [bookingDate, setbookingDate] = useState(new Date());
    const [createdDate, setcreatedDate] = useState(new Date());
  return (
    <form className="grid grid-cols-6 gap-4 mt-2 mb-2">
        <div className='form-group'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enquiry Type</label>
            <select id="enquiryType" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Please Select</option>
                <option>Gir Jungle Trail</option>
                <option>Devalia Safari Park</option>
                <option>Kankai Temple</option>
                <option>Hotel</option>
                <option>Package</option>
            </select>
        </div>
        <div className='controlEnquiryDate'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Booking Date</label>
            <DatePicker selected={bookingDate} onChange={(date) => setbookingDate(date)} />
        </div>
        <div className='form-group'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
            <select id="customers" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Please select</option>
                <option>John Doe</option>
                <option>Mark Spencer</option>
                <option>Kaira</option>
            </select>
        </div>
        <div className='form-group'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="number" id="phNumber" placeholder="Phone Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className='form-group controlEnquiryDate'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Booking Created</label>
            <DatePicker selected={createdDate} onChange={(date) => setcreatedDate(date)} />
        </div>
        <div className='form-group'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;</label>
            <button type='button' className="min-150 text-white bg-hotel-maroon hover:bg-hotel-maroon focus:ring-4 focus:outline-none focus:bg-hotel-maroon font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <i className="fas fa-filter mr-2"></i> Filter
            </button>
        </div>
    </form>
  )
}