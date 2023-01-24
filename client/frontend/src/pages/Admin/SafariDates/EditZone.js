
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { DateRangePicker } from 'rsuite';
import ReactPaginate from "react-paginate";
import moment from 'moment'
import swal from 'sweetalert'

export default function EditZone() {

    const alert = useAlert();
    const params = useParams();

    const [name, setName] = useState('');
    const [zone, setZone] = useState('');
    const [status, setStatus] = useState('');
    const [inStart, setInStart] = useState();
    const [inEnd, setInEnd] = useState();
    const [startDate, setStart] = useState();
    const [endDate, setEnd] = useState();
    const [preDate, setPreDate] = useState([]);
    const [zoneDates, setZoneDates] = useState([]);
    const [details, setDetails] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [page, setPage] = useState(1);

    const GetDetails = useCallback(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/safari/dates/getZoneDates/${params.id}?page=` + page, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(result => {
            console.log(result.data);
            setDetails(result.data.data);
            setpageCount(Math.ceil(result.data.total / result.data.perPage));
            setPage(result.data.page);
        })
    }, [page]);

    useEffect(() => {

        GetDetails();

        axios.get(`${process.env.REACT_APP_BASE_URL}/safari/zone-categories/${params.id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(result => {
            setName(result.data.data.name);
            setStatus(result.data.data.availability);
            setZone(result.data.data._id);
            setInStart(result.data.data.startDate);
            setInEnd(result.data.data.endDate);
            if (result.data.data.startDate != undefined && result.data.data.endDate != undefined)
                setPreDate([new Date(result.data.data.startDate), new Date(result.data.data.endDate)]);

        })

    }, []);

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setDetails(commentsFormServer.data);
    };

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `${process.env.REACT_APP_BASE_URL}/safari/dates/getZoneDates/${params.id}?page=` + currentPage, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }
        );
        const data = await res.json();

        return data
    };




    const HandleSubmit = () => {

        const data = {
            "name": name,
            "availability": status,
            "startDate": startDate,
            "endDate": endDate
        }

        axios.patch(`${process.env.REACT_APP_BASE_URL}/safari/zone-categories/${params.id}`, data, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(result => {
            alert.success("Data is updated");
            window.location.href = '/admin/zone-categories';
        })

    }
    const dateRange = (date) => {
        let start = moment(date[0]).format('YYYY-MM-DD');
        let end = moment(date[1]).format('YYYY-MM-DD');
        setPreDate([new Date(start), new Date(end)]);
        setStart(start);
        setEnd(end);
    };

    const ImportCsv = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            const headers = text.slice(0, text.indexOf('\n')).split(';');

        }
        reader.readAsText(file);

        const formData = new FormData();
        formData.append(
            "zone_id", params.id
        );
        formData.append(
            "csv", file
        );

        axios.post(`${process.env.REACT_APP_BASE_URL}/safari/dates/import-zone-csv `, formData, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(result => {
            alert.success(result.data.message);
            setTimeout(() => {
                window.location.reload(true);
            }, 1000);
        })
    }


    const HandleDelete = (id) => {

        const cnfm = window.confirm('Are you sure ?');
        if (cnfm == true) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/safari/dates/date-zone-delete/${id}`).then((res) => {
                swal('Date Deleted', '');
                setTimeout(() => {
                    window.location.reload(true);
                }, 1000);
            });
        }
    }



    return (
        <div className="relative md:ml-64 bg-default-skin">
            <Sidebar />
            <Navbar />
            <div className="flex flex-wrap min600">
                <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
                    <h1 className='text-2xl text-black font-bold mb-3'>Edit Zone</h1>
                    <form>
                        <div className='form-group'>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Zone name</label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Zone name' />
                        </div>
                        {/*<div className='form-group'>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Block Dates between</label>
                            <DateRangePicker 
                            value={preDate}
                            onChange={dateRange}
                            showMeridian
                            format="yyyy-MM-dd"
                            />
                            </div>*/}

                        <div className='form-group'>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300'>Availability</label>
                            <select name="availability" value={status} onChange={(e) => setStatus(e.target.value)} id="packageAvail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Please Select</option>
                                <option value="1">Available</option>
                                <option value="0">Not Available</option>
                            </select>
                        </div>

                        <div className='form-group'>
                            <div className='flex'>
                                <button type="button" onClick={HandleSubmit} className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                                <Link className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2" to="/admin/zone-categories">Go Back</Link>
                            </div>
                        </div>


                        <div className='form-group mt-2'>

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Import CSV file</label>
                            <input onChange={ImportCsv} name="file" className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                    </form>
                </div>

                <div className='table-responsive'>
                    <table className='table bg-white border border-slate-300' style={{ "width": "365px" }}>
                        <thead>
                            <tr>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Date</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details && details.map((item, index) => (
                                <tr>
                                    <td className='border border-slate-300 text-center'>{item.date}</td>
                                    <td className='border border-slate-300 text-center'>
                                        <Link onClick={() => HandleDelete(item._id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                            <i className="fas fa-trash"></i>
                                        </Link>
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
            <FooterAdmin />
        </div>
    )
}