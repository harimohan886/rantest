import React  , { useState , useEffect , useCallback } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Admin/Footer/Pagination';
import CurrentEnquiryFilter from '../../../components/Admin/Enquiry/CurrentEnquiryFilter';
import axios from 'axios';
import { useAlert } from "react-alert";
import * as moment from 'moment';
import ReactPaginate from "react-paginate";

export default function SafariManagement() {

  const [details, setDetails] = useState([]); 
   const alert = useAlert();
   const [pageCount, setpageCount] = useState(0);
   const [page, setPage] = useState(1);

   const GetDetails = useCallback( () =>  {
        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/bookings/safari?page=`+page+'&type=safari', {
            headers: {
            'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer `+localStorage.getItem('accessToken')
            },
            }).then(result => { 
                if(result.data.data.length > 0) {
                    setDetails(result.data.data);
                    setpageCount(Math.ceil(result.data.total / result.data.perPage));
                    setPage(result.data.page);
                } else {
                    setDetails([]);
                    setpageCount(0);
                    setPage(1);
                }
        })  
    },[page]);

    useEffect(() => {
        GetDetails();
    },[GetDetails]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `${process.env.REACT_APP_BASE_URL}/admin/bookings/safari?page=`+currentPage+'&type=safari' , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer `+localStorage.getItem('accessToken')
                },
            }
        );
        const data = await res.json();
  
        return data
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setDetails(commentsFormServer.data);
    };


    const HandleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/admin/bookings/safari/${id}`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer `+localStorage.getItem('accessToken')
        },
        }).then(result => {
            alert.success("Data is deleted");
            setTimeout(() => {
            window.location = '/admin/safari-booking';
            }, 1000);
        })
    }

    const [type , setType] = useState('');
    const [filterName , setFilterName] = useState('');
    const [filterEmail , setFilterEmail] = useState('');
    const [filterMobile , setFilterMobile] = useState('');

    const HandleFilter = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/customers?page=`+page+'&type='+type+'&filter_name='+filterName+'&filter_email='+filterEmail+'&filter_mobile='+filterMobile, {
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'Authorization': `Bearer `+localStorage.getItem('accessToken')
            },
          }).then(result => { 
                if(result.data.data.length > 0) {
                    setDetails(result.data.data);
                    setpageCount(Math.ceil(result.data.total / result.data.perPage));
                    setPage(result.data.page);
                    setPage(result.data.page);
                } else {
                    setDetails([]);
                    setpageCount(0);
                    setPage(1);
                }
          })
    }

    const HandelReset = () => {
        setType('');setFilterName('');setFilterEmail('');setFilterMobile('');
        GetDetails();
    }

  return (

    <div className="relative md:ml-64 bg-default-skin">
      <Sidebar/>
      <AdminNavbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <h1 className='text-2xl text-black font-bold mb-3'>Safari booking</h1>
            <CurrentEnquiryFilter/>
            <table className='table bg-white border border-slate-300 mt-4'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Booking Date</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Vehicle Type</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Timing</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Zone</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                { details && details.map((item,index) => (
                        <tr key={index}>
                            <td className='border border-slate-300 text-center'>{index+1}</td>
                            <td className='border border-slate-300 text-center'>{item.date} </td>
                            <td className='border border-slate-300 text-center'>{item.vehicle}</td>
                            <td className='border border-slate-300 text-center'>{item.timing}</td>
                            <td className='border border-slate-300 text-center'>{item.zone}</td>
                            <td className='border border-slate-300 text-center'>
                                <Link class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to={`/admin/view-safari-booking/${item._id}`}>View details</Link>
                                <button onClick = {() => HandleDelete(item._id)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    <i className='fas fa-trash'></i>
                                </button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
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
      <FooterAdmin/>
    </div>
  )
}
