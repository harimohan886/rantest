import React from 'react'

export default function PackageIternary() {
  return (
    <div className='container secctionFrame'>
        <div className='package-Itinerary'>
            <h5>Tour Itinerary</h5>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading0">
                    <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0" className=" "> Day 1: Transportation to the Wildlife Resort upon Arrival in Ramnagar </a>
                    </h4>
                    </div>
                    <div id="collapse0" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading0">
                    <div className="panel-body">
                        <p>Our tour services will begin when you arrive at the resort you've booked with us. Have a drink on the house when you get here, finish the check-in process, and take it easy for a bit before eating lunch. You can explore the Dhangarhi museum or the Garjia Devi Temple after lunch. Come return to the resort in the evening and take advantage of the resort's recreational offerings. Tea and cookies in the evening. Stay the night at the wildlife lodge after a well-timed meal.</p>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading1">
                    <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1" className=" collapsed"> Day 2: Checkout after a day of sightseeing and a jungle safari. </a>
                    </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse " role="tabpanel" aria-labelledby="heading1">
                    <div className="panel-body">
                        <p>A warm cup of tea and a knock on the door wake you up before your morning safari drive. Prepare for the open-air jeep excursion that has been reserved for you. We venture into the heart of Corbett National Park, where we hope to see some of the park's incredible wildlife, such as the Royal Bengal tigers, elephants, and a wide variety of birds. You'll spend three hours exploring a beautiful wilderness region and perhaps seeing some amazing animals on your wildlife safari. Return to the resort for breakfast when your safari is over. Guests are kindly asked to promptly vacate their rooms at the resort following breakfast to catch their connecting transportation.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
