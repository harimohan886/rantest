import React from 'react'
import ContentImage from './ContentImage'

export default function RoomType() {
  return (
    <>
    <ul className="nav nav-tabs" id="roomTab" role="tablist">
        <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#tab-standard" role="tab" aria-controls="tab-standard" aria-selected="true">Standard</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-deluxe" role="tab" aria-controls="tab-deluxe" aria-selected="false">Deluxe</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-premium" role="tab" aria-controls="tab-premium" aria-selected="false">Premium</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-luxury" role="tab" aria-controls="tab-luxury" aria-selected="false">Luxury</a>
        </li>
    </ul>
    <div className="tab-content" id="roomTabContent">
        <div className="tab-pane active" id='tab-standard'>
            <ContentImage/>
        </div>
        <div className="tab-pane fade" id='tab-deluxe'>
            <ContentImage/>
        </div>
        <div className="tab-pane fade" id='tab-premium'>
            <ContentImage/>
        </div>
        <div className="tab-pane fade" id='tab-luxury'>
            <ContentImage/>
        </div>
    </div>
    </>
  )
}
