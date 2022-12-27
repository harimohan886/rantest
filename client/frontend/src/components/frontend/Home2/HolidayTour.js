import React from 'react'
import { Link } from 'react-router-dom'

export default function HolidayTour() {
  return (
    <div className='container'>
        <div className='holidays'>
            <div className='row'>
                <div className='col-sm-4'>
                    <img src='../image/hawa.jpeg' className='img-fluid padr-20' alt='Hawa Mahal' />
                </div>
                <div className='col-sm-4'>
                    <div className='hlday'>
                        <h4>See the beauty with your own eyes</h4>
                        <h2>Ranthambore Holiday <span>Tour Packages</span></h2>
                        <p>Book your Ranthambore Holiday Tour Package from our Multiple Packages and explore the Royal Forts, Mueseum. You will experience the Luxury Hotels, Sight Seeing, Rajasthani Heritage and Desert Activities.</p>
                        <Link to='ranthambore-packages' className='btn btn-transparent'>Explore packages</Link>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <img src='../image/girl.jpeg' className='img-fluid padl-20' alt='Holiday Tour' />
                </div>
            </div>
        </div>
    </div>
  )
}
