import React from 'react';
import { Link } from 'react-router-dom';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import AmenityStatus from '../../../components/Admin/Hotel/AmenityStatus';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';


export default function HotelAmenities() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
     <Sidebar/>
     <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <div className="grid grid-cols-2 gap-4">
                <div className='mt-4'>
                    <h1 className='text-2xl text-black font-bold mb-3'>Hotel Amenities </h1>
                </div>
                <div className='mt-4'>
                    <Link to='/admin/add-hotel-amenity' type="submit" className="text-white float-right bg-success font-medium rounded px-5 py-2.5 text-center">Add Amenity</Link>
                </div>
            </div>
            <AmenityStatus/>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Amenity</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Logo</th>
                        <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Availability</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>1</td>
                        <td className='border border-slate-300 text-center'>Wi-Fi</td>
                        <td className='border border-slate-300 text-center'>
                            <img style={{margin: "0 auto"}} src="../image/icons/swimming-pool.png" alt='swimming pool' />
                        </td>
                        <td className='border border-slate-300 text-center'>
                            <label htmlFor="default-toggle-1" className="inline-flex relative w-full cursor-pointer">
                                <input type="checkbox" value="" id="default-toggle-1" className="sr-only peer" />
                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available</span>
                            </label>
                        </td>
                        <td className='border border-slate-300 text-center'>
                            <Link to='/admin/edit-hotel-amenity' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <i className="fas fa-pencil"></i>
                            </Link>
                            <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <i className="fas fa-trash"></i>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
