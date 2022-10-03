import React from 'react'
import { Link } from 'react-router-dom'

export default function PriceList() {

  return (
    <>
    <table className='table bg-white border border-slate-300 mt-4'>
             <thead>
                 <tr>
                     <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>#</th>
                     <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Zone</th>
                     <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td className='border border-slate-300 text-center'>1</td>
                     <td className='border border-slate-300 text-center'>Gir Jungle Trail</td>
                     <td className='border border-slate-300 text-center'>
                     <Link to='/admin/edit-price' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                         <i className="fas fa-pencil"></i>
                     </Link>
                     </td>
                 </tr>
                 <tr>
                     <td className='border border-slate-300 text-center'>2</td>
                     <td className='border border-slate-300 text-center'>Gir Devalia Safari</td>
                     <td className='border border-slate-300 text-center'>
                     <Link to='/admin/edit-price' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                         <i className="fas fa-pencil"></i>
                     </Link>
                     </td>
                 </tr>
                 <tr>
                     <td className='border border-slate-300 text-center'>3</td>
                     <td className='border border-slate-300 text-center'>Kankai Temple Safari</td>
                     <td className='border border-slate-300 text-center'>
                     <Link to='/admin/edit-price' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                         <i className="fas fa-pencil"></i>
                     </Link>
                     </td>
                 </tr>
             </tbody>
         </table>


    


           </>
  )
}
