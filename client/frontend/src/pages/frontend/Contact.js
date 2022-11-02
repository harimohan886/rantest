import React from 'react'
import { Link } from 'react-router-dom'
import InnerBanner from '../../components/frontend/Banner/InnerBanner'
import ContactForm from '../../components/frontend/Common/ContactForm'

export default function Contact() {
  return (
    <>
    <InnerBanner />
    <div className="container lg:pt-10 lg:pb-10">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-white shadow-md rounded text-center p-4 border-kenpozome border-2 grid-box">
                    <img src="image/icons/mail.png" className="m-auto" />
                    <h3 className="text-2xl text-black mb-3 mt-3">Support</h3>
                    <a href={"mailto:ranthambore360@gmail.com"} className="sm:text-xl text-black hover:text-black focus-within:text-black focus:text-black active:no-underline focus-within:no-underline">ranthambore360@gmail.com</a><br/>
                    
                </div>
                <div className="bg-white shadow-md rounded text-center p-4 border-kenpozome border-2 grid-box">
                    <img src="image/icons/c-phone.png" className="m-auto" />
                    <h3 className="text-2xl text-black mb-3 mt-3">Enquiry</h3>
                    <a href={"tel:+917838498645"} className="sm:text-xl text-black hover:text-black focus-within:text-black focus:text-black active:no-underline focus-within:no-underline">+91 7838 4986 45 </a><br/>
                    <a href={"tel:+917289842772"} className="sm:text-xl text-black hover:text-black focus-within:text-black focus:text-black active:no-underline focus-within:no-underline"> +91 7289 8427 72 </a><br/>
                    <a href={"tel:+919718717119"} className="sm:text-xl text-black hover:text-black focus-within:text-black focus:text-black active:no-underline focus-within:no-underline"> +91 9718 7171 19</a>
                </div>
                <div className="bg-white shadow-md rounded text-center p-4 border-kenpozome border-2 grid-box">
                    <img src="image/icons/address.png" className="m-auto" />
                    <h3 className="text-2xl text-black mb-3 mt-3">Address</h3>
                    <span className="sm:text-xl text-black">Jungle Safari India, Sawai Madhopur, Rajasthan 322001</span>
                </div>
            </div>
    </div>

    <ContactForm/>
    </>
  )
}
