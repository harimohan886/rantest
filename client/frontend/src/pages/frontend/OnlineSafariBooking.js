import React , { useState } from 'react'
import Calendar from '../../components/frontend/Calendar/Calendar'
import SafariZone from '../../components/frontend/Home/SafariZone'
import Timing from '../../components/frontend/Home/Timing'
import AboutSafari from '../../components/frontend/Safari/AboutSafari'
import BookingProcedure from '../../components/frontend/Safari/BookingProcedure'
import FormSafariBooking from '../../components/frontend/Safari/FormSafariBooking'
import InfoSafariBooking from '../../components/frontend/Safari/InfoSafariBooking'
import TransportMode from '../../components/frontend/Safari/TransportMode'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import swal from 'sweetalert'
import axios from 'axios';
import moment from 'moment';

export default function OnlineSafariBooking() {

    const [booking_date , setBookingDate] = useState([]);
    const [details , setDetails] = useState([]);
    const [ date ,setDate ] = useState();
    const [ timing ,setTiming ] = useState();
    const [ vehicle ,setVehicle ] = useState();
    const [ zone ,setZone ] = useState();
    const [zones , setZones] = useState([]);
    const [timings , setTimings] = useState([]);
    const [vehicles , setVehicles] = useState([]);

    const handleDateSelect = (selectInfo) => {
  
        var elems  = document.querySelectorAll(".fc-daygrid-day-frame");
    
        [].forEach.call(elems, function(el) {
            el.classList.remove("fc-highlight")
    
        });
    
        let row = document.querySelector("td[data-date='"+selectInfo.startStr+"'] .fc-daygrid-day-frame");
        row.classList.add('fc-highlight');
    
        const data = {
          "date": selectInfo.startStr
        }
    
        axios.post(`${process.env.REACT_APP_BASE_URL}/safari/checkAvilabilityByDate`, data).then(res => {
              console.log("res", res);
            if (res.status === 200) {
                setZones(res.data.zones);
                setTimings(res.data.timings);
                setVehicles(res.data.vehicles);
                setBookingDate(res.data.data);
                setDate(res.data.data[0].date);
                setTiming(res.data.data[0].timing);
                setVehicle(res.data.data[0].vehicle);
                setZone(res.data.data[0].zone);
            } else {
                setBookingDate([]);
                swal("Warning", res.data.error.message, "warning");
            }
        }).catch(error => {
              swal("Warning", error, "warning");
        })
    }

  return (
    <section id='safaribanner'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-6 col-xs-12 padding-left-zero'>
                    <div className='safaribgmain'>
                        <img alt="Safari" class="img-responsive" src="../image/safari-banner.png" />
                    </div>
                </div>
                <div className='col-sm-6 col-xs-12'>
                    <h1>Ranthambore Safari Booking</h1>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        displayEventTime={true}
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        }}
                        editable={true}
                        selectable={true}
                        selectAllow= { function(select) {
                            return moment().diff(select.start, 'days') <= 0
                        }}
                    
                        select={handleDateSelect}
                        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    />
                    <div className='onlineSafariB'>
                        <FormSafariBooking  zones = {zones} timings = {timings} vehicles = {vehicles} bookingDate  = {booking_date} date = {date} />
                    </div>
                </div>
            </div>
            
        </div>
        
        <InfoSafariBooking/>
        <Timing/>
        <SafariZone/>
        <AboutSafari/>
        <BookingProcedure/>
        <TransportMode/>
    </section>
  )
}
