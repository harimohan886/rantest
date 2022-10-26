import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import swal from 'sweetalert';

export default function PackageItineraries({ packageId, itineraries }) {
  const [selectedItineraries, setSelectedItineraries] = useState([]);
  const [formatItineraries, setFormatItineraries] = useState([]);


  const getItinerariesForPackage = async (packageId) => {

    try {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/package/packages/${packageId}/iternaries`, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + localStorage.getItem('accessToken')
        },
      });


      if (result.data.data.itineraries.length) {

        const fa = result.data.data.itineraries.map(item => ({ value: item._id, label: item.title }));

        setSelectedItineraries(fa);
      }


    } catch (err) {
      swal(err, "error");

    }

  }

  const getFormatItineraries = async (itineraries) => {

    const fa = await itineraries.map((item) => {
      return ({ value: item._id, label: item.title });

    });

    setFormatItineraries(fa);
  }


  useEffect(() => {

    getItinerariesForPackage(packageId);
    getFormatItineraries(itineraries);


  }, [packageId, itineraries]);

  const updateStatus = () => {
    let featrs = [];

    selectedItineraries.forEach(item => {
      featrs.push({ inclusion: item.label });

    });

    const data = {
      itineraries: featrs,

    }


    axios.patch(`${process.env.REACT_APP_BASE_URL}/package/packages/${packageId}/iternaries`, data, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + localStorage.getItem('accessToken')
      },
    }).then(result => {

      if (result.data.success === true) {
        swal(result.data.message, "success");
        setTimeout(() => {
          window.location.href = `/admin/package-to-itineraries/${packageId}`
        }, 1000);
      } else {
        swal("Error in Api", "error");
      }
    })

  }




  return (
    <>
      <div>Package itineraries</div>
      <div className='flex'>
        <div>
          <Select
            value={selectedItineraries}
            onChange={setSelectedItineraries}
            options={formatItineraries}
            isMulti
            className='setReactSelect'
          />
        </div>
        <div><button type="button" onClick={updateStatus} className="text-white float-right bg-danger font-medium rounded px-5 py-2.5 text-center">Update</button></div>
      </div>
    </>
  )
}