import React from 'react'
import ContentImage from './ContentImage'

export default function RoomType({ packages }) {
    return (
        <>
            <ul className="nav nav-tabs" id="roomTab" role="tablist">


                {packages?.categories?.map((list, lindex) => (
                    <li key={lindex} className="nav-item">
                        <a className={`nav-link ${lindex === 0 ? 'active' : ''}`} data-toggle="tab" href={`#tab-cat${lindex}`} role="tab" aria-controls="tab-standard" aria-selected="true">{list.category}</a>
                    </li>

                ))}



                {/* <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-deluxe" role="tab" aria-controls="tab-deluxe" aria-selected="false">Deluxe</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-premium" role="tab" aria-controls="tab-premium" aria-selected="false">Premium</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab-luxury" role="tab" aria-controls="tab-luxury" aria-selected="false">Luxury</a>
                </li> */}
            </ul>
            <div className="tab-content" id="roomTabContent">

                {packages?.categories?.map((list, lindex) => (
                    <div key={lindex} className={`tab-pane ${lindex === 0 ? 'active' : ''}`} id={`tab-cat${lindex}`}>
                        <ContentImage hotels={list.hotels} counterkey={lindex} />
                    </div>

                ))}


                {/* <div className="tab-pane fade" id='tab-deluxe'>
                    <ContentImage />
                </div>
                <div className="tab-pane fade" id='tab-premium'>
                    <ContentImage />
                </div>
                <div className="tab-pane fade" id='tab-luxury'>
                    <ContentImage />
                </div> */}
            </div>
        </>
    )
}
