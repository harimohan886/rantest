import React from 'react'
import ContentImage from './ContentImage';
import PackagePricing from './PackagePricing'


export default function RoomType({ packages, type }) {
    return (
        <>
            <ul className="nav nav-tabs" id="roomTab" role="tablist">


                {packages?.categories?.map((list, lindex) => (
                    <li key={lindex} className="nav-item">
                        <a className={`nav-link ${lindex === 0 ? 'active' : ''}`} data-toggle="tab" href={`#tab-cat${lindex}`} role="tab" aria-controls="tab-standard" aria-selected="true">{list.category}</a>
                    </li>

                ))}
            </ul>
            <div className="tab-content" id="roomTabContent">

                {packages?.categories?.map((list, lindex) => (
                    <>
                        <div key={lindex} className={`tab-pane ${lindex === 0 ? 'active' : ''}`} id={`tab-cat${lindex}`}>
                            <ContentImage hotels={list.hotels} counterkey={lindex} />

                            {type === 'indian' ? <PackagePricing optionData={list.indianOptions} /> : <PackagePricing optionData={list.foreignerOptions} />}

                        </div>

                    </>


                ))}
            </div>
        </>
    )
}
