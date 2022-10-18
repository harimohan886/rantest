import { React, useState } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import * as moment from 'moment';
import { useAlert } from "react-alert";

export default function CreateGirEvent() {

  const [startDate, setStartDate] = useState(new Date());
  const [availability, setAvailability] = useState('');
  const [timing, setTiming] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [zone, setZone] = useState('');
  
  const alert = useAlert();

  const HandleSaveData = (e) => {
    e.preventDefault();

    const data = {
       "date": moment(startDate).format("YYYY-MM-DD"),
       "timing" : timing,
       "availability": availability,
       "zone": zone,
       "vehicle" : vehicle
    }

    console.log(data);

    axios.post(`${process.env.REACT_APP_BASE_URL}/safari/dates` , data , {
        headers: {
            'Authorization': `Bearer `+localStorage.getItem('accessToken')
        },
    }).then(res => {
        if(res.status === 200) {
            alert.success("Data is created successfully");
            setTimeout(() => {
                window.location = '/admin/gir-events';
            }, 1000);

        } else {
            alert.error("Please fill all the blank fields");
        }
    });
  }

  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/> 
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
        <h1 className='text-2xl text-black font-bold mb-3'>Create Gir event</h1>
        <form className='mt-4 shadow-md p-4 rounded bg-white'>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={moment().toDate()}/>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vehicle</label>
          <select id="vehicle" onChange = { (e) => setVehicle(e.target.value)} className="max193 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Please select</option>
            <option value="Canter">Canter</option>
            <option value="Gypsy">Gypsy</option>
        </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zone</label>
          <select id="zone" onChange = { (e) => setZone(e.target.value)} className="max193 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Please select</option>
            <option value="Zone 1/2/3/4/5">Zone 1/2/3/4/5</option>
            <option value="Zone 6/7/8/9/10">Zone 6/7/8/9/10</option>
        </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Timing</label>
          <select id="timing" onChange = { (e) => setTiming(e.target.value)} className="max193 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Please select</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
        </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Availability</label>
          <input type="text" onChange = { (e) => setAvailability(e.target.value)} className="max193 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>  
        </div>
        <div className='flex'>
          <button type="button"  onClick = {HandleSaveData} className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Submit</button>
          <Link to='/admin/gir-events' className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2">Go Back</Link>
        </div>
      </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}