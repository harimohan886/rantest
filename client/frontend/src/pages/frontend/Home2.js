import React from 'react'
import Adventures from '../../components/frontend/Home2/Adventures'
import FrontBooking from '../../components/frontend/Home2/FrontBooking'
import HolidayTour from '../../components/frontend/Home2/HolidayTour'
import HotelsIn from '../../components/frontend/Home2/HotelsIn'
import NewBanner from '../../components/frontend/Home2/NewBanner'
import NewTiming from '../../components/frontend/Home2/NewTiming'
import SeoContent from '../../components/frontend/Home2/SeoContent'

export default function Home2() {
  return (
    <>
    <NewBanner/>
    <Adventures/>
    <div className='container'>
        <div className='goWild'>
            <h3 className='common-title mt-2 mb-2'>Let's go Wild. Reserve your slots now.</h3>
            <div className='row'>
                <div className='col-sm-6'>
                    <FrontBooking/>
                </div>
                <div className='col-sm-6'>
                    <img src='../image/tiger-rock.jpeg' className='img-fluid mt-3' alt='Tiger'/>
                </div>
            </div>
        </div>
    </div>
    <NewTiming/>
    <HotelsIn/>
    <SeoContent/>
    <HolidayTour/>
    </>
  )
}
