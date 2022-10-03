import React from 'react'

export default function CustomerDetails() {
  return (
    <div>
        <h2 className='text-2xl text-black font-bold mb-2 mt-12'>Customer Details</h2>
        <table className='table bg-white border border-slate-300'>
            <thead>
                <tr>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Name</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Mobile Number</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-300 text-center'>John Doe</td>
                    <td className='border border-slate-300 text-center'>9878651242</td>
                    <td className='border border-slate-300 text-center'>johndoe@gmail.com</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
