import React from 'react'

export default function ChambalDetailsInfo() {
  return (
    <div>
        <h1 className='text-2xl text-black font-bold mb-2'>Chambal Booking Details</h1>
        <table className='table bg-white border border-slate-300'>
            <thead>
                <tr>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Chambal Booking Type</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Timing</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Amount</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Payment Status</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Transaction ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-300 text-center'>Chambal Safari Booking with Pickup and Drop from Resort</td>
                    <td className='border border-slate-300 text-center'>19-09-2022</td>
                    <td className='border border-slate-300 text-center'>08:00 am to 09:00 am</td>
                    <td className='border border-slate-300 text-center'>5000</td>
                    <td className='border border-slate-300 text-center'>Paid</td>
                    <td className='border border-slate-300 text-center'>pay_KIqAs1457vJSH5</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
