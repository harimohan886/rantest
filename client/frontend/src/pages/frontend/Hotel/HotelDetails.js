import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EnquiryForm from '../../../components/frontend/Common/EnquiryForm'
import AmenitiesHotel from '../../../components/frontend/Hotel/AmenitiesHotel'
import HotelGallery from '../../../components/frontend/Hotel/HotelGallery'
import HotelName from '../../../components/frontend/Hotel/HotelName'
import HotelRooms from '../../../components/frontend/Hotel/HotelRooms'

export default function HotelDetails() {

    const [hotel, setHotel] = useState({});

    const navigate = useNavigate();
    const params = useParams();



    useEffect(() => {
        const getHotel = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/hotels/by-slug/${params.id}`);

            setHotel(res.data.data);

        }

        getHotel();

    }, [params.id]);


    return (
        <div className='hotel-detail-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <HotelGallery hotel={hotel} />
                        <HotelName hotel={hotel} />
                        <AmenitiesHotel amenities={hotel} />
                    </div>
                    <div className='col-sm-4'>
                        <EnquiryForm />
                    </div>
                </div>
                <div className='hotel-rooms'>
                    <h3>Hotel Rooms</h3>
                    <HotelRooms rooms={hotel} />
                </div>
            </div>
        </div>
    )
}
