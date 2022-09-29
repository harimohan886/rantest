import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="container">
        <div className='bodyHeight' style={{paddingTop: "30px"}}>
            <p>
                <h3>Contact Us.</h3>
                <span style={{fontWeight: "400"}}>
                    <br/>
                </span>
                <span style={{fontWeight: "400"}}>
                    <br/>
                </span>
                <span style={{fontWeight: "400"}}>Jungle Safari India</span>
                </p>
                <p>
                <span style={{fontWeight: "400"}}>Sawai Madhopur, Rajasthan 322001</span>
                </p>
                <p>
                <span style={{fontWeight: "400"}}>Contact : +91 7838 4986 45 Or +91 7289 8427 72 Or +91 9718 7171 19</span>
                </p>
                <p>
                <span style={{fontWeight: "400"}}>Email id : </span>
                <a href="mailto:ranthambore360@gmail.com">
                    <span style={{fontWeight: "400"}}>ranthambore360@gmail.com</span>
                    <span style={{fontWeight: "400"}}>
                    <br/>
                    </span>
                </a>
                <span style={{fontWeight: "400"}}>website : ranthamboretigerreserve.in</span>
            </p>
            <div className="text-center">
                <Link className="btn btn-primary" to="/">
                <span className="fa fa-home"></span> Back to Home </Link>
            </div>
        </div>
    </div>
  )
}
