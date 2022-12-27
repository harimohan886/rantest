import React from 'react'
import { Link } from 'react-router-dom'

export default function HotelsIn() {
  return (
    <div className='hotelbgIn' style={{background: "url('../image/haveli.jpeg')"}}>
      <div className='container'>
        <div className='caption'>
          <div className='capTitle'>
            <h4>Special Discount | Luxury Rooms| Lunch & Breakfast</h4>
            <h2>Hotel, Resort and Villa's in Ranthambore</h2>
            <p>Stay in the luxury hotels and experience the wonderful view of the jungle</p>
            <Link to='/hotels' className='btn btn-transparent'>Check Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
