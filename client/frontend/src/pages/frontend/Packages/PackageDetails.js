import React from 'react'
import PackageBanner from '../../../components/frontend/Package/PackageBanner'
import PackageItems from '../../../components/frontend/Package/PackageItems'
import PackageIternary from '../../../components/frontend/Package/PackageIternary'
import PackagePaymentPolicy from '../../../components/frontend/Package/PackagePaymentPolicy'
import PackagePolicy from '../../../components/frontend/Package/PackagePolicy'
import PackageTermsConditions from '../../../components/frontend/Package/PackageTermsConditions'
import TourDetails from '../../../components/frontend/Package/TourDetails'

export default function PackageDetails() {
  return (
    <div className='packageDetails'>
        <PackageBanner/>
        <TourDetails/>
        <PackageItems/>
        <PackageIternary/>
        <PackageTermsConditions/>
        <PackagePolicy/>
        <PackagePaymentPolicy/>
    </div>
  )
}
