
import React from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import BookingDetails from '../../../components/Admin/Booking/BookingDetails';
import CustomerDetails from '../../../components/Admin/Booking/CustomerDetails';
import ChambalDetailsInfo from '../../../components/Admin/Booking/ChambalDetailsInfo';

export default function ViewChambalBooking() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <ChambalDetailsInfo/>
            <CustomerDetails/>
            <h3 className='text-2xl text-black font-bold mb-2 mt-12'>Traveller Details</h3>
            <table className='table bg-white border border-slate-300'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No. of persons (Indian)</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No. of persons (Foreigner)</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Id Proof Number</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>2</td>
                        <td className='border border-slate-300 text-center'>0</td>
                        <td className='border border-slate-300 text-center'>766351088154</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}