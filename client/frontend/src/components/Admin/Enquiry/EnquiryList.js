import React from 'react'

export default function EnquiryList() {
  return (
    <table className='table bg-white border border-slate-300 mt-4'>
        <thead>
            <tr>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Hotel</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Phone</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Message</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Type</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Created at</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-slate-300 text-center'>1</td>
                <td className='border border-slate-300 text-center'>2022-09-24</td>
                <td className='border border-slate-300 text-center'>Corbett Paradiso Resort</td>
                <td className='border border-slate-300 text-center'>Gagan Kumar jain</td>
                <td className='border border-slate-300 text-center'>9962863730</td>
                <td className='border border-slate-300 text-center'>Want to book 3 rooms in new forest rest house for 2 nights i.e. 16th and 17th October</td>
                <td className='border border-slate-300 text-center'><span className='bg-enquiry-brown text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs p-1 text-center inline-flex items-center mr-2'>Package</span></td>
                <td className='border border-slate-300 text-center'>23/09/2022 08:42:20 am</td>
                <td className='border border-slate-300 text-center'>
                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <i className='fas fa-trash'></i>
                    </button>
                </td>
            </tr> 
        </tbody>
    </table>
  )
}
