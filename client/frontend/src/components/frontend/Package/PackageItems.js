import React from 'react'
import PackageRooms from './PackageRooms'

export default function PackageItems() {
  return (
    <>
    {/* Targeted headings */}
    <div className="cont-detail">
        <div className="container sectionFrame">
            <div className="row">
            <div className="col-sm-12 col-xs-12">
                <div className="tabs-nav2">
                <ul className="list-inline">
                    <li className='list-inline-item'>
                    <a href="#Overview" className="">Tour Itinerary</a>
                    </li>
                    <li className='list-inline-item'>
                    <a href="#terms-conditions" className="">Terms &amp; conditions</a>
                    </li>
                    <li className='list-inline-item'>
                    <a href="#cancellation" className="">Cancellation Policy</a>
                    </li>
                    <li className='list-inline-item'>
                    <a href="#payment" className="">Payment Policy </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>

    {/* Inclusion / Exclusion */}
    <div className="inclusions-Exc">
        <div className="container sectionFrame">
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <div className="inclus">
                        <h5>Inclusions </h5>
                        <ul className="list-unstyled">
                            <li>
                                <span>
                                <i className='fa fa-check'></i> 2 night accommodation on twin/triple sharing basis. </span>
                            </li>
                            <li>
                                <span>
                                <i className='fa fa-check'></i> Breakfast &amp; dinner at resort </span>
                            </li>
                            <li>
                                <span>
                                <i className='fa fa-check'></i> 1 time jeep safari inside the Corbett Tiger Reserve </span>
                            </li>
                            <li>
                                <span>
                                <i className='fa fa-check'></i> Welcome drink on arrival </span>
                            </li>
                            <li>
                                <span>
                                <i className='fa fa-check'></i> Complientary use of swimming pool </span>
                            </li>
                            <li>
                                <span>
                                <i className='fa fa-check'></i> Complimentary use of recreational activities in resort premises. </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="inclus">
                        <h5>Exclusions</h5>
                        <ul className="list-unstyled">
                        <li>
                            <span>
                            <i className='fa fa-check'></i> Any airfare, train fare, transport &amp; sightseeing. </span>
                        </li>
                        <li>
                            <span>
                            <i className='fa fa-check'></i> Personal nature items like softdrink, hard drink, laundry, camera fee, tips etc. </span>
                        </li>
                        <li>
                            <span>
                            <i className='fa fa-check'></i> Any medical or emergency charge. </span>
                        </li>
                        <li>
                            <span>
                            <i className='fa fa-check'></i> GST &amp; PG charges </span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Package Rooms */}
    <PackageRooms/>
    </>

  )
}
