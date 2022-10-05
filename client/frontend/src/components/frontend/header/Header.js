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
    <header className="hidden-xs">
        <div className="container">
            <div className="row">
            <div className="col-sm-5">
                <div className="menuleft">
                <ul className="list-inline">
                    <li>
                        <Link className="active" to="/online-ranthambore-safari-booking">Online Safari booking</Link>
                    </li>
                    <li>
                        <Link to="/online-Chambal-moter-boat-safari-booking">Chambal Safari booking
                         <span><img alt="gif" src="../image/icons/new-blinking.gif" /></span>
                        </Link>
                    </li>
                    <li>
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
                    <li>
                        <Link to="/hotels">Ranthambore Hotels</Link>
                    </li>
                    <li>
                        <Link to="/about-us">Ranthambore Packages</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </header>

    {/* Mobile Header */}

    <div className="mobileheader hidden-sm hidden-md hidden-lg hidden-xl">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button aria-expanded="false" className="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" href="/">
                    <img alt="Ranthambore Safari" className="img-responsive" src="../image/logo.png" />
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link className="active" to="/online-ranthambore-safari-booking">Online Safari booking</Link>
                        </li>
                        <li>
                            <Link to="/online-Chambal-moter-boat-safari-booking">Chambal Safari booking</Link>
                        </li>
                        <li>
                            <Link data-target="#myModal" data-toggle="modal" href="#!">Current Booking</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Ranthambore</Link>
                        </li>
                        <li>
                            <Link to="https://dailytourandtravel.com/hotel" target="_blank">Ranthambore Hotels</Link>
                        </li>
                        <li>
                            <Link href="https://blog.ranthamboretigerreserve.in/" target="_blank">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <CurrentBooking/>
    </>
  )
}
