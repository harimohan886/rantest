import React from 'react'
import EnquiryForm from '../../../components/frontend/Common/EnquiryForm'
import AmenitiesHotel from '../../../components/frontend/Hotel/AmenitiesHotel'
import HotelGallery from '../../../components/frontend/Hotel/HotelGallery'
import HotelName from '../../../components/frontend/Hotel/HotelName'
import HotelRooms from '../../../components/frontend/Hotel/HotelRooms'

export default function HotelDetails() {
  return (
    <div className='hotel-detail-page'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <HotelGallery/>
                    <HotelName/>
                    <AmenitiesHotel/>
                </div>
                <div className='col-sm-4'>
                    <EnquiryForm/>
                </div>
            </div>
            <div className='hotel-rooms'>
                <h3>Hotel Rooms</h3>
                <HotelRooms/>
            </div>
        </div>
    </div>
  )
}
