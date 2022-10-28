import React , { useState } from 'react';
import axios from 'axios';

export default function CurrentBooking() {

  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [email , setEmail] = useState('');
  const [date , setDate] = useState('');
  const [timing , setTiming] = useState('');
  const [zone , setZone] = useState('');
  const [vehicle , setVehicle] = useState('');
  const [person , setPerson] = useState('');

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const HandleSubmit = () => {

    const data = {
        "name": name,
        "mobile": phone,
        "email": email,
        "date": date,
        "time": timing,
        "zone": zone,
        "vehicle": vehicle,
        "persons": person
    }

    if(name == '' || phone == '' || email == '' || person == '' || vehicle == '' || zone == '' || timing == '') {
        alert("Please fill all the fields");
    } else {
        axios.post(`${process.env.REACT_APP_BASE_URL}/admin/bookings/current`, data , {
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
        }).then((response)=>{
                if(response.data.success) {
                    window.location.href = '/booking-success';
                }
        });
    }
  }

  return (
    <div className="modal fade in" id="myModal" style={{paddingLeft: "0px"}}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title">Current Booking Form:</span>
                <button className="close" data-dismiss="modal" id="CloseButton" type="button">×</button>
            </div>
            <div className="modal-body">
                <div className="form-div">
                <form noValidate="" className="ng-untouched ng-pristine ng-invalid">
                    <div className="form-group">
                    <label className="control-label">Full Name:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="name" name="name" onChange = {(e) => setName(e.target.value) } placeholder="Enter your name" required="" type="text"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Mobile Number:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="mobile" name="mobile"  onChange = {(e) => setPhone(e.target.value) } placeholder="Enter mobile No." required="" type="text"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Email id:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="email" name="email"  onChange = {(e) => setEmail(e.target.value) } placeholder="Enter Email" required="" type="email"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Date:</label>
                    <input type = "date" className="form-control ng-untouched ng-pristine ng-valid hasDatepicker"  onChange = {(e) => setDate(e.target.value) } data-date-format="dd/mm/yyyy" id="date" name="date"  min={disablePastDate()}/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Time:</label>
                    <br/>
                            <select className="form-control" formcontrolname="timing"  onChange = {(e) => setTiming(e.target.value)} id="safari_time" placeholder="Safari Time">
                                <option value="">Please select </option>
                                <option value="Morning>">Morning</option>
                                <option value="Evening">Evening</option>
                            </select>
                        
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Zone:</label>
                    <br/>

                            <select className="form-control" formcontrolname="zone"  onChange = {(e) => setZone(e.target.value)} id="safari_time" placeholder="Safari Time">
                                <option value="">Please select </option>
                                <option value="1/2/3/4/5/6/7">1/2/3/4/5/6/7</option>
                                <option value="8/9/10">8/9/10</option>
                            </select>
                        
                   </div>
                    <div className="form-group">
                    <label className="control-label">Safari Vehicle:</label>
                    <br/>
                    
                            <select className="form-control" formcontrolname="vehicle"  onChange = {(e) => setVehicle(e.target.value)} id="safari_time" placeholder="Safari Time">
                                <option value="">Please select </option>
                                <option value="Jeep">Jeep</option>
                                <option value="Canter">Canter</option>
                            </select>
                     </div>
                    <div className="form-group">
                    <label className="control-label">Number of Person:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid"  onChange = {(e) => setPerson(e.target.value) }  id="no_of_person" name="no_of_person" placeholder="Enter Number of Person" required="" type="text"/>
                    </div>
                    <div className="form-group text-center">
                    <input className="btn btn-primary" type="button" onClick = {HandleSubmit}  value="Submit"/>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
