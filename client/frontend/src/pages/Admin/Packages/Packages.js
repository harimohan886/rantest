import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import Pagination from '../../../components/Admin/Footer/Pagination';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import FilterHotel from '../../../components/Admin/Hotel/FilterHotel';
import PackageListing from '../../../components/Admin/Package/PackageListing';

export default function Packages() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <div className="grid grid-cols-2 gap-4">
                <div className='mt-4'>
                    <h1 className='text-2xl text-black font-bold mb-3'>Packages</h1>
                </div>
                <div className='mt-4'>
                    <Link to='/admin/add-package' type="submit" className="text-white float-right bg-success font-medium rounded px-5 py-2.5 text-center">Add Package</Link>
                </div>
            </div>
            <FilterHotel/>
            <PackageListing/>
            <Pagination/>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
