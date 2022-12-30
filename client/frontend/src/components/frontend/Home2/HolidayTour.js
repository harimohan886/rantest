import React from 'react'
import { Link } from 'react-router-dom'

export default function HolidayTour() {
  return (
    <div className='container'>
        <div className='holidays'>
        <h3 className='common-title'>Book your Holiday Tour Packages</h3>
        <div className='row'>
            <div className='col-sm-3'>
                <div className='paBox'>
                    <Link to='/package-details/the-dwarka-somnath-gir-tour-package'>
                        <img src='../image/package/pa1.jpeg' className='img-fluid' alt='Holiday Package' /> 
                        <h4>The Dwarka Somnath Gir tour package</h4>
                        <p>1 Night / 2 Days, Pickup & Drop, Lunch & Breakfast</p>
                        <h6>₹ 4500</h6>
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
            <div className='col-sm-3'>
                <div className='paBox'>
                    <Link to='/package-details/the-dwarka-somnath-gir-tour-package'>
                        <img src='../image/package/pa2.jpeg' className='img-fluid' alt='Holiday Package' /> 
                        <h4>The Dwarka Somnath Gir tour package</h4>
                        <p>1 Night / 2 Days, Pickup & Drop, Lunch & Breakfast</p>
                        <h6>₹ 4500</h6>
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
            <div className='col-sm-3'>
                <div className='paBox'>
                    <Link to='/package-details/the-dwarka-somnath-gir-tour-package'>
                        <img src='../image/package/pa3.jpeg' className='img-fluid' alt='Holiday Package' /> 
                        <h4>The Dwarka Somnath Gir tour package</h4>
                        <p>1 Night / 2 Days, Pickup & Drop, Lunch & Breakfast</p>
                        <h6>₹ 4500</h6>
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
            <div className='col-sm-3'>
                <div className='paBox'>
                    <Link to='/package-details/the-dwarka-somnath-gir-tour-package'>
                        <img src='../image/package/pa4.jpeg' className='img-fluid' alt='Holiday Package' /> 
                        <h4>The Dwarka Somnath Gir tour package</h4>
                        <p>1 Night / 2 Days, Pickup & Drop, Lunch & Breakfast</p>
                        <h6>₹ 4500</h6>
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
