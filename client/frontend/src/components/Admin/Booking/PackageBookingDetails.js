import React from 'react'

export default function BookingDetails() {
  return (
    <div>
        <h1 className='text-2xl text-black font-bold mb-2'>Safari Booking Details</h1>
        <table className='table bg-white border border-slate-300'>
            <thead>
                <tr>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Vehicle Type</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Time</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Zone</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Amount</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Transaction ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-300 text-center'>Gypsy</td>
                    <td className='border border-slate-300 text-center'>19-09-2022</td>
                    <td className='border border-slate-300 text-center'>Morning</td>
                    <td className='border border-slate-300 text-center'>Zone 1/2/3/4/5</td>
                    <td className='border border-slate-300 text-center'>5000</td>
                    <td className='border border-slate-300 text-center'>pay_KIqAs1457vJSH5</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
