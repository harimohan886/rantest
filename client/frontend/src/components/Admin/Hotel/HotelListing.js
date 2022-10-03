import React from "react";
import { Link } from "react-router-dom";

export default function HotelListing() {
    
  return (
    <table className='table bg-white border border-slate-300 mt-4'>
        <thead>
            <tr>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Hotel</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Price</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Location</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Rating</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Availability</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-slate-300 text-center'>1</td>
                <td className='border border-slate-300 text-center'>Corbett Iris Resort</td>
                <td className='border border-slate-300 text-center'>₹5000</td>
                <td className='border border-slate-300 text-center'>Sasan Gir</td>
                <td className='border border-slate-300 text-center'>4 Star</td>
                <td className='border border-slate-300 text-center'>
                    <label htmlFor="default-toggle-1" className="inline-flex relative items-center w-full cursor-pointer">
                        <input type="checkbox" value="" id="default-toggle-1" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable</span>
                    </label>
                </td>
                <td className='border border-slate-300 text-center'> 
                    <div className="dropdown">
                        <button className="text-white font-bold text-sm px-6 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 bg-danger active:bg-hotel-maroon ease-linear transition-all duration-150 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            View
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to='/admin/edit-hotel' className="text-sm py-2 px-4 font-normal whitespace-no-wrap bg-transparent text-black block" style={{borderBottom: "1px solid #ddd"}}>
                                Edit
                            </Link>
                            <Link to="/admin/hotel-amenities" className="text-sm py-2 px-4 font-normal block whitespace-no-wrap bg-transparent text-black" style={{borderBottom: "1px solid #eee"}}>
                                Hotel Amenities
                            </Link>
                            <Link to='/admin/hotel-rooms' className="text-sm py-2 px-4 font-normal block whitespace-no-wrap bg-transparent text-black" style={{borderBottom: "1px solid #eee"}}>
                                Hotel Rooms
                            </Link>
                           
                            <button type="button" className="text-left border-b-1 border-black text-sm py-2 px-4 font-normal block whitespace-no-wrap bg-transparent text-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
            
        </tbody>
    </table>
  )
}