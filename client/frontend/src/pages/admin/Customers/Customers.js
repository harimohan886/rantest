import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Pagination from '../../../components/Admin/Footer/Pagination';

export default function Customers() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Customers</h1>
            <form className="grid grid-cols-5 gap-4 mt-2 mb-2">
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Booking Type</label>
                    <select id="safariType" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Gir Jungle Trail</option>
                        <option>Devalia Safari</option>
                        <option>Kankai Temple Safari</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
                    <input type="text" placeholder='Customer Name' id="customerName" className="block w-full text-gray-900 bg-white rounded border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Email</label>
                    <input type="email" placeholder='Customer Email' id="customerEmail" className="block w-full text-gray-900 bg-white rounded border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                    <input type="number" placeholder='Mobile Number' id="customerMobile" className="block w-full text-gray-900 bg-white rounded border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className='form-group'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;</label>
                    <button type='button' className="min-150 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i className="fas fa-filter mr-2"></i> Filter
                    </button>
                </div>
            </form>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Date Time</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Mobile Number</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Address</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>2022-09-19, <span className='font-bold'>08:30:00</span></td>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-center'>8408028381</td>
                        <td className='border border-slate-300 text-center'>C6, Sector 7, Noida</td>
                        <td className='border border-slate-300 text-center'>
                        <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <i className="fas fa-trash"></i>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>2022-09-19, <span className='font-bold'>08:30:00</span></td>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-center'>8408028381</td>
                        <td className='border border-slate-300 text-center'>C6, Sector 7, Noida</td>
                        <td className='border border-slate-300 text-center'>
                        <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <i className="fas fa-trash"></i>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>2022-09-19, <span className='font-bold'>08:30:00</span></td>
                        <td className='border border-slate-300 text-center'>John Doe</td>
                        <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                        <td className='border border-slate-300 text-center'>8408028381</td>
                        <td className='border border-slate-300 text-center'>C6, Sector 7, Noida</td>
                        <td className='border border-slate-300 text-center'>
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
