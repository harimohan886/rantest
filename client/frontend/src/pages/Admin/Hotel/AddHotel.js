import React from 'react';
import { Link } from 'react-router-dom';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import MultiImageUpload from '../../../components/Admin/Uploader/MultiImageUpload';


export default function AddHotel() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
     <Sidebar/>
     <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <div className='mt-4'>
                <h1 className='text-2xl text-black font-bold mb-3'>Add Hotel</h1>
            </div>
            <form>
                <div className='grid grid-cols-3 gap-4 mt-2'>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Hotel name</label>
                        <input type="text" id="hotelName" placeholder='Hotel name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Price</label>
                        <input type="text" id="hotelPrice" placeholder='₹' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Rating</label>
                        <select id="hotelRating" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Please Select</option>
                            <option>3 star</option>
                            <option>4 star</option>
                            <option>5 star</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Location</label>
                        <input type="text" id="location" placeholder='Location' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">State</label>
                        <select id="hotelState" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Please Select</option>
                            <option>UP</option>
                            <option>Delhi</option>
                            <option>Haryana</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                        <select id="hotelAvail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Please Select</option>
                            <option>Available</option>
                            <option>Not available</option>
                        </select>
                    </div>
                </div>
                <div className='mb-3 mt-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Address</label>
                    <textarea id="address" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></textarea>
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">About Hotel</label>
                    <textarea id="aboutHotel" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About Hotel"></textarea>
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Meta title</label>
                    <input type="text" id="hotelMeta" placeholder='Meta Title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Meta description</label>
                    <textarea id="hotelMetaDescription" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Meta description"></textarea>
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Safari distance</label>
                    <textarea id="safariDistance" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Safari distance"></textarea>
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Thumbnail</label>
                    <input className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>
                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Cover Image</label>
                    <input className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>
                <div className='mb-3 multiImages'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Hotel Images</label>
                    <MultiImageUpload/>
                </div>
                <div className='flex'>
                    <button type="submit" className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                    <Link to='/admin/hotels' className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2">Go Back</Link>
                </div>
            </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
