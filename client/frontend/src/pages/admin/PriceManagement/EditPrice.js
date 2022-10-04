import React from "react";
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import PriceType from "../../../components/Admin/PriceManagement/PriceType";

export default function EditPrice() {

  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/> 
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
          <h1 className='text-2xl text-black font-bold mb-3'>Edit Safari Prices</h1>
          <form className='mt-4 shadow-md p-4 rounded bg-white'>
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4">
              <li className="nav-item" role="presentation">
                <a href="#tabs-indian" className="nav-link block active" id="tabs-indian-tab" data-toggle="pill" data-target="#tabs-indian" role="tab" aria-controls="tabs-indian" aria-selected="true">Indian</a>
              </li>
              <li className="nav-item ml-2" role="presentation">
                <a href="#tabs-foreigner" className="nav-link block" id="tabs-foreigner-tab" data-toggle="pill" data-target="#tabs-foreigner" role="tab" aria-controls="tabs-foreigner" aria-selected="false">Foreigner</a>
              </li>      
            </ul>
            <PriceType/>
          </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
