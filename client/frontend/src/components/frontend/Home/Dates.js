import React, { useState , useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import swal from 'sweetalert'
import axios from 'axios';
import moment from 'moment';

import BookSafari from './BookSafari'

export default function Dates() {

    const [booking_date , setBookingDate] = useState([]);

    const [details , setDetails] = useState([]);

    const [ date ,setDate ] = useState();
    const [ timing ,setTiming ] = useState();
    const [ vehicle ,setVehicle ] = useState();
    const [ zone ,setZone ] = useState();


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
    <section id='select-date'>
        <div className='container sectionFrame'>
            <h3 className='text-2xl'>Please select the dates</h3>
            <div className='row'>
                <div className='col-sm-6 col-xs-12'>
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
                </div>
                <div className='col-sm-6 col-xs-12'>
                    <BookSafari bookingDate  = {booking_date} date = {date} />
                </div>
            </div>
        </div>
    </section>
  )
}
