import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';



export default function AddRoom() {

    const params = useParams();
    const HandleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const [details, setFacilities] = useState([]);

    var faci = [];

    const HandleSubmit = () => {
        formValues.map(item => (
            faci.push({ facility: item.facility })
        ))


        const formData = {
            hotel_id: params.id,
            image: image,
            room: name,
            status: status,
            facility: faci,
        }



        axios.post(`${process.env.REACT_APP_BASE_URL}/hotel/hotel-rooms/`, formData, {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('user')
            },
        }).then(res => {
            if (res.data.success === true) {
                swal("Data is updated successfully");
                setTimeout(() => {
                    window.location = `/admin/hotel-rooms/${params.id}`;
                }, 1000);

            } else if (res.data.validation_errors) {
                if (res.data.validation_erros.name) {
                    swal(res.data.validation_errors.name[0], "error");
                }
                if (res.data.validation_erros.email) {
                    swal(res.data.validation_errors.email[0], "error");
                }
            }
        });

    }

    function getDetails() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/facilities/`, {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('user')
            },
        }).then(res => {
            setFacilities(res.data.data);
        });
    }

    useEffect(() => {
        getDetails();
    }, [])

    const [formValues, setFormValues] = useState([{ facility: [] }]);
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i]['facility'] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { facility: [] }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        swal(JSON.stringify(formValues));
    }

    return (
        <div className="relative md:ml-64 bg-default-skin">
            <Sidebar />
            <Navbar />
            <div className="flex flex-wrap min600">
                <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
                    <div className='mt-4'>
                        <h1 className='text-2xl text-black font-bold mb-3'>Add Room</h1>
                    </div>
                    <form>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Room name</label>
                            <input type="text" id="roomName" onChange={(e) => setName(e.target.value)} placeholder='Room Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                            <select id="roomAvail" onChange={(e) => setStatus(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Please Select</option>
                                <option value="1">Available</option>
                                <option value="0">Not available</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Image</label>
                            <input onChange={HandleImage} className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                        <div className='mb-3'>
                            <h2 className='text-black text-2xl mb-2 mt-8'>Room facilities</h2>
                            <form onSubmit={handleSubmit}>
                                {formValues.map((element, index) => (
                                    <div className="flex mb-3" key={index}>
                                        <input type="text" name="facility" placeholder='Room Facility' value={element.facility || ""} onChange={e => handleChange(index, e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {
                                            index ?
                                                <button type="button" className="ml-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 remove" onClick={() => removeFormFields(index)}>Remove</button>
                                                : null
                                        }
                                    </div>
                                ))}
                                <div className="button-section">
                                    <button className="text-white bg-success font-medium rounded px-5 py-2.5 text-center add" type="button" onClick={() => addFormFields()}>Add</button>
                                </div>
                            </form>
                        </div>
                        <div className="button-section">
                            <button className="text-white bg-success font-medium rounded px-5 py-2.5 text-center add" type="button" onClick={HandleSubmit}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterAdmin />
        </div>
    )
}
