import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

export default function FormSafariBooking({ bookingDate  , date }) {

    const [ name , setName ] =  useState('');
    const [ phone , setPhone ] =  useState('');
    const [ zone , setZone ] =  useState('');
    const [ vehicle , setVehicle ] =  useState('');
    const [ timing , setTiming ] =  useState('');
    const [ zones , setZones ] =  useState([]);

    const HandleSubmit = () => {

        const data = {
            "date": date,
            "timing": timing,
            "vehicle": vehicle,
            "zone": zone
        }

        axios.post(`${process.env.REACT_APP_BASE_URL}/safari/checkAvilability`, data).then(res => {
          if (res.status === 200) {
                localStorage.setItem('selName', name);
                localStorage.setItem('selPhone', phone);
                localStorage.setItem('selDate', date);
                localStorage.setItem('selTiming', timing);
                localStorage.setItem('selVehicle', vehicle);
                localStorage.setItem('selZone', zone);
                localStorage.setItem('selAvailable', res.data.data.availability);
                window.location.href = '/safari-booking-details';
          } else {
              localStorage.removeItem('userData');
              swal("Warning", res.data.error.message, "warning");
          }
      }).catch(error => {
            swal("Warning", error, "warning");
      })
    }

    function GetAllZones()   {
        axios.get(`${process.env.REACT_APP_BASE_URL}/safari/zone-categories`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer `+localStorage.getItem('accessToken')
            },
        }).then(result => { 
            setZones(result.data.data);
        })
    };

    useEffect(() => {
        GetAllZones();
    },[])

  return (
    <section id="select-date" style={{marginTop: "30px"}}>
        <form className="form ng-untouched ng-pristine ng-valid" id="form_date_safari" noValidate="">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <div className="input-group inputdesign">
                            <span className="input-group-btn">
                                <img alt="user" src="../image/icons/usericon.png" />
                            </span>
                            <input className="form-control" id="name"  onChange = {(e) => setName(e.target.value)} placeholder="Enter your name" type="name" />
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="input-group inputdesign">
                            <span className="input-group-btn">
                                <img alt="phone" src="../image/icons/phoneicon.png"/>
                            </span>
                            <input className="form-control" id="mobile_number" onChange = {(e) => setPhone(e.target.value)} placeholder="Mobile number" type="number"/>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="input-group selectdesign">
                            <span className="input-group-btn">
                                <img alt="zone" src="../image/icons/zone.png"/>
                            </span>
                            <select className="form-control" id="zone" name="zone" onChange = {(e) => setZone(e.target.value)} required="">
                                <option>Select your Zone</option>
                                { zones && zones.map((item,index) => (
                                    <option value={item.name} key={index}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="input-group selectdesign">
                            <span className="input-group-btn">
                                <img alt="zone" src="../image/icons/jeep.png"/>
                            </span>
                            <select className="form-control" id="vehicle" name="vehicle" onChange = {(e) => setVehicle(e.target.value)} required="">
                                <option>Choose vehicle</option>
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
                            <select className="form-control" id="timing" name="timing" onChange = {(e) => setTiming(e.target.value)} required="">
                                <option>Select Timing</option>
                                <option value="Morning">Morning</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>
                    </div>
                    { bookingDate && bookingDate.length > 0 &&
                        <div className="col-sm-4 col-xs-12">
                            <div className="booknowbtn">
                                <Link onClick = {HandleSubmit} className="btn btn-primary btn-block" id="stepTwo">Book Now</Link>
                            </div>
                        </div>
                    }
                </div>
        </form>
    </section>
  )
}
