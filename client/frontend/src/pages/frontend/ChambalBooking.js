import React from 'react'
import { Link } from 'react-router-dom'

export default function ChambalBooking() {
  return (
    <div className='container sectionFrame'>
        <div className="passanger">
            <form className="form-inline ng-untouched ng-pristine ng-invalid" novalidate="">
                <div className="box clearfix">
                    <input name="booking_type" type="hidden" value="" />
                    <div className="booking_dbar" id="divRightPanel">
                        <div className="title-header roboto_condensedregular">
                        <h2> Booking Details <span className="tab_field" id="lblLocation"></span>
                        </h2>
                        </div>
                    </div>
                    <div className="Booking-Person-Details title-header roboto_condensedregular"></div>
                    <div className="row" style={{margin: "5px 0px 5px 1px"}}>
                        <div className="col-sm-6">
                        <label>Booking Name : </label>
                        <span style={{marginLeft: "3px"}}>Chambal safari booking </span>
                        </div>
                        <div className="col-sm-6">
                        <label>Booking Option : </label>
                        <span style={{marginLeft: "3px"}}> Chambal Safari Option 1 </span>
                        </div>
                    </div>
                    <span id="lblErrorMessage" style={{color: "red", fontWeight: "bold"}}></span>
                    <div className="topform">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Name: <br/>
                                    </label>
                                </div>
                                <div className="col-sm-8">
                                    <input className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="name" placeholder="Name.." required="" tabindex="1" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Mobile No.: <br/>
                                        <br/>
                                    </label>
                                </div>
                                <div className="col-sm-8">
                                    <input className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="mobile" id="mobile" ng-minlength="9" placeholder="Mobile No." required="" tabindex="2" type="number" min="9" max="12" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Email ID:</label>
                                </div>
                                <div className="col-sm-8">
                                    <input className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="email" id="email" maxlength="100" placeholder="Email ID" required="" tabindex="3" type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Id Proof No.(Adhar/pan/dl):</label>
                                </div>
                                <div className="col-sm-8">
                                    <input className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="id_proof_no" id="id_proof_no" ng-minlength="9" placeholder="Id Proof No." required="" tabindex="2" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">NO. of Persons Indian:</label>
                                </div>
                                <div className="col-sm-8">
                                    <select className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="no_of_persons_indian" id="no_of_persons_indian" required="" style={{minWidth: "100% !important"}}>
                                        <option value="">Please Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">NO. of Persons Foreigner:</label>
                                </div>
                                <div className="col-sm-8">
                                    <select className="form-control ng-untouched ng-pristine ng-valid" formcontrolname="no_of_persons_foreigner" id="no_of_persons_foreigner" style={{minWidth: "100% !important"}} tabindex="2">
                                        <option selected="" value="0">0</option>
                                        <option value="0">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                        <option value="4">5</option>
                                        <option value="5">6</option>
                                        <option value="6">7</option>
                                        <option value="7">8</option>
                                        <option value="8">9</option>
                                        <option value="9">10</option>
                                        <option value="10">11</option>
                                        <option value="11">12</option>
                                        <option value="12">13</option>
                                        <option value="13">14</option>
                                        <option value="14">15</option>
                                        <option value="15">16</option>
                                        <option value="16">17</option>
                                        <option value="17">18</option>
                                        <option value="18">19</option>
                                        <option value="19">20</option>
                                        <option value="20">21</option>
                                        <option value="21">22</option>
                                        <option value="22">23</option>
                                        <option value="23">24</option>
                                        <option value="24">25</option>
                                        <option value="25">26</option>
                                        <option value="26">27</option>
                                        <option value="27">28</option>
                                        <option value="28">29</option>
                                        <option value="29">30</option>
                                        <option value="30">31</option>
                                        <option value="31">32</option>
                                        <option value="32">33</option>
                                        <option value="33">34</option>
                                        <option value="34">35</option>
                                        <option value="35">36</option>
                                        <option value="36">37</option>
                                        <option value="37">38</option>
                                        <option value="38">39</option>
                                        <option value="39">40</option>
                                        <option value="40">41</option>
                                        <option value="41">42</option>
                                        <option value="42">43</option>
                                        <option value="43">44</option>
                                        <option value="44">45</option>
                                        <option value="45">46</option>
                                        <option value="46">47</option>
                                        <option value="47">48</option>
                                        <option value="48">49</option>
                                        <option value="49">50</option>
                                        <option value="50">51</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Select Safari Date:</label>
                                </div>
                                <div className="col-sm-8">
                                    <input autocomplete="off" className="form-control hasDatepicker ng-untouched ng-pristine ng-invalid" formcontrolname="safari_date" id="safari_date" placeholder="Please select date" required="" tabindex="2" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Select Safari Time:</label>
                                </div>
                                <div className="col-sm-8">
                                    <select className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="safari_time" id="safari_time" placeholder="Safari Time" required="" style={{minWidth: "100% !important"}}>
                                        <option value="">Please select </option>
                                        <option value="8:00 am to 9:00 am">8:00 am to 9:00 am</option>
                                        <option value="9:00 am to 10:00 am">9:00 am to 10:00 am</option>
                                        <option value="10:00 am to 11:00 am">10:00 am to 11:00 am</option>
                                        <option value="11:00 am to 12:00 pm">11:00 am to 12:00 pm</option>
                                        <option value="12:00 pm to 01:00 pm">12:00 pm to 01:00 pm</option>
                                        <option value="01:00 pm to 02:00 pm">01:00 pm to 02:00 pm</option>
                                        <option value="02:00 pm to 03:00 pm">02:00 pm to 03:00 pm</option>
                                        <option value="03:00 pm to 04:00 pm">03:00 pm to 04:00 pm</option>
                                        <option value="04:00 pm to 05:00 pm">04:00 pm to 05:00 pm</option>
                                        <option value="05:00 pm to 06:00 pm">05:00 pm to 06:00 pm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br className="hidden-xs" />
                        <div className="col-sm-6" style={{marginTop: "10px"}}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">State:</label>
                                </div>
                                <div className="col-sm-8">
                                    <select className="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="state" id="state" required="" style={{minWidth: "100% !important"}}>
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
                        <div className="col-sm-6" style={{marginTop: "10px"}}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="control-label">Full Address:</label>
                                </div>
                                <div className="col-sm-8">
                                    <textarea className="form-control ng-untouched ng-pristine ng-invalid" cols="60" formcontrolname="address" id="address" placeholder="Full Address.." required="" rows="4" tabindex="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <p>
                        <b>Note:</b>
                        </p>
                        <p># Visitors have to report 30 min before at Palighat chambal</p>
                        <p># Safari amount is non refundable</p>
                        <p># Online booking is compulsory for Chambal safari</p>
                        <p># Below 5 Year Child is complimentary (After 5 Year charges will be applicable)</p>
                        <p># safari will be conducted by motor boat</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div style={{marginBottom: "30px"}}>&nbsp;</div>
                        <p><b> 0 Persons : </b> 0 INR</p>
                        <p><b> GST(5%) : </b> 0 INR</p>
                    </div>
                </div>
                <div className="formsection" style={{marginTop: "20px"}}>
                    <div className="text-center paynow">
                        <ul className="list-inline">
                        <li className="paybtn">Payable Amount : <input formcontrolname="amount" id="booking_amount" type="hidden" value="0" className="ng-untouched ng-pristine ng-valid" />
                            <span id="amount">0</span>
                        </li>
                        <li>
                            <button className="btn btn-primary" type="submit">Pay Now</button>
                        </li>
                        <li>
                            <Link className="btn btn-default" to="/online-Chambal-moter-boat-safari-booking" style={{marginBottom: "3px", height: "43px"}}>Go Back</Link>
                        </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p style={{textAlign: "center"}}>Note: Final Payment Includes extra 3% of payable amount as Convenience Fee.</p>
                </div>
            </form>
        </div>
    </div>
  )
}
