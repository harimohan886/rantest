import React from 'react'
import PackageBanner from '../../../components/frontend/Package/PackageBanner'
import PackageItems from '../../../components/frontend/Package/PackageItems'
import TourDetails from '../../../components/frontend/Package/TourDetails'

export default function PackageDetails() {
  return (
    <div className='packageDetails'>
        <PackageBanner/>
        <TourDetails/>
        <PackageItems/>
    </div>
  )
}
