import React from 'react'

export default function NewTiming() {
  return (
    <div className='container'>
        <div className='new-timing'>
            <h3 className='common-title'>Safari Zone & Timings</h3>
            <div className='row'>
            <div className='col-sm-6'>
                    <div className='leafBg'>
                        <ul className="list-group">
                            <li>
                                <i className='fa fa-angle-right'></i> Zone will be allowed as per availability
                            </li>
                            <li>
                                <i className='fa fa-angle-right'></i> Visitor can select either Zone 1 to 7 or 8 to 10
                            </li>
                            <li>
                                <i className='fa fa-angle-right'></i> There are 10 Safari Zone in Ranthambore National park
                            </li>
                            <li>
                                <i className='fa fa-angle-right'></i> If you select Safari for 1 to 7 Zone that means your safari will be conducted in any one Zone, same as for Zone 8 to 10
                            </li>
                            <li>
                                <i className='fa fa-angle-right'></i> In Case of current booking any of the zone between 1 and 10 can be alloted
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='tBox'>
                        <h5>Oct 1 to Oct 31 <span>06:30 AM - 10:00 AM & 02:30 PM - 06:00 PM</span></h5>
                        <h5>Nov 1 to Jan 31 <span>07:00 AM - 10:30 AM & 02:00 PM - 05:30 PM</span></h5>
                        <h5>Feb 1 to Mar 31 <span>06:30 AM - 10:00 AM & 02:30 PM - 06:00 PM</span></h5>
                        <h5>Apr 1 to May 15 <span>06:00 AM - 09:30 AM & 03:00 PM - 06:30 PM</span></h5>
                        <h5>May 16 to June 30 <span>06:00 AM - 09:30 AM & 03:30 PM - 07:00 PM</span></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
