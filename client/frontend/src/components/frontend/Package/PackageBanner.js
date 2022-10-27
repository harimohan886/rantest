import React from 'react'

export default function PackageBanner({ packages }) {
  const PSURL = process.env.REACT_APP_PACKAGE_SERVER_URL;


  return (
    <div className='mb-8' style={{ backgroundImage: `url('${PSURL}/${packages?.package?.image}')`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
      <div className='container'>
        <div className='bannerCaption'>
          <h1>{packages?.package?.name}</h1>
          <p>Special Discount | Luxury Hotels| Safari and Night Stay</p>
        </div>
      </div>
    </div>
  )
}
