import React from 'react'
import Destination from '../../../components/frontend/Package/Destination'
import PackageBanner from '../../../components/frontend/Package/PackageBanner'
import PackageContent from '../../../components/frontend/Package/PackageContent'
import PackageList from '../../../components/frontend/Package/PackageList'
import TouristAttraction from '../../../components/frontend/Package/TouristAttraction'

export default function FrontendPackages() {
  return (
    <div className='package-listing-page'>
      <PackageBanner/>
      <PackageContent/>
      <div className='packages-list'>
        <div className='container sectionFrame'>
          <div className='row'>
            <div className='col-sm-9 width70'>
              <PackageList/>
            </div>
            <div className='col-sm-3 width30'>
              <Destination/>
              <br/>
              <TouristAttraction/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
