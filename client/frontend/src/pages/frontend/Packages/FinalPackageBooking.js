import React from 'react'

export default function FinalPackageBooking() {
  return (
    <div className="package-booking-details">
        <div className="packagebannersection" style={{backgroundImage: "url(../image/hero-packages.jpeg)"}}>
            <div className="container sectionFrame">
                <div className="banner-packageinfo">
                    <h1>Package Booking Online</h1>
                </div>
            </div>
        </div>
        <div className="booking-detail-online">
            <div className="container">
                <div className="row">
                <div className="col-sm-5">
                    <div className="traveler-D">
                    <h2>Traveller Details</h2>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td><strong>Travel Date :</strong></td>
                            <td><input type="date" className="input-travel-date travel-date form-control" name="travel_date" min="2022-10-12"/>
                                <div className="text-danger travel-date-error" style={{display: "none"}}>Booking not Available.Please Select another Date.</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Name :</td>
                            <td>Developer</td>
                        </tr>
                        <tr>
                            <td>Mobile :</td>
                            <td>000000000000</td>
                        </tr>
                        <tr>
                            <td>Email ID :</td>
                            <td>test123@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Packages :</td>
                            <td>Corbett Fun Tour With 1 Jeep Safari</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="package-D">
                    <h2>Package Details</h2>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>Package :</td>
                            <td className="text-right">Standard</td>
                        </tr>
                        <tr>
                            <td>Adults :</td>
                            <td className="text-right">2 </td>
                        </tr>
                        <tr>
                            <td>No of Rooms :</td>
                            <td className="text-right">1 Rooms </td>
                        </tr>
                        <tr>
                            <td>Price (RS) :</td>
                            <td className="text-right" id="package-price">9850</td>
                        </tr>
                        <tr>
                            <td>Kids :</td>
                            <td className="text-right">2</td>
                        </tr>
                        <tr>
                            <td>Total Child Cost :</td>
                            <td className="text-right" id="total-kid-price">1800</td>
                        </tr>
                        <tr>
                            <td>GST :</td>
                            <td className="text-right">500</td>
                        </tr>
                        <tr>
                            <td className="payable text-left">Payable Amount:</td>
                            <td className="payable text-right" id="total-payable-amount">12150</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <div className="paynowoption">
                            <p className="text-center" id="show-message" style={{display: "none", fontWeight: "bold"}}>Prices are high due to festival/Long weekend</p>
                            <ul className="list-inline usertype">
                                <li className='list-inline-item'>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" value="6075" className="nationality-type" name="payment" data-payment="partially-paid"/>
                                        <span className="forcustom half-payable-amount">Pay 50% ( INR <span>6075</span>)</span>
                                        </label>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className="radio">
                                        <label>
                                        <input type="radio" value="12150" className="nationality-type" name="payment" checked data-payment="paid"/>
                                        <span className="forcustom total-payable-amount">Pay full (INR <span>12150 </span>)</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="findButton text-center">
                            <a href='#!' className="btn btn-warning btn-lg" id="razorpay">Pay Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
