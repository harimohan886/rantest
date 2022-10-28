import React from 'react'
import RoomType from './RoomType'

export default function PackageRooms({ packages }) {
    return (
        <div className="packTab">
            <div className='container sectionFrame'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tab-indian" role="tab" aria-controls="tab-indian" aria-selected="true">Indian</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-foreigner" role="tab" aria-controls="tab-foreigner" aria-selected="false">Foreigner</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">


                    <div className="tab-pane active" id='tab-indian'>
                        {packages && <RoomType packages={packages} type="indian" />}

                    </div>
                    <div className="tab-pane fade" id='tab-foreigner'>
                        {packages && <RoomType packages={packages} type="foreigner" />}
                    </div>
                </div>
            </div>
        </div>
    )
}
