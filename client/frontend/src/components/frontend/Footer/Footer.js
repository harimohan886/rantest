import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
            <div className="col-sm-3 col-xs-12">
                <div className="socialmedia">
                <ul className="social-circle list-inline">
                    <li>
                    <a className="icoFacebook" href="#!" title="Facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                    </li>
                    <li>
                    <a className="icoYoutube" href="#!" title="Twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                    </li>
                    <li>
                    <a className="icoInstagram" href="#!" title="Email">
                        <i className="fa fa-envelope"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <div className="footerinfo">
                <div className="footerlogo">
                    <Link to="/">
                    <img alt="Ranthambore Safari" className="img-responsive" src="../image/logo-white.png" />
                    </Link>
                </div>
                <ul className="list-inline">
                    <li style={{listStyle: "disc"}}>
                        <Link to="/about-us">About Us</Link>|
                    </li>
                    <li style={{listStyle: "disc"}}>
                        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>|
                    </li>
                    <li style={{listStyle: "disc"}}>
                        <Link to="/privacy-policy">Privacy Policy</Link>|
                    </li>
                    <li style={{listStyle: "disc"}}>
                        <Link to="/cancellation-policy">Cancellation Policy</Link>|
                    </li>
                    <li style={{listStyle: "disc"}}>
                        <Link to="/blog">Blog</Link>|
                    </li>
                    <li style={{listStyle: "disc"}}>
                    <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-sm-3 col-xs-12">
                <div className="enquiry">
                <div className="footeremail">
                    <div className="emailicon">
                        <img alt="Email" src="../image/icons/mailicon.png" />
                    </div>
                    <a href="mailto:ranthambore360@gmail.com">ranthambore360@gmail.com</a>
                </div>
                <div className="footercontact">
                    <div className="callicon">
                        <img alt="Call" src="../image/icons/callicon.png" />
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a href="tel:7838498645">+91 7838 4986 45</a>
                        </li>
                        <li>
                            <a href="tel:7289842772">+91 7289 8427 72</a>
                        </li>
                        <li>
                            <a href="tel:9718717119">+91 9718 7171 19</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}
