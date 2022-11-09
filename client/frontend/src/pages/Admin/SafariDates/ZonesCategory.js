import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import Navbar from '../../../components/Admin/Navbar/AdminNavbar'
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin'


export default function ZoneCategory() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
     <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80 bigTable">
            <div className='mt-4'>
                <h1 className='text-2xl text-black font-bold mb-3'>Zone Categories</h1>
            </div>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Zone Name</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Availability</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-300 text-center'>1</td>
                        <td className='border border-slate-300 text-center'>Zone 1</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>2</td>
                        <td className='border border-slate-300 text-center'>Zone 2</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>3</td>
                        <td className='border border-slate-300 text-center'>Zone 3</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>4</td>
                        <td className='border border-slate-300 text-center'>Zone 4</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>5</td>
                        <td className='border border-slate-300 text-center'>Zone 5</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>6</td>
                        <td className='border border-slate-300 text-center'>Zone 6</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>7</td>
                        <td className='border border-slate-300 text-center'>Zone 7</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>8</td>
                        <td className='border border-slate-300 text-center'>Zone 8</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>9</td>
                        <td className='border border-slate-300 text-center'>Zone 9</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>10</td>
                        <td className='border border-slate-300 text-center'>Zone 10</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>11</td>
                        <td className='border border-slate-300 text-center'>Zone 11</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-slate-300 text-center'>12</td>
                        <td className='border border-slate-300 text-center'>Zone 12</td>
                        <td className='border border-slate-300 text-center'>Available</td>
                        <td class="border border-slate-300 text-center">
                            <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/admin/edit-zone">
                                <i class="fas fa-pencil"></i>
                            </Link>
                            <a class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" href="/admin/ranthambore-dates"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}