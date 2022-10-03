
import React from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import BookingDetails from '../../../components/Admin/Booking/BookingDetails';
import CustomerDetails from '../../../components/Admin/Booking/CustomerDetails';

export default function ViewSafariBooking() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <BookingDetails/>
            <CustomerDetails/>
            <h3 className='text-2xl text-black font-bold mb-2 mt-12'>Traveller Details</h3>
            <table className='table bg-white border border-slate-300'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Age</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Customer Type</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Gender</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Nationality</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Id Proof Type</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Id Proof Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>Pritam Jena</td>
                        <td className='border border-slate-300 text-center'>28</td>
                        <td className='border border-slate-300 text-center'>Adult</td>
                        <td className='border border-slate-300 text-center'>Male</td>
                        <td className='border border-slate-300 text-center'>Indian</td>
                        <td className='border border-slate-300 text-center'>Aadhar Card</td>
                        <td className='border border-slate-300 text-center'>766351088154</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>Sohrab Khan</td>
                        <td className='border border-slate-300 text-center'>28</td>
                        <td className='border border-slate-300 text-center'>Adult</td>
                        <td className='border border-slate-300 text-center'>Male</td>
                        <td className='border border-slate-300 text-center'>Indian</td>
                        <td className='border border-slate-300 text-center'>Aadhar Card</td>
                        <td className='border border-slate-300 text-center'>766351088154</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>Nurul Hasan</td>
                        <td className='border border-slate-300 text-center'>28</td>
                        <td className='border border-slate-300 text-center'>Adult</td>
                        <td className='border border-slate-300 text-center'>Male</td>
                        <td className='border border-slate-300 text-center'>Indian</td>
                        <td className='border border-slate-300 text-center'>Aadhar Card</td>
                        <td className='border border-slate-300 text-center'>766351088154</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>Krishna Mishra</td>
                        <td className='border border-slate-300 text-center'>28</td>
                        <td className='border border-slate-300 text-center'>Adult</td>
                        <td className='border border-slate-300 text-center'>Male</td>
                        <td className='border border-slate-300 text-center'>Indian</td>
                        <td className='border border-slate-300 text-center'>Aadhar Card</td>
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