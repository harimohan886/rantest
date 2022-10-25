import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin'
import Navbar from '../../../components/Admin/Navbar/AdminNavbar'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import axios from "axios";
import swal from 'sweetalert';

export default function CreatePackageItinerary() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        const data = {
            "title": title,
            "description": description,
            "status": status,
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/package/iternaries/`, data);
            navigate('/admin/package-itineraries');
            swal(res.data.message, "success");

        } catch (err) {
            swal(err.response.data.error.message, "error");
        }
    }


    return (
        <div className="relative md:ml-64 bg-default-skin">
            <Sidebar />
            <Navbar />
            <div className="flex flex-wrap min600">
                <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
                    <div className='mt-4'>
                        <h1 className='text-2xl text-black font-bold mb-3'>Add Tour Itinerary</h1>
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} id="packageName" placeholder='Title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Descrption</label>
                        <textarea rows="3" onChange={(e) => setDescription(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                        <select onChange={(e) => setStatus(e.target.value)} id="packageAvail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Please Select</option>
                            <option value="1">Available</option>
                            <option value="0">Not available</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <button type="button" onClick={handleSubmit} className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                        <Link to='/admin/package-exclusion' className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2">Go Back</Link>
                    </div>
                </div>
            </div>
            <FooterAdmin />
        </div>
    )
}
