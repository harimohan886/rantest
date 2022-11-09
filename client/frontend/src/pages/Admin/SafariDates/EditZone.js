
import React from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';

export default function EditZone() {

  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Edit Zone</h1>
            <form>
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Zone name</label>
                    <input type='text' className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Zone name'/>
                </div>
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Select Zones</label>
                    <select name="availability" id="packageAvail" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Please Select</option>
                        <option value="1">Zone 1</option>
                        <option value="2">Zone 2</option>
                        <option value="3">Zone 3</option>
                        <option value="4">Zone 4</option>
                        <option value="5">Zone 5</option>
                        <option value="6">Zone 6</option>
                        <option value="7">Zone 7</option>
                        <option value="8">Zone 8</option>
                        <option value="9">Zone 9</option>
                        <option value="10">Zone 10</option>
                        <option value="11">Zone 11</option>
                        <option value="12">Zone 12</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Availability</label>
                    <select name="availability" id="packageAvail" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Please Select</option>
                        <option value="1">Available</option>
                        <option value="0">Not Available</option>
                    </select>
                </div>
                <div className='form-group'>
                    <div class="flex">
                        <button type="submit" class="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                        <Link class="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2" to="/admin/zone-categories">Go Back</Link>
                    </div>
                </div>
            </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}