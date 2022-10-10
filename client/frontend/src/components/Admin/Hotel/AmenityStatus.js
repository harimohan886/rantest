import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export default function AmenityStatus({ amenities }) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [formatAmenities, setFormatAmenities] = useState([]);

  const getSelectedData = (amenities) => {

    amenities.map((item) => {

      if (item.status === 1) {
        setSelectedAmenities(selectedAmenities => selectedAmenities.concat({ value: item._id, label: item.amenity }));

      }

    });
  }


  const getAllAmenities = async (amenities) => {

    const fa = await amenities.map((item) => {
      return ({ value: item._id, label: item.amenity });

    });

    setFormatAmenities(fa);
  }


  useEffect(() => {

    getAllAmenities(amenities);
    if (amenities.length) {
      getSelectedData(amenities);

    }

  }, [amenities]);

  const updateStatus = () => {
    console.log(selectedAmenities);
  }




  return (
    <>
      <div>AmenityStatus</div>
      <div className='flex'>
        <div>
          <Select
            value={selectedAmenities}
            onChange={setSelectedAmenities}
            options={formatAmenities}
            isMulti
            className='setReactSelect'
          />
        </div>
        <div><button type="button" onClick={updateStatus} className="text-white float-right bg-danger font-medium rounded px-5 py-2.5 text-center">Update</button></div>
      </div>
    </>
  )
}