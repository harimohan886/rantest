import React from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Admin/Footer/Pagination';
import CurrentEnquiryFilter from '../../../components/Admin/Enquiry/CurrentEnquiryFilter';


export default function SafariManagement() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Safari booking</h1>
            <CurrentEnquiryFilter/>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Phone</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Vehicle Type</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Timing</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Zone</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td className='border border-slate-300 text-center'>1</td>
                        <td className='border border-slate-300 text-center'>Gagan Kumar Jain</td>
                        <td className='border border-slate-300 text-center'>9962863730</td>
                        <td className='border border-slate-300 text-center'>websales999@gmail.com</td>
                        <td className='border border-slate-300 text-center'>2022-09-24</td>
                        <td className='border border-slate-300 text-center'>Gypsy</td>
                        <td className='border border-slate-300 text-center'>Morning</td>
                        <td className='border border-slate-300 text-center'>Zone 1/2/3/4/5</td>
                        <td className='border border-slate-300 text-center'>
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/view-safari-booking">View details</Link>
                            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <i className='fas fa-trash'></i>
                            </button>
                        </td> 
                    </tr> 
                </tbody>
            </table>
            <Pagination/>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
