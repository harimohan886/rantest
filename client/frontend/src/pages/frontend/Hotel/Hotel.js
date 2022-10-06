import React from 'react'
import HotelBanner from '../../../components/frontend/Hotel/HotelBanner'
import HotelList from '../../../components/frontend/Hotel/HotelList'
import Pagination from '../../../components/frontend/Common/Pagination'
import EnquiryForm from '../../../components/frontend/Common/EnquiryForm'

export default function Hotel() {
  return (
    <div className='hotel-listing-page'>
        <HotelBanner/>
        <div className='container sectionFrame'>
            <h2>Hotels Available</h2>
            <p className='book-special'>Book your hotel &amp; enjoy your holidays with distinctive experience</p>
            <div className='row'>
                <div className='col-sm-9 width70'>
                    <HotelList/>
                </div>
                <div className='col-sm-3 width30'>
                  <EnquiryForm/>
                </div>
            </div>
            <Pagination/>
        </div>
    </div>
  )
}
