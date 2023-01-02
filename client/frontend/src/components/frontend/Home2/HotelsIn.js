import React from 'react'
import { Link } from 'react-router-dom'

export default function HotelsIn({ hotels }) {
  return (
    <div className='hotelbgIn'>
      <div className='container'>
        <h3 className='common-title'>Hotels & Resorts in Ranthambore</h3>
        <div className='row'>
          {hotels && hotels.map((hotel, i) => {
            if (i <= 4) {
              console.log(hotel);
              return (<div className='col-sm-3'>
                <div className='hotelBox'>
                  <Link to={ '/hotel-details/'+hotel.slug }>
                    <img src={ `${process.env.REACT_APP_HOTEL_SERVER_URL}/`+hotel.image } className='img-fluid' alt='Hotel' />
                    <h4>{ hotel.name }</h4>
                    <ul className='list-group'>
                      <li>{ hotel.state }, { hotel.city }</li>
                      <li>Starting from <span>₹ { hotel.price }</span></li>
                    </ul>
                    <div className='star-buttons'>
                      <div className='star'>
                        <label>{ hotel.rating }.0 <img src='../image/icons/star2.png' className='img-fluid' alt='Rating' /></label>
                      </div>
                      <div className='bookButton'>
                        <button className='btn btn-transparent'>Book Now</button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>)
            }
          })}
        </div>
      </div>
    </div>
  )
}
