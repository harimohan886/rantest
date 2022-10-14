import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Select from 'react-select';


import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';



export default function EditRoom() {

    const params = useParams();

    const [details, setDetails] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [formValues, setFormValues] = useState([{ facility: [] }]);
    const [loading, setLoading] = useState(false);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [formatFacilities, setFormatFacilities] = useState([]);


    const [name, setName] = useState();
    const [hotelId, setHotelId] = useState();
    const [status, setStatus] = useState();
    const [image, setImage] = useState();

    const HandleImage = (e) => {
        setImage(e.target.files[0]);
    }


    function GetDetails() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/hotel-rooms/${params.id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('tokenkey')
            },
        }).then(result => {
            console.log("Room Info", result.data);
            setName(result.data.data.room);
            setHotelId(result.data.data.hotel_id);
            setStatus(result.data.data.status);
            setImage(result.data.data.image);

            const bfFacilities = result.data.data.facilities;
            if (bfFacilities.length) {

                //Formating of facilities data
                const aFFs = bfFacilities.map(item => ({ value: item._id, label: item.facility }));

                setSelectedFacilities(aFFs);
            }
        })
    }

    const getFacilities = async () => {

        setLoading(true);

        try {
            const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/facilities/`);

            setFacilities(result.data.data);
            const allFacilities = result.data.data;

            const fa = await allFacilities.map((item) => {
                return ({ value: item._id, label: item.facility });

            });

            setFormatFacilities(fa);
            setLoading(false);

        } catch (err) {
            swal(err, "error");
            setLoading(false);
        }
    };

    useEffect(() => {

        GetDetails();
        getFacilities();
    }, []);









    const faci = [];

    const HandleSubmit = () => {
        selectedFacilities.map(item => (
            faci.push({ facility: item.label })
        ))


        const formData = {
            hotel_id: hotelId,
            image: image,
            room: name,
            status: status,
            facility: faci,
        }

        console.log("facilil", faci);
        console.log("formData", formData);

        axios.patch(`${process.env.REACT_APP_BASE_URL}/hotel/hotel-rooms/${params.id}`, formData, {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(res => {
            if (res.data.success === true) {
                swal("Data is updated successfully", "success");
                // setTimeout(() => {
                //     window.location = `/admin/hotel-rooms/${params.id}`;
                // }, 1000);

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
    return (
        <div className="relative md:ml-64 bg-default-skin">
            <Sidebar />
            <Navbar />
            <div className="flex flex-wrap min600">
                <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
                    <div className='mt-4'>
                        <h1 className='text-2xl text-black font-bold mb-3'>Edit Room</h1>
                    </div>
                    <form>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Room name</label>
                            <input type="text" id="roomName" value={name} onChange={(e) => setName(e.target.value)} placeholder='Room Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                            <select id="roomAvail" value={status} onChange={(e) => setStatus(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Please Select</option>
                                <option value="1">Available</option>
                                <option value="0">Not available</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Image</label>
                            <input onChange={HandleImage} className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                            {(typeof image === 'string') && image && <img src={(`${image.substring(image.indexOf('/uploads'), image.length)}`)} alt={name} width="300px" />}

                        </div>
                        <div className='mb-3'>
                            <h2 className='text-black text-2xl mb-2 mt-8'>Room facilities</h2>

                            <div className='flex'>
                                <div>
                                    <Select
                                        value={selectedFacilities}
                                        onChange={setSelectedFacilities}
                                        options={formatFacilities}
                                        isMulti
                                        className='setReactSelect'
                                    />
                                </div>
                            </div>
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
