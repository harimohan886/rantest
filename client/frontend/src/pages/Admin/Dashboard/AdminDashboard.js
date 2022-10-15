import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import HeaderStats from "../../../components/Admin/Cards/HeaderStats";
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import GeneralEnquiry from "../../../components/Admin/Cards/GeneralEnquiry";
import HotelEnquiry from "../../../components/Admin/Cards/HotelEnquiry";
import FooterAdmin from "../../../components/Admin/Footer/FooterAdmin";


export default function AdminDashboard() {

  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar />
      <AdminNavbar />
      <HeaderStats />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <GeneralEnquiry />
          <HotelEnquiry />
        </div>
      </div>
      <FooterAdmin />
    </div>
  )
}
