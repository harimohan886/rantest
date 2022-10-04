import React, { useState } from 'react';
import Select from 'react-select';

const getAmenities = [
  { value: 'Wifi', label: 'Wifi' },
  { value: 'Swimming Pool', label: 'Swimming Pool' },
  { value: 'In-House Restaurant', label: 'In-House Restaurant' },
  { value: 'Hair Dryer', label: 'Hair Dryer' },
];

export default function AmenityStatus() {
  const [setSelectedAmenities] = useState(null);
  return (
    <>
    <div>AmenityStatus</div>
    <div className='flex'>
      <div>
      <Select
      defaultValue={[getAmenities[2], getAmenities[3]]}
      onChange={setSelectedAmenities}
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