import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import './css/style.css';
import './css/admin.css';
// import TopHead from './components/frontend/header/TopHead';
// import Header from './components/frontend/header/Header';
import Home from './pages/frontend/Home';
import OnlineSafariBooking from './pages/frontend/OnlineSafariBooking';
// import Footer from './components/frontend/Footer/Footer';
import Chambal from './pages/frontend/Chambal';
import ChambalBooking from './pages/frontend/ChambalBooking';
import About from './pages/frontend/About';
import Contact from './pages/frontend/Contact';
import Terms from './pages/frontend/Terms';
import Privacy from './pages/frontend/Privacy';
import Cancellation from './pages/frontend/Cancellation';
import SafariTravellerBooking from './pages/frontend/SafariTravellerBooking';
import Thankyou from './pages/frontend/Thankyou';
import Hotel from './pages/frontend/Hotel/Hotel';
import HotelDetails from './pages/frontend/Hotel/HotelDetails';

// Admin import starts here
import Login from './pages/admin/Auth/Login';



function App() {
  return (
    <Router>
    {/* <TopHead/>
    <Header/> */}
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/online-ranthambore-safari-booking' element={<OnlineSafariBooking />} />
      <Route exact path='/safari-booking-details' element={<SafariTravellerBooking />} />
      <Route exact path='/online-chambal-moter-boat-safari-booking' element={<Chambal/>} />
      <Route exact path='/chambal-safari-booking' element={<ChambalBooking/>} />
      <Route exact path='/about-us' element={<About/>} />
      <Route exact path='/contact-us' element={<Contact/>} />
      <Route exact path='/terms-and-conditions' element={<Terms/>} />
      <Route exact path='/privacy-policy' element={<Privacy/>} />
      <Route exact path='/cancellation-policy' element={<Cancellation/>} />
      <Route exact path='/thankyou' element={<Thankyou/>} />
      <Route exact path='/hotels' element={<Hotel/>} />
      <Route exact path='/hotel-details' element={<HotelDetails/>} />


      {/* Admin routing starts here */}
      <Route exact path='/admin/login' element={<Login />} />

    </Routes>
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
