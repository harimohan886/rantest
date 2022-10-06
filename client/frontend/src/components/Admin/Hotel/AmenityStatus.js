import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export default function AmenityStatus({ amenities }) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const getAmenities = [];

  const getSelectedData = async () => {

    amenities.map((item) => {

      if (item.status) {
        selectedAmenities.push({
          value: item.amenity,
          label: item.amenity,
        });
      }

    });
  }

  const getAllAmenities = async () => {

    await amenities.map((item) => {

      getAmenities.push({
        value: item.amenity,
        label: item.amenity,
      });

    });
  }


  const selectAmenities = () => {

  };


  useEffect(() => {

    getAllAmenities();
    if (amenities.length) {
      getSelectedData();

    }

    console.log("call func ", amenities)

  });




  return (
    <>
      <div>AmenityStatus</div>
      <div className='flex'>
        <div>
          <Select
            defaultValue={selectedAmenities}
            onChange={selectAmenities}
            options={getAmenities}
            isMulti
            className='setReactSelect'
          />
        </div>
        <div><button type="submit" className="text-white float-right bg-danger font-medium rounded px-5 py-2.5 text-center">Update</button></div>
      </div>
    </>
  )
}