import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
// import MultiImageUpload from '../../../components/Admin/Uploader/MultiImageUpload';
import swal from 'sweetalert';
import axios from 'axios';


export default function AddHotel() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedFilesObj, setSelectedFilesObj] = useState([]);
    const handleImageChange = (e) => {
        if (e.target.files) {
            setSelectedFilesObj(e.target.files);
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img src={photo} alt="" key={photo} />;
        });
    };

    const HandleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const HandlepackageImage = (e) => {
        setPackageImage(e.target.files[0]);
    }

    const [image, setImage] = useState();
    const [package_image, setPackageImage] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [address, setAddress] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState();
    const [meta_title, setMetaTitle] = useState();
    const [meta_description, setMetaDescription] = useState();

    const HandleSaveData = () => {

        const formData = new FormData();
        formData.append("image", image);
        for (const key of Object.keys(selectedFilesObj)) {
            formData.append('images[' + key + ']', selectedFilesObj[key])
        }
        formData.append("package_image", package_image);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("rating", rating);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("address", address);
        formData.append("description", description);
        formData.append("status", status);
        formData.append("meta_title", meta_title);
        formData.append("meta_description", meta_description);



        axios.post(`${process.env.REACT_APP_BASE_URL}/hotel/hotels`, formData).then(res => {
            console.log(res);
            console.log(res.data.status);
            if (res.data.status == 200) {
                swal("Hotel is added successfully", "success");
                setTimeout(() => {
                    window.location = '/admin/hotels';
                }, 1000);

            } else if (res.data.validation_errors) {
                // setTimeError();
                // if (res.data.validation_errors.time)
                //setTimeError(res.data.validation_errors.time[0]);
            } else if (res.data.status == 401) {
                //  setDuplicateDate(true);
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
                        <h1 className='text-2xl text-black font-bold mb-3'>Add Hotel</h1>
                    </div>
                    <form>
                        <div className='grid grid-cols-3 gap-4 mt-2'>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Hotel name</label>
                                <input type="text" id="hotelName" onChange={(e) => setName(e.target.value)} placeholder='Hotel name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Price</label>
                                <input type="text" id="hotelPrice" onChange={(e) => setPrice(e.target.value)} placeholder='₹' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Rating</label>
                                <select id="hotelRating" onChange={(e) => setRating(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Please Select</option>
                                    <option value="3">3 Star</option>
                                    <option value="4">4 Star</option>
                                    <option value="5">5 Star</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Location</label>
                                <input type="text" id="location" onChange={(e) => setCity(e.target.value)} placeholder='Location' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">State</label>
                                <select id="hotelState" onChange={(e) => setState(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Please Select</option>
                                    <option value="UP">UP</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="haryana">Haryana</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                                <select id="hotelAvail" onChange={(e) => setStatus(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Please Select</option>
                                    <option value="1">Available</option>
                                    <option value="0">Not available</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Address</label>
                            <textarea id="address" rows="3" onChange={(e) => setAddress(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">About Hotel</label>
                            <textarea id="aboutHotel" rows="3" onChange={(e) => setDescription(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About Hotel"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Meta title</label>
                            <input type="text" id="hotelMeta" onChange={(e) => setMetaTitle(e.target.value)} placeholder='Meta Title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Meta description</label>
                            <textarea id="hotelMetaDescription" onChange={(e) => setMetaDescription(e.target.value)} rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Meta description"></textarea>
                        </div>
                        {/* <div className='mb-3'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Safari distance</label>
                    <textarea id="safariDistance" rows="2" onChange = {(e) => setName(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Safari distance"></textarea>
                    </div> 
                */}
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Thumbnail</label>
                            <input onChange={HandleImage} className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Cover Image</label>
                            <input onChange={HandlepackageImage} className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                        <div className='mb-3 multiImages'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Hotel Images</label>
                            <input type="file" id="file" multiple onChange={handleImageChange} />
                            <div className="label-holder">
                                <label htmlFor="file" className="label">
                                    <i className="material-icons">Upload Hotel Images</i>
                                </label>
                            </div>
                            <div className="result">{renderPhotos(selectedFiles)}</div>
                        </div>
                        <div className='flex'>
                            <button type="button" onClick={HandleSaveData} className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                            <Link to='/admin/hotels' className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2">Go Back</Link>
                        </div>
                    </form>
                </div>
            </div>
            <FooterAdmin />
        </div>
    )
}
