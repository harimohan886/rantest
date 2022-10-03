import React from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Pagination from '../../../components/Admin/Footer/Pagination';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import FilterEnquiry from '../../../components/Admin/Enquiry/FilterEnquiry';
import EnquiryList from '../../../components/Admin/Enquiry/EnquiryList';

export default function GeneralEnquiries() {
  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80 bigTable">
            <div className='mt-4'>
                <h1 className='text-2xl text-black font-bold mb-3'>General Enquiries</h1>
            </div>
            <FilterEnquiry/>
            <EnquiryList/>
            <Pagination/>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}
