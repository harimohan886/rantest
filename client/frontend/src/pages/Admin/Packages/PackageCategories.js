import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from 'axios';

export default function PackageCategories() {

    const params = useParams();
    const alert = useAlert();

    const [categories, setCategories] = useState([]);
    const [packages, setPackageName] = useState();

    function GetDetails() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/package/package-categories?package_id=${params.id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('tokenkey')
            },
        }).then(result => {
            setCategories(result.data.data);
            setPackageName('Package...');
        })
    }

    useEffect(() => {
        localStorage.removeItem('IndianValues');
        localStorage.removeItem('ForeignerValues');
        GetDetails();
    }, [])

    const HandleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/package/package-categories/${id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('tokenkey')
            },
        }).then(result => {
            alert.success("Deleted");
            setTimeout(() => {
                window.location.href = `/admin/package-categories/${params.id}`;
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
                            <h1 className='text-2xl text-black font-bold mb-3'>Package Categories</h1>
                        </div>
                        <div className='mt-4'>
                            <Link to={`/admin/add-package-category/${params.id}`} type="submit" className="text-white float-right bg-success font-medium rounded px-5 py-2.5 text-center">Add</Link>
                        </div>
                    </div>
                    <h3 className='text-lg bg-danger text-white p-2 mt-2'>{packages}</h3>
                    <table className='table bg-white border border-slate-300 mt-4'>
                        <thead>
                            <tr>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>ID</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Category</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Availability</th>
                                <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map((item, index) => (
                                <tr>
                                    <td className='border border-slate-300 text-center'>{index + 1}</td>
                                    <td className='border border-slate-300 text-center'>{item.category}</td>
                                    <td className='border border-slate-300 text-center'>{item.status == 1 ? 'Available' : 'NA'}</td>
                                    <td className='border border-slate-300 text-center'>
                                        <Link to={`/admin/edit-package-category/${item._id}`} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                            <i className="fas fa-pencil"></i>
                                        </Link>
                                        <Link onClick={() => HandleDelete(item._id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                            <i className="fas fa-trash"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <FooterAdmin />
        </div>
    )
}
