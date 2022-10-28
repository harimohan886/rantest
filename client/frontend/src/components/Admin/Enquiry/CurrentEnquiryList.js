import React from 'react'

export default function CurrentEnquiryList() {
  return (
    <table className='table bg-white border border-slate-300 mt-4'>
        <thead>
            <tr>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Phone</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Vehicle Type</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Timing</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Zone</th>
                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td className='border border-slate-300 text-center'>1</td>
                <td className='border border-slate-300 text-center'>Gagan Kumar Jain</td>
                <td className='border border-slate-300 text-center'>9962863730</td>
                <td className='border border-slate-300 text-center'>websales999@gmail.com</td>
                <td className='border border-slate-300 text-center'>2022-09-24</td>
                <td className='border border-slate-300 text-center'>Gypsy</td>
                <td className='border border-slate-300 text-center'>Morning</td>
                <td className='border border-slate-300 text-center'>Zone 1/2/3/4/5</td>
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
