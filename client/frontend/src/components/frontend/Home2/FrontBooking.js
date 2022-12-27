import React, { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import swal from 'sweetalert'
import axios from 'axios';
import moment from 'moment';
import BookSafari2 from './BookSafari2';


export default function FrontBooking() {

    const [booking_date , setBookingDate] = useState([]);

    const [details , setDetails] = useState([]);

    const [ date ,setDate ] = useState();
    const [ setTiming ] = useState();
    const [ setVehicle ] = useState();
    const [ setZone ] = useState();
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
            setDetails([]);
              setBookingDate([]);
              swal("Warning", res.data.error.message, "warning");
          }
      }).catch(error => {
            swal("Warning", error, "warning");
      })
  }

  return (
    <section id='select-date'>
        <div className='n2rCalendar'>
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
        </div>
        <div className='slot-form'>
            { details && <BookSafari2 zones = {zones} timings = {timings} vehicles = {vehicles} bookingDate  = {booking_date} date = {date} /> }
        </div>  
    </section>
  )
}
