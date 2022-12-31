import React from 'react'
import { Link } from 'react-router-dom'

export default function HolidayTour({ packages }) {

    return (
        <div className='container'>
            <div className='holidays'>
                <h3 className='common-title'>Book your Holiday Tour Packages</h3>
                <div className='row'>
                    {packages && packages.map((item, i) => {
                        if (i <= 4) {
                            return (<div className='col-sm-3'>
                                <div className='paBox'>
                                    <Link to={`/package-details/${item.slug}`}>
                                        <img src={`${process.env.REACT_APP_PACKAGE_SERVER_URL}/` + item.image} className='img-fluid' alt='Holiday Package' />
                                        <h4>{item.name}</h4>
                                        <p>
                                            {item.inclusions && item.inclusions.map((inc, i) => {
                                                return inc + ',';
                                            })}
                                        </p>
                                        <h6>₹ {item.price}</h6>
                                        <div className='star-buttons'>
                                            <div className='star'>
                                                <label>{item.rating}.0 <img src='../image/icons/star2.png' className='img-fluid' alt='Rating' /></label>
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
