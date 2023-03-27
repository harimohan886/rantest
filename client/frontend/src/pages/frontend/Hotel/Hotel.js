import React from 'react'
import HotelBanner from '../../../components/frontend/Hotel/HotelBanner'
import HotelList from '../../../components/frontend/Hotel/HotelList'
import EnquiryForm from '../../../components/frontend/Common/EnquiryForm'
import { Link } from 'react-router-dom'

export default function Hotel() {
  return (
    <div className='hotel-listing-page'>
      <HotelBanner />
      <div className='container sectionFrame'>
        <h2>Hotels Available</h2>
        <p className='book-special'>Book your hotel &amp; enjoy your holidays with distinctive experience</p>
        <div className='row'>
          <div className='col-sm-9 width70'>
            <p>If you are planning a visit to the Ranthambore National Park in India, then the website <Link to="http://www.ranthamboretigerreserve.in" target="_blank">http://www.ranthamboretigerreserve.in</Link> can be very beneficial for you. This website provides a hassle-free way to book your stay in the luxurious Ranthambore Hotels located near the park. With just a few clicks, you can easily find and book the hotel that suits your preferences and budget. Simply use the keywords Ranthambore Hotels and Ranthambore National Park to search and explore the various options available on the website.</p>
            <HotelList />
          </div>
          <div className='col-sm-3 width30'>
            <EnquiryForm hotel_id='' type="hotel" />
          </div>
        </div>

      </div>
    </div>
  )
}
