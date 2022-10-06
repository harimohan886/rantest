import React from 'react';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import RoomFacility from './RoomFacility';


export default function AddRoom() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
     <Sidebar/>
     <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <div className='mt-4'>
                <h1 className='text-2xl text-black font-bold mb-3'>Add Room</h1>
            </div>
            <form>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Room name</label>
                    <input type="text" id="roomName" placeholder='Room Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                    <select id="roomAvail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Please Select</option>
                        <option>Available</option>
                        <option>Not available</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Image</label>
                    <input className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>
                <div className='mb-3'>
                    <RoomFacility/>
                </div>
            </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
