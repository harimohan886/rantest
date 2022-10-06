import React, { useState } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Select from 'react-select';
import IndianCategory from '../../../components/Admin/Package/IndianCategory';

const getHotels = [
    { value: 'Corbett Iris Resort', label: 'Corbett Iris Resort' },
    { value: 'Maya Resort', label: 'Maya Resort' },
    { value: 'Hotel Trident', label: 'Hotel Trident' },
    { value: 'City Palace', label: 'City Palace' },
]

export default function EditPackageCategory() {

const [setSelectedHotels] = useState(null);
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Edit Package Category</h1>
            <form>
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Category name</label>
                    <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Category name'/>
                </div>
                <div className='form-group'>
                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Select Hotels</label>
                    <Select
                    defaultValue={[getHotels[2], getHotels[3]]}
                    onChange={setSelectedHotels}
                    options={getHotels}
                    isMulti
                    className='setReactSelect'
                    />
                </div>
                <IndianCategory/>
                <hr />
            </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
