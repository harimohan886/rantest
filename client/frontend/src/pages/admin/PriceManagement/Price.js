import React from 'react'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import PriceList from '../../../components/Admin/PriceManagement/PriceList';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';

export default function Price() {

  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/> 
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 pt-12">
          <div className="grid grid-cols-2 gap-4">
            <div className='mt-50'>
              <h1 className='text-2xl text-black font-bold mb-3'>Safari Price </h1>
            </div>
          </div>
          <PriceList/>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
