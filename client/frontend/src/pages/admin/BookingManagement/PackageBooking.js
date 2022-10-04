import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Pagination from '../../../components/Admin/Footer/Pagination';
import BookingFilter from '../../../components/Admin/Booking/BookingFilter';


export default function PackageBooking() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Package booking</h1>
            <BookingFilter/>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Date</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Phone</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Email</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Package</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Amount</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Payment Status</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Created at</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'  style={{minWidth: "110px"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='border border-slate-300 text-left'>1</td>
                        <td className='border border-slate-300 text-left'>2022-09-27</td>
                        <td className='border border-slate-300 text-left'>John Doe</td>
                        <td className='border border-slate-300 text-left'>8408028381</td>
                        <td className='border border-slate-300 text-left'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-left'>Gir Holiday Tour With 3 Nights and 2 Days</td>
                        <td className='border border-slate-300 text-left'>5000</td>
                        <td className='border border-slate-300 text-left'>Paid</td>
                        <td className='border border-slate-300 text-left'>2022-07-14</td>
                        <td className='border border-slate-300 text-left' style={{minWidth: "110px"}}>
                        <Link to='/admin/view-package-booking' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <i className="fas fa-eye"></i>
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
