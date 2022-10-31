import React  , { useState , useEffect , useCallback } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import axios from 'axios';
import { useAlert } from "react-alert";
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";


export default function ChambalManagement() {

  const [details, setDetails] = useState([]); 
  const alert = useAlert();
  const [pageCount, setpageCount] = useState(0);
  const [page, setPage] = useState(1);

  const GetDetails = useCallback( () =>  {
       axios.get(`${process.env.REACT_APP_BASE_URL}/admin/bookings/chambal?page=`+page+'&type=chambal', {
           headers: {
           'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
               'Authorization': `Bearer `+localStorage.getItem('accessToken')
           },
           }).then(result => { 
               if(result.data.data.length > 0) {
                   setDetails(result.data.data);
                   setpageCount(Math.ceil(result.data.total / result.data.perPage));
                   setPage(result.data.page);
               } else {
                   setDetails([]);
                   setpageCount(0);
                   setPage(1);
               }
       })  
   },[page]);

   useEffect(() => {
       GetDetails();
   },[GetDetails]);

   const fetchComments = async (currentPage) => {
       const res = await fetch(
           `${process.env.REACT_APP_BASE_URL}/admin/bookings/chambal?page=`+currentPage+'&type=chambal' , {
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `+localStorage.getItem('accessToken')
               },
           }
       );
       const data = await res.json();
 
       return data
   };

   const handlePageClick = async (data) => {
       let currentPage = data.selected + 1;
       const commentsFormServer = await fetchComments(currentPage);
       setDetails(commentsFormServer.data);
   };


   const HandleDelete = (id) => {
       axios.delete(`${process.env.REACT_APP_BASE_URL}/admin/bookings/chambal/${id}`, {
       headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json',
           'Authorization': `Bearer `+localStorage.getItem('accessToken')
       },
       }).then(result => {
           alert.success("Data is deleted");
           setTimeout(() => {
           window.location = '/admin/chambal-bookings';
           }, 1000);
       })
   }

   const [filterZone , setFilterZone] = useState('');
   const [filterTiming , setTiming] = useState('');
   const [filterStatus , setFilterStatus] = useState('');
   const [filterVehicle , setFilterVehicle] = useState('');
   const [filterDate , setFilterDate] = useState();

   const HandleFilter = () => {

       const filterDateSelected = filterDate != undefined ? moment(filterDate).format("YYYY-MM-DD") : '';

       axios.get(`${process.env.REACT_APP_BASE_URL}/admin/bookings/chambal?page=`+page+'&filter_date='+filterDateSelected+'&filter_vehicle='+filterVehicle+'&filter_zone='+filterZone+'&filter_timing='+filterTiming+'&filter_status='+filterStatus, {
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json',
             'Authorization': `Bearer `+localStorage.getItem('accessToken')
           },
         }).then(result => { 
           if(result.data.data.length > 0) {
               setDetails(result.data.data);
               setpageCount(Math.ceil(result.data.total / result.data.perPage));
               setPage(result.data.page);
           } else {
               setDetails([]);
               setpageCount(0);
               setPage(1);
           } 
         })
   }

   const HandelReset = () => {
       setFilterZone('');setTiming('');setFilterStatus('');setFilterDate();setFilterVehicle('');
       GetDetails();
   }
   
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Chambal booking</h1>
            <form className="grid grid-cols-4 gap-4 mt-2 mb-2">
                    <div className='controlEnquiryDate'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Safari Booking Date</label>
                        <DatePicker selected={filterDate} onChange={(date) => setFilterDate(date)} />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vehicle Type <span style={{color: "#999", fontSize: "12px"}}>(Use it only for normal safari and remove from chambal safari)</span></label>
                        <select id="vehicles" value = {filterVehicle} onChange = {(e) => setFilterVehicle(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Please Select</option>
                            <option value="Gypsy">Gypsy</option>
                            <option value="Canter">Canter</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Safari Timing <span style={{color: "#999", fontSize: "12px"}}>(Use it according to normal/chambal timings)</span></label>
                        <select id="timings" value = {filterTiming} onChange = {(e) => setTiming(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Please Select</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Safari Zone <span style={{color: "#999", fontSize: "12px"}}>(Use it only for normal safari and remove from chambal safari)</span></label>
                        <select id="zones" value = {filterZone} onChange = {(e) => setFilterZone(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Please Select</option>
                            <option value="Zone 1/2/3/4/5">Zone 1/2/3/4/5</option>
                            <option value="Zone 6/7/8/9/10">Zone 6/7/8/9/10</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;</label>
                        <button type='button' onClick = {HandleFilter} className="text-white bg-hotel-maroon hover:bg-hotel-maroon focus:ring-4 focus:outline-none focus:bg-hotel-maroon font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <i className="fas fa-filter mr-2"></i> Filter
                        </button>
                        <button type='button' onClick = {HandelReset} className="text-white bg-hotel-maroon hover:bg-hotel-maroon focus:ring-4 focus:outline-none focus:bg-hotel-maroon font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <i className="fas fa-filter mr-2"></i> Reset
                        </button>
                    </div>
                </form>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Phone</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Timing</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                  { details && details.map((item,index) => (
                        <tr key={index}>
                            <td className='border border-slate-300 text-center'>{index+1}</td>
                            <td className='border border-slate-300 text-center'>{item.date} </td>
                            <td className='border border-slate-300 text-center'>{item.vehicle}</td>
                            <td className='border border-slate-300 text-center'>{item.timing}</td>
                            <td className='border border-slate-300 text-center'>{item.zone}</td>
                            <td className='border border-slate-300 text-center'>
                                <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to={`/admin/view-safari-booking/${item._id}`}>View details</Link>
                                <button onClick = {() => HandleDelete(item._id)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <i className='fas fa-trash'></i>
                                </button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
                   <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
