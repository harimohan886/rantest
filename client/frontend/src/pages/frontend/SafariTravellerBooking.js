import React from 'react'

export default function SafariTravellerBooking() {
    
  return (
    <div className='container sectionFrame'>
        <div className='passanger'>
            <form className='form-inline ng-untouched ng-pristine ng-invalid' noValidate="">
                <div className='travellerBook box clearfix'>
                    <h2>Safari booking details</h2>
                    <h3>Booking Person Details</h3>
                    <div className='bookPadding'>
                        <div className='row' style={{marginBottom: "20px"}}>
                            <div className='col-sm-3 col-xs-6'>
                                <p><strong>Booking Date : </strong>2022-09-30</p>
                            </div>
                            <div className='col-sm-3 col-xs-6'>
                                <p><strong>Booking Zone : </strong>Zone 1/2/3/4/5/6/7</p>
                            </div>
                            <div className='col-sm-3 col-xs-6'>
                                <p><strong>Booking Timing : </strong>Morning</p>
                            </div>
                            <div className='col-sm-3 col-xs-6'>
                                <p><strong>Booking Vehicle : </strong>Gypsy</p>
                            </div>  
                        </div>
                        <div className='row'>
                            <div className='col-sm-4'>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <label className='control-label'>Name</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" className='form-control' placeholder='Name' />
                                        </div>
                                    </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <label className='control-label'>Mobile No</label>
                                    </div>
                                    <div className='col-sm-8'>
                                        <input type="text" className='form-control' placeholder='Mobile Number' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <label className='control-label'>Email ID</label>
                                    </div>
                                    <div className='col-sm-8'>
                                        <input type="text" className='form-control' placeholder='Email ID' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4' style={{marginTop: "20px"}}>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <label className='control-label'>State</label>
                                    </div>
                                    <div className='col-sm-8'>
                                        <select className="form-control ng-pristine ng-invalid ng-touched" formcontrolname="state" id="state">
                                            <option disabled="" selected="" value="">Please Select State</option>
                                            <option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Chattisgarh">Chattisgarh</option>
                                            <option value="Dadra &amp; Nagar Haveli">Dadra &amp; Nagar Haveli</option>
                                            <option value="Daman &amp; Diu">Daman &amp; Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Poducherry">Poducherry</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-8' style={{marginTop: "20px"}}>
                                <div className='row'>
                                    <div className='col-sm-2'>
                                        <label className='control-label'>Full address</label>
                                    </div>
                                    <div className='col-sm-10'>
                                        <textarea class="form-control ng-untouched ng-pristine ng-invalid" cols="60" formcontrolname="address" id="address" placeholder="Full Address.."  rows="4" tabindex="4"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fillTraveller'>
                    <h3 className='trvldetails'>Please fill out the Traveller Details</h3>
                    <div className="formsection ng-untouched ng-pristine ng-invalid" formarrayname="booked_persons">
                        <div className="form-group ng-untouched ng-pristine ng-invalid">
                            <span className="serailno">1.</span>
                            <div className="form-group required mob6">
                                <input className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="name" placeholder="Full Name" required="" type="text" value=""/>
                            </div>
                            <div className="form-group required mob6">
                                <select className="form-control biginput ng-untouched ng-pristine ng-invalid" formcontrolname="gender" required="">
                                    <option disabled="" selected="" value="">Please Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group required mob6">
                                <select formcontrolname="nationality" id="nationality" required="" className="form-control ng-untouched ng-pristine ng-invalid">
                                    <option disabled="" selected="" value="">Please Select Nationality</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Foreigner">Foreigner</option>
                                </select>
                            </div>
                            <div className="form-group required mob6">
                                <select className="form-control biginput ng-untouched ng-pristine ng-invalid" formcontrolname="id_proof" required="">
                                    <option disabled="" selected="" value="">Please Select ID Proof</option>
                                    <option value="Aadhar Card">Aadhar Card</option>
                                    <option value="Voter ID">Voter ID</option>
                                    <option value="Driving Licence">Driving Licence</option>
                                    <option value="Passport">Passport</option>
                                </select>
                            </div>
                            <div className="form-group required idarea">
                                <input className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="idnumber" placeholder="ID Number" required="" type="text" value=""/>
                            </div>
                            <div className="form-group mob6">
                                <button className="addperson btn btn-primary" type="button">
                                    <i className="fa fa-plus hidden-xs"></i>
                                </button>
                                <button className="deletePerson btn btn-danger" type="button">
                                    <i className="fa fa-minus hidden-xs"></i>
                                </button>
                            </div>
                            <br className="hidden-xs" />
                            <br className="hidden-xs" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
