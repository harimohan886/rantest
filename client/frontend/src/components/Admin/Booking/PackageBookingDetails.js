import React from 'react'

export default function BookingDetails({details}) {
  return (
    <div>
        <h1 className='text-2xl text-black font-bold mb-2'>Package Booking Details</h1>
        <table className='table bg-white border border-slate-300'>
            <thead>
                <tr>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Vehicle Type</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Package Name</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Room Type</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Nationality</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No of Kids</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No of Rooms</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No of dults</th>
                    <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Price</th>
                </tr>
            </thead>
            <tbody>
                { details &&
                    <tr>
                        <td className='border border-slate-300 text-center'>Gypsy</td>
                        <td className='border border-slate-300 text-center'>{details.date}</td>
                        <td className='border border-slate-300 text-center'>{details.room_type}</td>
                        <td className='border border-slate-300 text-center'>{details.package_name}</td>
                        <td className='border border-slate-300 text-center'>{details.nationality_type}</td>
                        <td className='border border-slate-300 text-center'>{details.no_of_kids}</td>
                        <td className='border border-slate-300 text-center'>{details.no_of_rooms}</td>
                        <td className='border border-slate-300 text-center'>{details.no_of_adult}</td>
                        <td className='border border-slate-300 text-center'>{details.price}</td>
                    </tr>
                }
            </tbody>
        </table>
    </div>
  )
}
