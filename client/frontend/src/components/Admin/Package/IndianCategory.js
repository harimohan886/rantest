import React, { useState, useEffect } from 'react'
import CategoryInputs from './CategoryInputs';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function IndianCategory({ action, package_id }) {

  const params = useParams();

  const [indian, setIndian] = useState([{
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
    let newusers = [...indian];
    newusers[i]['price'] = e.price || 0;
    newusers[i]['extra_adult_price'] = e.extra_adult_price || 0;
    newusers[i]['extra_child_price'] = e.extra_child_price || 0;
    newusers[i]['extra_bed_price']   = e.extra_bed_price || 0;
    newusers[i]['festival_kid']      = e.festival_kid || 0;
    newusers[i]['festival_price']    = e.festival_price || 0;
    newusers[i]['safari_price']      = e.safari_price || 0;
    setIndian(newusers);
    localStorage.setItem('IndianValues', JSON.stringify(indian));
  }

  let addFormFields = () => {
    setIndian([...indian, {

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
    let newFormValues = [...indian];
    newFormValues.splice(i, 1);
    setIndian(newFormValues)
    localStorage.setItem('IndianValues', JSON.stringify(newFormValues));
  }

  function GetEditDetails() {
    axios.get(`${process.env.REACT_APP_BASE_URL}/package/package-categories/${params.id}`, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('accessToken')
      },
    }).then(result => {
      setIndian(result.data.data.indianOptions);
      localStorage.setItem('IndianValues', JSON.stringify(result.data.data.indianOptions));
    })
  }

  useEffect(() => {
    action == 'edit' &&
      GetEditDetails();
  }, []);

  return (
    <div className='indianForm'>
      <h5 className='mt-8 text-black'>Category Options (For Indians)</h5> &nbsp;
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
          {indian && indian.map((user, index) => (
            <tr key={index}>
              <CategoryInputs
                key={index}
                value={user}
                type={'indian'}
                onChange={e => onChange(index, e)}
              />
             {/* <td className='border border-slate-300 text-center'>
                <button type="button" onClick={() => removeFormFields(index)} disabled={indian.length <= 1} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
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
