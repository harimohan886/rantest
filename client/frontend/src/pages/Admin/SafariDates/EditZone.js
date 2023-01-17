
import React , { useState , useEffect } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { DateRangePicker } from 'rsuite';
import moment from 'moment'

export default function EditZone() {

    const alert = useAlert();
    const params = useParams();

    const [name , setName] = useState('');
    const [zone , setZone] = useState('');
    const [status , setStatus] = useState('');
    const [inStart,setInStart] = useState();
    const [inEnd,setInEnd]     = useState();
    const [startDate,setStart] = useState();
    const [endDate,setEnd]   = useState();
    const [preDate,setPreDate] = useState([]);
        function GetDetails()   {
            axios.get(`${process.env.REACT_APP_BASE_URL}/safari/zone-categories/${params.id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer `+localStorage.getItem('accessToken')
                },
            }).then(result => { 
                 setName(result.data.data.name);
                 setStatus(result.data.data.availability);
                 setZone(result.data.data._id);
                 setInStart(result.data.data.startDate);
                 setInEnd(result.data.data.endDate);
                 setPreDate([new Date(result.data.data.startDate),new Date(result.data.data.endDate)]);

            })
        };
    
      useEffect(() => {
        GetDetails();
      },[]);

     const HandleSubmit = () => {

        const data = {
            "name" : name,
            "availability" : status,
            "startDate"    : startDate,
            "endDate"      : endDate
        }

        axios.patch(`${process.env.REACT_APP_BASE_URL}/safari/zone-categories/${params.id}`, data, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer `+localStorage.getItem('accessToken')
                },
            }).then(result => { 
                 alert.success("Data is updated");
                 window.location.href = '/admin/zone-categories';
            })

     } 
     const dateRange = (date) => {
        let start = moment(date[0]).format('YYYY-MM-DD');
        let end   = moment(date[1]).format('YYYY-MM-DD'); 
        setPreDate([new Date(start),new Date(end)]);
        setStart(start);
        setEnd(end);
    };
 
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Edit Zone</h1>
            <form>
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Zone name</label>
                    <input type='text' value = {name} onChange={(e) => setName(e.target.value)} className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Zone name'/>
                </div>
                <div className='form-group'>
                <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Block Dates between</label>
                <DateRangePicker 
                value={preDate}
                onChange={dateRange}
                showMeridian
                format="yyyy-MM-dd"
                />
                </div>
                
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Availability</label>
                    <select name="availability" value = {status} onChange={(e) => setStatus(e.target.value)} id="packageAvail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Please Select</option>
                        <option value="1">Available</option>
                        <option value="0">Not Available</option>
                    </select>
                </div>
                <div className='form-group'>
                    <div className='flex'>
                        <button type="button" onClick={HandleSubmit} className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                        <Link className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2" to="/admin/zone-categories">Go Back</Link>
                    </div>
                </div>
            </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}