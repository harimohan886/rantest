import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Pagination from '../../../components/Admin/Footer/Pagination';
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
        setpageCount(Math.ceil(result.data.data.total / result.data.data.per_page));
        setPage(result.data.data.current_page);
      }
    })
  }

  useEffect(() => {
    getEnquiries();
  }, [limit]);



  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    // setEnquiries(commentsFormServer.enquiries.data);
  };

  const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    item => ({ label: item, value: item })
  );
  const [bookingDate, setbookingDate] = useState(new Date());
  const [createdDate, setcreatedDate] = useState(new Date());

  const HandleDelete = (id) => {
    axios.delete(`/api/admin/enquiries/${id}`, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('tokenkey')
      },
    }).then(result => {
      alert.success("Data is deleted");
      setTimeout(() => {
        window.location = 'admin/hotel-enquiries';
      }, 1000);
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
          <FilterEnquiry />
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
