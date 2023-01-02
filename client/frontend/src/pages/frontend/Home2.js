import React ,{ useState,useEffect}from 'react'
import HomeTabs from '../../components/frontend/Home/HomeTabs'
import Adventures from '../../components/frontend/Home2/Adventures'
import FrontBooking from '../../components/frontend/Home2/FrontBooking'
import HolidayTour from '../../components/frontend/Home2/HolidayTour'
import HotelsIn from '../../components/frontend/Home2/HotelsIn'
import NewBanner from '../../components/frontend/Home2/NewBanner'
import NewBlogs from '../../components/frontend/Home2/NewBlogs'
import NewTiming from '../../components/frontend/Home2/NewTiming'
import SeoContent from '../../components/frontend/Home2/SeoContent'
import axios from 'axios';
export default function Home2() {
    
    const [packages,setPackages] = useState([]);
    const [hotels,setHotels]     = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/package/packages/front`).then((res)=>{
            setPackages(res.data.data);
        });
        axios.get(`${process.env.REACT_APP_BASE_URL}/hotel/hotels/front`).then((res)=>{
            setHotels(res.data.data);
        });
    },[])
    
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
                    <img src='../image/jeeep.jpeg' className='img-fluid mt-3' alt='Tiger'/>
                </div>
            </div>
        </div>
    </div>
    <NewTiming/>
    <HotelsIn hotels={ hotels }/>
    <SeoContent/>
    <HolidayTour packages={ packages }/>
    <HomeTabs/>
    <NewBlogs/>
    </>
  )
}
