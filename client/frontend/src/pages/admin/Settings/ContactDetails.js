import React, { useState } from 'react'
import FooterAdmin from '../../../components/Admin/Footer/FooterAdmin';
import Navbar from '../../../components/Admin/Navbar/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';


export default function ContactDetails() {

    const [formValues, setFormValues] = useState([{ name: ""}]);
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: ""}])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

  return (
    <div className="relative md:ml-64 bg-default-skin">
     <Sidebar/>
     <Navbar/>
      <div className="flex flex-wrap min600">
        <div className="w-full mb-12 xl:mb-0 px-4 padding-top80">
            <div className='mt-4'>
                <h1 className='text-2xl text-black font-bold mb-3'>Contact details</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                {formValues.map((element, index) => (
                    <div className="flex mb-3" key={index}>
                    <input type="text" name="name" placeholder='Phone number' value={element.name || ""} onChange={e => handleChange(index, e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {
                        index ? 
                        <button type="button"  className="ml-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 remove" onClick={() => removeFormFields(index)}>Remove</button> 
                        : null
                    }
                    </div>
                ))}
                <div className="button-section">
                    <button className="text-white bg-success font-medium rounded px-5 py-2.5 text-center add" type="button" onClick={() => addFormFields()}>Add more phone numbers</button>
                </div>
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Alt. Phone Number</label>
                    <input type="text" id="altPhone" placeholder='Alt. Phone Number' value='+91 9971717045' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Contact Email</label>
                    <input type="email" id="contactEmail" placeholder='Contact Email' value='dailytourandtravel@gmail.com' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div> 
                <div className='form-group'>
                    <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Contact Address</label>
                    <textarea id="address" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></textarea>
                </div>  
                <div className='form-group'>
                    <button type="submit" className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Save</button>
                </div>
            </form>
        </div>
      </div>
      <FooterAdmin/>
    </div>
  )
}