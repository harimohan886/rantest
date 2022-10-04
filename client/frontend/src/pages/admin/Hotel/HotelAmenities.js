import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import AmenityStatus from '../../../components/Admin/Hotel/AmenityStatus';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import ReactPaginate from "react-paginate";



export default function HotelAmenities() {
    const [amenities, setAmenities] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    let limit = 2;
    //const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);



    const getAmenities = async () => {

        setLoading(true);

        try {
            const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/amenities/?page=1&size=${limit}`);


            setAmenities(result.data.data);
            setpageCount(Math.ceil(result.data.total / result.data.perPage));
            //setPage(result.data.page);
            setLoading(false);



        } catch (err) {

            setLoading(false);
        }

    }


    useEffect(() => {
        getAmenities();

    }, []);


    const handlePageClick = async (data) => {
        setLoading(true);

        try {


            let currentPage = data.selected + 1;
            const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/amenities/?page=${currentPage}`);
            setAmenities(result.data.data);

            setpageCount(Math.ceil(result.data.total / result.data.perPage));
            // setPage(result.data.page);
            setLoading(false);

        } catch (err) {

            setLoading(false);

        }
    };

    const handleDelete = (amenity_id) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/hotel/amenities/${amenity_id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('tokenkey')
            },
        }).then(result => {
            alert.success("Amenity is deleted");
            setTimeout(() => {
                window.location = '/admin/amenities';
            }, 1000);
        })
    }


    return (
        <div className="relative md:ml-64 bg-default-skin">
            <Sidebar />
            <Navbar />
            <div className="flex flex-wrap min600">
                <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
                    <div className="grid grid-cols-2 gap-4">
                        <div className='mt-4'>
                            <h1 className='text-2xl text-black font-bold mb-3'>Hotel Amenities </h1>
                        </div>
                        <div className='mt-4'>
                            <Link to='/admin/add-hotel-amenity' type="submit" className="text-white float-right bg-success font-medium rounded px-5 py-2.5 text-center">Add Amenity</Link>
                        </div>
                    </div>
                    <AmenityStatus />
                    <table className='table bg-white border border-slate-300 mt-4'>
                        <thead>
                            <tr>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Amenity</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Logo</th>
                                <th className='border border-slate-300 text-left bg-hotel-maroon text-white'>Availability</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>{amenities?.map((item) => (

                            <tr key={item._id}>
                                <td className='border border-slate-300 text-center'>{item._id}</td>
                                <td className='border border-slate-300 text-center'>{item.amenity}</td>
                                <td className='border border-slate-300 text-center'>
                                    <img style={{ margin: "0 auto" }} src={`../image/icons/${item.image}`} alt='swimming pool' />
                                </td>
                                <td className='border border-slate-300 text-center'>
                                    <label htmlFor="default-toggle-1" className="inline-flex relative w-full cursor-pointer">
                                        <input type="checkbox" value="" id="default-toggle-1" className="sr-only peer" />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available</span>
                                    </label>
                                </td>
                                <td className='border border-slate-300 text-center'>
                                    <Link to={`/admin/edit-hotel-amenity/${item._id}`} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <i className="fas fa-pencil"></i>
                                    </Link>
                                    <Link className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" to="#!" onClick={() => handleDelete(item.id)}>
                                        <i className="fas fa-trash"></i>
                                    </Link>
                                </td>
                            </tr>

                        ))}
                            {loading &&
                                <tr>
                                    <td className='border border-slate-300 text-center' col-span="5">loading..</td>
                                </tr>
                            }



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
