import React from 'react'

export default function HotelRooms() {
  return (
    <div className="row row-bottom">
      <div className="col-sm-5 col-xs-12 padding-left">
        <div className="room-image img-wrapper">
          <img src="../image/hotel-room.jpeg" alt='Hotel Room' className="img-responsive inner-img"/>
        </div>
      </div>
      <div className="col-sm-7 col-xs-12">
        <div className="room-detail">
          <h4>Deluxe Room</h4>
          <ul className="list-unstyled">
            <li>
              <span className="icon"><i className='fa fa-check'></i></span><span className="text">Discounted Price</span>
            </li>
            <li>
              <span className="icon"><i className='fa fa-check'></i></span><span className="text">24-Hour room service</span>
            </li>
            <li>
              <span className="icon"><i className='fa fa-check'></i></span><span className="text">Free wireless internet access</span>
            </li>
            <li>
              <span className="icon"><i className='fa fa-check'></i></span><span className="text">Laundry service</span>
            </li>
            <li>
              <span className="icon"><i className='fa fa-check'></i></span><span className="text">Room Heater</span>
            </li>
          </ul>
          <div className="findButton">
            <a href="#!" className="btn btn-danger btn-lg">Book Now</a>
        </div>
        </div>
      </div>
    </div>
  )
}
