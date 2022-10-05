import React from 'react'
import Calendar from '../../components/frontend/Calendar/Calendar'
import SafariZone from '../../components/frontend/Home/SafariZone'
import Timing from '../../components/frontend/Home/Timing'
import AboutSafari from '../../components/frontend/Safari/AboutSafari'
import BookingProcedure from '../../components/frontend/Safari/BookingProcedure'
import FormSafariBooking from '../../components/frontend/Safari/FormSafariBooking'
import InfoSafariBooking from '../../components/frontend/Safari/InfoSafariBooking'
import TransportMode from '../../components/frontend/Safari/TransportMode'

export default function OnlineSafariBooking() {
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
                    <Calendar/>
                </div>
            </div>
        </div>
        <FormSafariBooking/>
        <InfoSafariBooking/>
        <Timing/>
        <SafariZone/>
        <AboutSafari/>
        <BookingProcedure/>
        <TransportMode/>
    </section>
  )
}
