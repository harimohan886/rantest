import React, { useState, useEffect } from 'react'
import CategoryInputs from './CategoryInputs';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function ForeignCategory({ action, package_id }) {

  const params = useParams();

  const [foreigner, setForeigner] = useState([{
    key: Date.now(),
    price: "",
    extra_adult_price: "",
    extra_child_price: "",
    extra_bed_price: "",
    festival_price: "",
    festival_kid: "",
    safari_price: "",
  }]);

  let onChange = (i, e) => {
    let newforeigners = [...foreigner];
    newforeigners[i]['price'] = e.price || 0;
    newforeigners[i]['extra_adult_price'] = e.extra_adult_price || 0;
    newforeigners[i]['extra_child_price'] = e.extra_child_price || 0;
    newforeigners[i]['extra_bed_price']   = e.extra_bed_price || 0;
    newforeigners[i]['festival_kid']      = e.festival_kid || 0;
    newforeigners[i]['festival_price']    = e.festival_price || 0;
    newforeigners[i]['safari_price']      = e.safari_price || 0;
    setForeigner(newforeigners);
    localStorage.setItem('ForeignerValues', JSON.stringify(foreigner));

  }

  let addFormFields = () => {
    setForeigner([...foreigner, {
      key: Date.now(),
      price: "",
      extra_adult_price: "",
      extra_child_price: "",
      extra_bed_price: "",
      festival_price: "",
      festival_kid: "",
      safari_price: "",
    }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...foreigner];
    newFormValues.splice(i, 1);
    setForeigner(newFormValues)
    localStorage.setItem('ForeignerValues', JSON.stringify(newFormValues));
  }

  function GetEditDetails() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/package/package-categories/${params.id}`, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('tokenkey')
      },
    }).then(result => {
      setForeigner(result.data.data.foreignerOptions);
      localStorage.setItem('ForeignerValues', JSON.stringify(result.data.data.foreignerOptions));
    })
  }

  useEffect(() => {
    action == 'edit' &&
      GetEditDetails();
  }, []);


  return (
    <div className='indianForm'>
      <h5 className='mt-8 text-black'>Category Options (For Foreigner)</h5> &nbsp;
      {/*<button type="button" onClick={() => addFormFields()} className='text-white float-right bg-success font-medium rounded px-5 py-2.5 text-center mb-4'>Add Slot</button>*/}
      <div className='table-responsive'>
      <table className='table bg-white border border-slate-300 mt-2 indianCategory'>
        <thead>
        <tr>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Price</th>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Extra Adult Price</th>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Extra Kid Price</th>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Extra Bed Price</th>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Festival Price</th>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Festival Kid Price</th>
            <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Safari Price</th>
          </tr>
        </thead>
        <tbody>
          {foreigner.map((user, index) => (
            <tr key={index}>
              <CategoryInputs
                key={index}
                value={user}
                type={'foreigner'}
                onChange={e => onChange(index, e)}
              />
              {/*<td className='border border-slate-300 text-center'>
                <button type="button" onClick={() => removeFormFields(index)} disabled={foreigner.length <= 1} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                  Remove
                </button>
          </td>*/}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
