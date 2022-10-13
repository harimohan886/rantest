import React from 'react'

export default function AmenitiesHotel({ amenities }) {
    const detail = amenities.hotel_amenities;
    return (
        <div className="Hotel-Amenities">
            <h2>Hotel Amenities</h2>
            <ul className="list-inline">

                {detail && detail?.map((item) => (
                    <li className='list-inline-item'>
                        <div className="amenities">
                            <img src={(`${item.amenity.image.substring(item.amenity.image.indexOf('/uploads'), item.amenity.image.length)}`)} alt={item.amenity.amenity} />
                            <span>{item.amenity.amenity}</span>
                        </div>
                    </li>
                ))}


            </ul>
        </div>
    )
}
