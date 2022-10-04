import React from "react";
import { Link } from "react-router-dom";


export default function PackageListing() {

  return (
    <table className='table bg-white border border-slate-300 mt-4'>
        <thead>
            <tr>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Package</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Price</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Rating</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Package Type</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Availability</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-slate-300 text-center'>1</td>
                <td className='border border-slate-300 text-center'>Gir Holiday tour with 2 night and 3 days</td>
                <td className='border border-slate-300 text-center'>₹5000</td>
                <td className='border border-slate-300 text-center'>5 Star</td>
                <td className='border border-slate-300 text-center'>Normal</td>
                <td className='border border-slate-300 text-center'>
                    <label htmlFor="default-toggle-1" className="inline-flex relative items-center w-full cursor-pointer">
                        <input type="checkbox" value="" id="default-toggle-1" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available</span>
                    </label>
                </td>
                <td className='border border-slate-300 text-center'>
                <div className="dropdown">
                        <button className="text-white font-bold text-sm px-6 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 bg-danger active:bg-hotel-maroon ease-linear transition-all duration-150 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            View
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="/admin/edit-package" style={{borderBottom: "1px solid #ddd"}} className="text-sm py-2 px-2 font-normal block whitespace-no-wrap bg-transparent text-black">
                                Edit
                            </Link>
                            <Link to="/admin/package-features" style={{borderBottom: "1px solid #ddd"}} className="text-sm py-2 px-2 font-normal block whitespace-no-wrap bg-transparent text-black">
                                Features
                            </Link>
                            <Link to='/admin/package-features' style={{borderBottom: "1px solid #ddd"}} className="text-sm py-2 px-2 font-normal block whitespace-no-wrap bg-transparent text-black">
                                Inclusion
                            </Link>
                            <Link to='/admin/package-features' style={{borderBottom: "1px solid #ddd"}} className="text-sm py-2 px-2 font-normal block whitespace-no-wrap bg-transparent text-black">
                                Exclusion
                            </Link>
                            <Link to='/admin/package-features' style={{borderBottom: "1px solid #ddd"}} className="text-sm py-2 px-2 font-normal block  whitespace-no-wrap bg-transparent text-black">
                                Categories
                            </Link>
                            <Link to='/admin/package-features' className="text-sm py-2 px-2 font-normal block whitespace-no-wrap bg-transparent text-black">
                                Iternary
                            </Link>
                            <div className="h-0 border border-solid border-t-0 border-blueGray-800" />
                                <button type="button" className="text-left border-b-1 border-black text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-danger">
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