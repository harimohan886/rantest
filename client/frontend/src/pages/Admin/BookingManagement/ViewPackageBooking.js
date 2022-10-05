
import React from 'react';

import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import BookingDetails from '../../../components/Admin/Booking/BookingDetails';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import CustomerDetails from '../../../components/Admin/Booking/CustomerDetails';

export default function ViewPackageBooking() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <BookingDetails/>
            <CustomerDetails/>
            <h3 className='text-2xl text-black font-bold mb-2 mt-12'>Package Details</h3>
            <table className='table bg-white border border-slate-300'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Package</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Room Type</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No. of Rooms</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Adults</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Kids</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>Gir Holiday Tour With 3 Nights and 2 Days</td>
                        <td className='border border-slate-300 text-center'>Deluxe</td>
                        <td className='border border-slate-300 text-center'>1 Room</td>
                        <td className='border border-slate-300 text-center'>2</td>
                        <td className='border border-slate-300 text-center'>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}