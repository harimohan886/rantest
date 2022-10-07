import React from 'react'
import { Link } from 'react-router-dom'

export default function HotelList() {
  return (
    <div className="row H-listrow">
        <div className="col-sm-5 col-xs-12 padding-left">
            <div className="image img-wrapper">
            <Link to="/hotel-details">
                <img src="../image/maya.jpg" className="img-responsive inner-img" alt='Ranthambore hotels' />
            </Link>
            </div>
        </div>
        <div className="col-sm-7 col-xs-12 padding-left">
            <div className="corbett-hotels-list">
                <div className="hotel-content">
                    <Link to="/hotel-details">
                    <h3>Maya The Forest Resort &amp; Spa</h3>
                    <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <p>Corbett Maya Resort is spread over an area of 3 acres. It is situated in Swaldeh village of Ramnagar near...</p>
                    <div className="Resort">
                        <ul className="list-inline">
                        <li className='list-inline-item'>
                            <span> Wi-Fi</span>
                        </li>
                        <li className='list-inline-item'>
                            <span> Swimming Pool</span>
                        </li>
                        <li className='list-inline-item'>
                            <span> In-House Restaurant</span>
                        </li>
                        </ul>
                    </div>
                    <div className="Hotel-location">
                        <span>
                        <i className="fa fa-map-marker"></i> Hotel Location </span>
                    </div>
                    <div className="Resort-location">
                        <ul className="list-unstyled">
                        <li>
                            <span>
                            <i className="fa fa-compass"></i> Corbett National Park </span>
                        </li>
                        <li>
                            <span>
                            <i className="fa fa-compass"></i> Village Semal Khalia, Dhela Rd, Ramnagar, Uttarakhand </span>
                        </li>
                        </ul>
                    </div>
                    <div className="Resort-price">
                        <strong>Price:</strong>
                        <b>INR 3500</b>
                    </div>
                    </Link>
                    <div className="findButton">
                        <Link to="/hotel-details" className="btn btn-danger">View Hotel</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
