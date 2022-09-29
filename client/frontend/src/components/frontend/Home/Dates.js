import React from 'react'
import Calendar from '../Calendar/Calendar'
import BookSafari from './BookSafari'

export default function Dates() {
  return (
    <section id='select-date'>
        <div className='container'>
            <h3>Please select the dates</h3>
            <div className='row'>
                <div className='col-sm-6 col-xs-12'>
                    <Calendar/>
                </div>
                <div className='col-sm-6 col-xs-12'>
                    <BookSafari/>
                </div>
            </div>
        </div>
    </section>
  )
}
