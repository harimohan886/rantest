import React from 'react'

export default function EnquiryForm() {
  return (
    <div className="hotel-book-form slotform">
    <h5>Enquiry Form</h5>
    <form id="EnquiryForm" action="https://jimcorbett.in/enquiry#EnquiryForm" method="POST">
      <div className="form-group">
        <label className="control-label">Booking Date</label>
        <div className="input-group">
          <span className="input-group-addon">
            <img src="../image/icons/calendar.png" alt='Calendar' />
          </span>
          <input type="date" name="booking_date" className="form-control" id="booking_date"  min="2022-09-28"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label">Traveller Name</label>
        <div className="input-group">
          <span className="input-group-addon">
            <img src="../image/icons/user.png" alt='User'/>
          </span>
          <input type="name" name="traveller_name" className="form-control" placeholder="Enter your full name.." id="traveller_name" />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label">Mobile Number</label>
        <div className="input-group">
          <span className="input-group-addon">
            <img src="../image/icons/phone.png" alt='Phone'/>
          </span>
          <input type="tel" name="phone"  className="form-control" placeholder="Eg. 123 000 000" id="enquiry-phone"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label">Message</label>
        <textarea className="form-control" rows="3" placeholder="Message" name="message"></textarea>
      </div>
      <div className="form-group text-center">
        <button className="btn btn-warning btn-lg" form="EnquiryForm" type="submit">Book Now</button>
      </div>
    </form>
  </div>
  )
}
