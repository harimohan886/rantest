import axios from 'axios';
import React, { useState } from 'react'


export default function EnquiryForm({ hotel_id, type }) {

  const [error_list, setErrorList] = useState([]);
  const [success_msg, setSuccessMsg] = useState("");

  const [enquiry, setEnquiry] = useState({
    traveller_name: '',
    message: '',
    phone: '',
    booking_date: '',
    type: type,

  });


  const handleChange = (e) => {
    console.log("e name", e.target.name)
    setEnquiry(enquiry => ({ ...enquiry, [e.target.name]: e.target.value }));
  }

  const HandleAddEnquiry = (e) => {
    e.preventDefault();

    console.log(enquiry);

    if (enquiry.traveller_name === '' || enquiry.traveller_name === null) {
      setErrorList(errorlist => ({ ...errorlist, traveller_name: 'Please enter name!' }));
    }

    if (enquiry.phone === '') {
      setErrorList(errorlist => ({ ...errorlist, phone: 'Please enter phone!' }));
    }

    if (enquiry.booking_date === '') {
      setErrorList(errorlist => ({ ...errorlist, booking_date: 'Please choose booking date!' }));
    }

    if (enquiry.traveller_name === '' || enquiry.phone === null || enquiry.booking_date === null) {
      return false;
    }


    axios.post(`${process.env.REACT_APP_BASE_URL}/admin/enquiries`, enquiry).then(res => {
      if (res.data.success === true) {
        setSuccessMsg(res.data.message);

        setEnquiry(enquiry => ({
          ...enquiry,
          traveller_name: '',
          message: '',
          phone: '',
          booking_date: '',

        }));


        setErrorList([]);
      } else if (res.data.validation_errors) {
        setErrorList(res.data.validation_errors);
      } else if (res.data.status == 401) {
        //  setDuplicateDate(true);
      }
    });
  }

  console.log('error_list', error_list);

  return (
    <div className="hotel-book-form slotform">
      <h5>Enquiry Form</h5>
      <div className="text-success">{success_msg}</div>
      <form id="EnquiryForm" >
        <div className="form-group">
          <label className="control-label">Booking Date</label>
          <div className="input-group">
            <span className="input-group-addon">
              <img src="../image/icons/calendar.png" alt='Calendar' />
            </span>
            <input type="date" name="booking_date" onChange={handleChange} className="form-control" id="booking_date" min="2022-09-28" />
            <span className="text-danger left col-md-12">{error_list.booking_date}</span>


          </div>
        </div>
        <div className="form-group">
          <label className="control-label">Traveller Name</label>
          <div className="input-group">
            <span className="input-group-addon">
              <img src="../image/icons/user.png" alt='User' />
            </span>
            <input type="name" required="required" name="traveller_name" onChange={handleChange} className="form-control" placeholder="Enter your full name.." id="traveller_name" />
            <span className="text-danger left col-md-12">{error_list.traveller_name}</span>

          </div>
        </div>
        <div className="form-group">
          <label className="control-label">Mobile Number</label>
          <div className="input-group">
            <span className="input-group-addon">
              <img src="../image/icons/phone.png" alt='Phone' />
            </span>
            <input type="tel" required="required" name="phone" onChange={handleChange} className="form-control" placeholder="Eg. 123 000 000" id="enquiry-phone" />
            <span className="text-danger left col-md-12">{error_list.phone}</span>

          </div>
        </div>
        <div className="form-group">
          <label className="control-label">Message</label>
          <textarea className="form-control" required="required" rows="3" onChange={handleChange} placeholder="Message" name="message"></textarea>
          <div className="invalid-feedback">{error_list.message}</div>
        </div>
        <div className="form-group text-center">
          <button className="btn btn-warning btn-lg" onClick={HandleAddEnquiry} type="submit">Book Now</button>
        </div>
      </form>
    </div>
  )
}
