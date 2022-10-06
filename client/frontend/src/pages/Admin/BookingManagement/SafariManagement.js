import React from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Admin/Footer/Pagination';
import BookingFilter from '../../../components/Admin/Booking/BookingFilter';


export default function SafariManagement() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Safari booking</h1>
            <BookingFilter/>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Date</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Type</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Mobile Number</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Amount</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Payment Status</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>2022-09-27</td>
                        <td className='border border-slate-300 text-center'>Gir Jungle Trail</td>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-center'>8408028381</td>
                        <td className='border border-slate-300 text-center'>5000</td>
                        <td className='border border-slate-300 text-center'>Paid</td>
                        <td className='border border-slate-300 text-center'>
                        <Link to='/admin/view-safari-booking' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            View details
                        </Link>
                        <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <i className="fas fa-trash"></i>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>2022-09-27</td>
                        <td className='border border-slate-300 text-center'>Gir Jungle Trail</td>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-center'>8408028381</td>
                        <td className='border border-slate-300 text-center'>5000</td>
                        <td className='border border-slate-300 text-center'>Paid</td>
                        <td className='border border-slate-300 text-center'>
                        <Link to='/admin/view-safari-booking' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            View details
                        </Link>
                        <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <i className="fas fa-trash"></i>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>2022-09-27</td>
                        <td className='border border-slate-300 text-center'>Gir Jungle Trail</td>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-center'>8408028381</td>
                        <td className='border border-slate-300 text-center'>5000</td>
                        <td className='border border-slate-300 text-center'>Paid</td>
                        <td className='border border-slate-300 text-center'>
                        <Link to='/admin/view-safari-booking' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            View details
                        </Link>
                        <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <i className="fas fa-trash"></i>
                        </Link>
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
