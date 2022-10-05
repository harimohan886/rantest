import React from 'react'
import { Link } from 'react-router-dom'

export default function FormSafariBooking() {
  return (
    <section id="select-date" style={{marginTop: "30px"}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <form className="form ng-untouched ng-pristine ng-valid" id="form_date_safari" noValidate="">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <div className="input-group inputdesign">
                                    <span className="input-group-btn">
                                        <img alt="user" src="../image/icons/usericon.png" />
                                    </span>
                                    <input className="form-control" id="name" placeholder="Enter your name" type="name" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="input-group inputdesign">
                                    <span className="input-group-btn">
                                        <img alt="phone" src="../image/icons/phoneicon.png"/>
                                    </span>
                                    <input className="form-control" id="mobile_number" placeholder="Enter your number" type="number"/>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="input-group selectdesign">
                                    <span className="input-group-btn">
                                        <img alt="zone" src="../image/icons/zone.png"/>
                                    </span>
                                    <select className="form-control" id="zone" name="zone" required="">
                                        <option>Select your Zone</option>
                                        <option value="Zone1">Zone 1/2/3/4/5/6/7</option>
                                        <option value="Zone2">Zone 8/9/10</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="input-group selectdesign">
                                    <span className="input-group-btn">
                                        <img alt="zone" src="../image/icons/jeep.png"/>
                                    </span>
                                    <select className="form-control" id="vehicle" name="vehicle" required="">
                                        <option>Select your Vehicle</option>
                                        <option value="Canter">Canter</option>
                                        <option value="Gypsy">Gypsy</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="input-group selectdesign">
                                    <span className="input-group-btn">
                                        <img alt="zone" src="../image/icons/zone2.png"/>
                                    </span>
                                    <select className="form-control" id="timing" name="timing" required="">
                                        <option>Select Timing</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="booknowbtn">
                                    <Link to='/safari-booking-details' className="btn btn-primary btn-block" id="stepTwo">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
