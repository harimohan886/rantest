import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import FilterEnquiry from '../../../components/Admin/Enquiry/FilterEnquiry';
import EnquiryList from '../../../components/Admin/Enquiry/EnquiryList';
import axios from 'axios';
import ReactPaginate from "react-paginate";


export default function GeneralEnquiries() {

  const [enquiries, setEnquiries] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [page, setPage] = useState(1);
  let limit = 10;


  function getEnquiries() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/enquiries?type=package&page=` + page, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('accessToken')
      },
    }).then(result => {

      console.log('result enq', result)
      if (result.data.data.length > 0) {
        setEnquiries(result.data.data);
        setpageCount(Math.ceil(result.data.total / result.data.perPage));
        setPage(result.data.page);
      }
    })
  }

  useEffect(() => {
    getEnquiries();
  }, [limit]);



  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
  };



  const getFilterData = ({ phone, type, customer, bookingDate, createdDate }) => {
    console.log('fut data', phone, type, customer, bookingDate, createdDate);

    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/enquiries?type=${type}&page=${page}&customer=${customer}&phone=${phone}&bookingDate=${bookingDate}&createDate=${createdDate}`, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('accessToken')
      },
    }).then(result => {

      console.log('filter enq', result)
      if (result.data.data.length > 0) {
        setEnquiries(result.data.data);
        setpageCount(Math.ceil(result.data.total / result.data.perPage));
        setPage(result.data.page);
      }
    })



  }



  return (
    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar />
      <Navbar />
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80 bigTable">
          <div className='mt-4'>
            <h1 className='text-2xl text-black font-bold mb-3'>General Enquiries</h1>
          </div>
          <FilterEnquiry onSubmit={getFilterData} />
          <EnquiryList enquiries={enquiries} />

          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <FooterAdmin />
    </div>
  )
}
