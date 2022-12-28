import React from 'react'
import { Link } from 'react-router-dom'

export default function HotelsIn() {
  return (
    <div className='hotelbgIn'>
      <div className='container'>
        <h3 className='common-title'>Hotels & Resorts in Ranthambore</h3>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='hotelBox'>
              <Link to='/hotel-details/ranthambore-mahal'>
                <img src='../image/hotels/ho1.jpeg' className='img-fluid' alt='Hotel' />
                <h4>Tiger Den Resort</h4>
                <ul className='list-group'>
                  <li>Khilchipur, Ranthambore</li>
                  <li>Starting from <span>₹ 3400</span></li>
                </ul>
                <div className='star-buttons'>
                  <div className='star'>
                    <label>3.0 <img src='../image/icons/star2.png' className='img-fluid' alt='Rating' /></label>
                  </div>
                  <div className='bookButton'>
                    <button className='btn btn-transparent'>Book Now</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='hotelBox'>
              <Link to='/hotel-details/ranthambore-mahal'>
                <img src='../image/hotels/ho2.jpeg' className='img-fluid' alt='Hotel' />
                <h4>The Ranthambore Heritage</h4>
                <ul className='list-group'>
                  <li>Sawai, Madhopur</li>
                  <li>Starting from <span>₹ 4500</span></li>
                </ul>
                <div className='star-buttons'>
                  <div className='star'>
                    <label>3.0 <img src='../image/icons/star2.png' className='img-fluid' alt='Rating' /></label>
                  </div>
                  <div className='bookButton'>
                    <button className='btn btn-transparent'>Book Now</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='hotelBox'>
              <Link to='/hotel-details/ranthambore-mahal'>
                <img src='../image/hotels/ho3.jpeg' className='img-fluid' alt='Hotel' />
                <h4>The Fern Ranthambore Forest Resort</h4>
                <ul className='list-group'>
                  <li>Sawai, Madhopur</li>
                  <li>Starting from <span>₹ 4999</span></li>
                </ul>
                <div className='star-buttons'>
                  <div className='star'>
                    <label>4.0 <img src='../image/icons/star2.png' className='img-fluid' alt='Rating' /></label>
                  </div>
                  <div className='bookButton'>
                    <button className='btn btn-transparent'>Book Now</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='hotelBox'>
              <Link to='/hotel-details/ranthambore-mahal'>
                <img src='../image/hotels/ho4.jpeg' className='img-fluid' alt='Hotel' />
                <h4>Jungle Vilas Ranthambore</h4>
                <ul className='list-group'>
                  <li>Khilchipur, Ranthambore</li>
                  <li>Starting from <span>₹ 6999</span></li>
                </ul>
                <div className='star-buttons'>
                  <div className='star'>
                    <label>5.0 <img src='../image/icons/star2.png' className='img-fluid' alt='Rating' /></label>
                  </div>
                  <div className='bookButton'>
                    <button className='btn btn-transparent'>Book Now</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
