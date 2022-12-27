import React from 'react'

export default function Adventures() {
  return (
    <div className='adventures'>
        <div className='container'>
            <h2 className='common-title'>Tourist Attractions in Ranthambore</h2>
            <div className='row'>
                <div className='col-sm-2 col-6'>
                    <img src='../image/tiger-safari.jpeg' className='img-fluid' alt='Jeep Safari'/>
                    <h5>Jeep Safari</h5>
                </div>
                <div className='col-sm-2 col-6'>
                    <img src='../image/canter.jpeg' className='img-fluid' alt='Canter Safari'/>
                    <h5>Canter Safari</h5>
                </div>
                <div className='col-sm-2 col-6'>
                    <img src='../image/chambal-boat.jpeg' className='img-fluid' alt='Chambal Boat Safari'/>
                    <h5>Chambal Boat Safari</h5>
                </div>
                <div className='col-sm-2 col-6'>
                    <img src='../image/wildlife.jpeg' className='img-fluid' alt='Wildlife Adventure'/>
                    <h5>Wildlife Adventure</h5>
                </div>
                <div className='col-sm-2 col-6'>
                    <img src='../image/sight.jpeg' className='img-fluid' alt='Sight Seeing'/>
                    <h5>Sight Seeing</h5>
                </div>
                <div className='col-sm-2 col-6'>
                    <img src='../image/birds.jpeg' className='img-fluid' alt='Beautiful Birds'/>
                    <h5>Beautiful Birds</h5>
                </div>
            </div>
            {/* <div className='row'>
                <div className='col-3'>
                    <div className='advBox'>
                        <img src='../../image/tiger-safari.jpeg' className='img-fluid' alt='Jeep Safari'/>
                        <h5>Jeep Safari</h5>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}
