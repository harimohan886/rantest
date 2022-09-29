import React from 'react'
import { Link } from 'react-router-dom'

export default function Thankyou() {
  return (
    <div className="container" style={{minHeight: "600px"}}>
        <div className="thankyoupage">
            <h1>Thank you for Booking with us, we will send you booking vouchers at your email id shortly.</h1>
            <h3>For any query please contact + 91 7838 4986 45</h3>
            <div>&nbsp;</div>
            <div className="text-center">
            <Link className="btn btn-primary" to="/">
                <span className="fa fa-home"></span> Back to Home </Link>
            </div>
        </div>
    </div>
  )
}
