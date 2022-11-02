import React from 'react'

export default function ContactForm() {
  return (
    <div className="container">
    <div className="lg:mt-10 lg:mb-10 contact">
        <h2 className="text-black text-4xl text-center font-bold lg:mt-5">Get In Touch With Us</h2>
        
        <form>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
                <div>
                <label htmlFor="email" className="block mb-2 text-base font-medium text-kenpozome">Name</label>
                <input
                type="text"
                id="name"
                className="inputstyle h-12 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0 bo focus-within:outline-none block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400"
                 
                 />
                  
                </div>
                <div>
                <label htmlFor="email" className="block mb-2 text-base font-medium text-kenpozome">Email</label>
                <input
                type="email"
                id="number"
                className="inputstyle h-12 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0 bo focus-within:outline-none block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400"
                
                />
                
                </div>
                <div>
                <label htmlFor="email" className="block mb-2 text-base font-medium text-kenpozome">Mobile Number</label>
                <input
                type="number"
                id="email"
                className="inputstyle h-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0 bo focus-within:outline-none  block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400"
                
                />
                 

                </div>
                <div>
                <label htmlFor="email" className="block mb-2 text-base font-medium text-kenpozome">Your Enquiry</label>
                <textarea id="message" rows="6" className="p-2.5 w-full bg-white border border-gray-300 focus:border-gray-300 focus-within:border-gray-300 focus:ring-gray-300 text-gray-900 text-sm rounded-lg dark:focus:ring-gray-300 dark:focus:border-gray-300"
                
                ></textarea>
                 
                </div>
                </div>
                <div className="text-center lg:mt-4">
                <button type="button" className="bg-kenpozome contact-btn py-2 text-center px-4 shadow-lg rounded sm:text-xl font-semibold mb-2 text-white focus-within:no-underline focus:no-underline active:no-underline hover:text-white">Submit</button>
                </div>
            </form>
    </div>
    </div>
  )
}
