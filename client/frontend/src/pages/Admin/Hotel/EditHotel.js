import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import MultiImageUpload from '../../../components/Admin/Uploader/MultiImageUpload';



export default function EditHotel() {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedFilesObj, setSelectedFilesObj] = useState([]);
    const navigate = useNavigate();
    const params = useParams();


    const [hotels, setHotels] = useState({
        name: '',
        price: '',
        rating: '',
        city: '',
        state: '',
        address: '',
        safari_distance: '',
        description: '',
        meta_title: '',
        meta_description: '',
        status: '',
        package_image: '',
        image: '',
        images: [],

    });

    useEffect(() => {

        const getHotels = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/hotels/${params.id}`);
            const result = res.data.data;

            setHotels({
                name: result.name,
                price: result.price,
                rating: result.rating,
                city: result.city,
                state: result.state,
                safari_distance: result.safari_distance,
                address: result.address,
                description: result.description,
                meta_title: result.meta_title,
                meta_description: result.meta_description,
                status: result.status,
                image: result.image,
                package_image: result.package_image,
                images: result.images,

            });


        }


        getHotels();

    }, [params.id]);


    const handleImageChange = (e) => {
        if (e.target.files) {
            setSelectedFilesObj(e.target.files);
            // setHotels(currentHotel => ({ ...currentHotel, images: hotels.images.concat(e.target.files) }))


            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            // setHotels(currentHotel => ({ ...currentHotel, images: images.concat(filesArray) }))

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

    const handleChange = (e) => {
        console.log("e name", e.target.name)
        //setImage(e.target.files[0]);
        setHotels(hotels => ({ ...hotels, [e.target.name]: e.target.value }));
    }

    const handleImage = (e) => {
        setHotels(hotels => ({ ...hotels, image: e.target.files[0] }));

    }

    const handlePackageImage = (e) => {
        setHotels(hotels => ({ ...hotels, package_image: e.target.files[0] }));

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const extra_images = [];
        for (const key of Object.keys(selectedFilesObj)) {
            extra_images.push('images[' + key + ']', selectedFilesObj[key]);
        }

        setHotels(hotels => ({ ...hotels, images: [] }));

        try {

            const res = await axios.patch(`${process.env.REACT_APP_BASE_URL}/hotel/hotels/${params.id}`, hotels, {
                headers: {
                    'Authorization': `Bearer ` + localStorage.getItem('user')
                },
            });

            if (res.data.success == true) {
                swal("Data is created successfully", "success");
                navigate('/admin/hotels');


            } else if (res.data.validation_errors) {
                swal(res.data.validation_errors);
                //   setTimeError();
                // if(res.data.validation_errors.time)
                //   setTimeError(res.data.validation_errors.time[0]);
            } else if (res.data.status == 401) {
                //  setDuplicateDate(true);
            }


        } catch (err) {

            swal(err);


        }
    }




    return (

        <div className="relative md:ml-64 bg-default-skin">
            <Sidebar />
            <Navbar />
            <div className="flex flex-wrap min600">
                <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
                    <div className='mt-4'>
                        <h1 className='text-2xl text-black font-bold mb-3'>Edit Hotel</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-3 gap-4 mt-2'>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Hotel name</label>
                                <input type="text" id="hotelName" name="name" onChange={handleChange} placeholder='Hotel name' defaultValue={hotels.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Price</label>
                                <input type="text" id="hotelPrice" onChange={handleChange} name="price" placeholder='₹' defaultValue={hotels.price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Rating</label>
                                <select id="hotelRating" name="rating" onChange={handleChange} value={hotels.rating} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Please Select</option>
                                    <option value="3">3 star</option>
                                    <option value="4">4 star</option>
                                    <option value="5">5 star</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Location</label>
                                <input type="text" id="location" name="city" onChange={handleChange} defaultValue={hotels.city} placeholder='Location' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">State</label>
                                <select id="hotelState" name="state" onChange={handleChange} value={hotels.state} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Please Select</option>
                                    <option value="UP">UP</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Haryana">Haryana</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Availability</label>
                                <select id="hotelAvail" name="status" onChange={handleChange} value={hotels.status} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Please Select</option>
                                    <option value="1">Available</option>
                                    <option value="0">Not available</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Address</label>
                            <textarea id="address" name="address" rows="3" onChange={handleChange} defaultValue={hotels.address} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">About Hotel</label>
                            <textarea id="aboutHotel" name="description" rows="3" onChange={handleChange} defaultValue={hotels.description} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About Hotel"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Meta title</label>
                            <input type="text" id="hotelMeta" name="meta_title" onChange={handleChange} placeholder='Meta Title' defaultValue={hotels.meta_title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Meta description</label>
                            <textarea id="hotelMetaDescription" onChange={handleChange} name="meta_description" rows="2" defaultValue={hotels.meta_description} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Meta description"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Safari distance</label>
                            <textarea id="safariDistance" name="safari_distance" defaultValue={hotels.safari_distance && hotels.safari_distance} onChange={handleChange} rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Safari distance"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Thumbnail</label>
                            <input onChange={handleImage} className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                            {hotels.image && <img src={(`${hotels.image.substring(hotels.image.indexOf('/uploads'), hotels.image.length)}`)} alte="" width="300px" />}

                        </div>

                        <div className='mb-3'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Cover Image</label>
                            <input onChange={handlePackageImage} className="block text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                            {(typeof hotels.package_image === 'string') && hotels.package_image && <img src={(`${hotels.image.substring(hotels.package_image.indexOf('/uploads'), hotels.package_image.length)}`)} alt="" width="300px" />}

                        </div>
                        <div className='mb-3 multiImages'>
                            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Hotel Images</label>
                            {hotels.images &&
                                hotels.images?.map((im, i) => (
                                    <img key={i} src={(`${im.image?.substring(im.image?.indexOf('/uploads'), im.image.length)}`)} alte="" width="300px" />
                                ))
                            }

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


                        </div>
                        <div className='flex'>
                            <button type="submit" className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                            <Link to='/admin/hotels' className="text-white bg-dark font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center ml-2">Go Back</Link>
                        </div>
                    </form>
                </div >
            </div >
            <FooterAdmin />
        </div >
    )
}
