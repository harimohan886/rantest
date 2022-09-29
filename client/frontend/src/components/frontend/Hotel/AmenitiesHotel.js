import React from 'react'

export default function AmenitiesHotel() {
  return (
    <div className="Hotel-Amenities">
        <h2>Hotel Amenities</h2>
        <ul className="list-inline">
            <li>
                <div className="amenities">
                    <img src="../image/icons/wifi-router.png" alt='Wi-Fi' />
                    <span>Wi-Fi</span>
                </div>
            </li>
            <li>
                <div className="amenities">
                    <img src="../image/icons/swimming-pool.png" alt='Swimming Pool' />
                    <span>Swimming Pool</span>
                </div>
            </li>
            <li>
                <div className="amenities">
                    <img src="../image/icons/in-house-restaurant.png" alt='In-House Restaurant' />
                    <span>In-House Restaurant</span>
                </div>
            </li>
            <li>
                <div className="amenities">
                    <img src="../image/icons/hair-dryer.png" alt='Hair Dryer' />
                    <span>Hair Dryer</span>
                </div>
            </li>
            <li>
                <div className="amenities">
                    <img src="../image/icons/air-conditioner.png" alt='Air Conditioner' />
                    <span>Air Conditioner</span>
                </div>
            </li>
            <li>
                <div className="amenities">
                    <img src="../image/icons/parking.png" alt='Parking'/>
                    <span>Parking</span>
                </div>
            </li>
        </ul>
    </div>
  )
}
