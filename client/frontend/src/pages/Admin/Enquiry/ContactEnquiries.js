
import React from 'react'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import Navbar from '../../../components/Admin/Navbar/AdminNavbar'
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin'
import Pagination from '../../../components/Admin/Footer/Pagination';

export default function ContactEnquiries() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
     <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80 bigTable">
            <div className='mt-4'>
                <h1 className='text-2xl text-black font-bold mb-3'>Contact Enquiries</h1>
            </div>
            <form className="grid grid-cols-6 gap-4 mt-2 mb-2">
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer Name</label>
                     <input type="text" id="name" placeholder="Customer Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                    <input type="number" id="phNumber" placeholder="Phone Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="text" id="Email" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;</label>
                    <button type='button' className="min-150 text-white bg-hotel-maroon hover:bg-hotel-maroon focus:ring-4 focus:outline-none focus:bg-hotel-maroon font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <i className="fas fa-filter mr-2"></i> Filter
                    </button>
                </div>
            </form>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Phone</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Message</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>1</td>
                        <td className='border border-slate-300 text-center'>Sohrab Khan</td>
                        <td className='border border-slate-300 text-center'>0000000000</td>
                        <td className='border border-slate-300 text-center'>avinash.kr9811@gmail.com</td>
                        <td className='border border-slate-300 text-center'>
                            Himachal Pradesh has the reputation for a temperate climate and to experience that, you must visit in between May and June
                        </td>
                        <td className='border border-slate-300 text-center'>
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