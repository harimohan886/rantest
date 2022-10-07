import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CurrentBooking from '../Home/CurrentBooking'

export default function Header() {

    const location = useLocation();
    const isAdminurl = location.pathname.split("/")[1];

    if(isAdminurl === 'admin') {
        return null;
    }
    



  return (
    <>
    <header className="d-none d-sm-block">
        <div className="container">
            <div className="row">
            <div className="col-sm-5">
                <div className="menuleft">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link className="active" to="/online-ranthambore-safari-booking">Online Safari booking</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/online-Chambal-moter-boat-safari-booking">Chambal Safari booking
                         <span><img alt="gif" src="../image/icons/new-blinking.gif" /></span>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <a data-target="#myModal" data-toggle="modal" href="#!">Current Booking</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-sm-2 logo-padding">
                <div className="logo">
                <Link to="/">
                    <img alt="Ranthambore Safari" className="img-responsive" src="../image/logo.png" />
                </Link>
                </div>
            </div>
            <div className="col-sm-5">
                <div className="menuright">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/hotels">Ranthambore Hotels</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/ranthambore-packages">Ranthambore Packages</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </header>

    {/* Mobile Header */}

    <div className="mobileheader d-sm-none d-md-none d-lg-none d-xl-none">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/">
                <img alt="Ranthambore Safari" className="img-responsive" src="../image/logo.png" />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div className="navbar-header">
                <button aria-expanded="false" className="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                
            </div> */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav navbar-nav">
                    <li className='nav-item nav-link'>
                        <Link className="active" to="/online-ranthambore-safari-booking">Online Safari booking</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link to="/online-Chambal-moter-boat-safari-booking">Chambal Safari booking</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link data-target="#myModal" data-toggle="modal" href="#!">Current Booking</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link to="/about-us">About Ranthambore</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link to="https://dailytourandtravel.com/hotel" target="_blank">Ranthambore Hotels</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link href="https://blog.ranthamboretigerreserve.in/" target="_blank">Blog</Link>
                    </li>
                    <li className='nav-item nav-link'>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <CurrentBooking/>
    </>
  )
}
