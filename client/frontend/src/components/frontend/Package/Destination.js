import React from 'react'

export default function Destination() {
  return (
    <div className='destination'>
        <h5>Near By Destinations</h5>
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://jimcorbett.in/image/package/bhimtal.jpg" alt="Los Angeles" className='img-fluid' />
                    <div class="carousel-caption">
                        <h5>Nainital</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://jimcorbett.in/image/package/kausani.jpg" alt="Chicago" className='img-fluid'/>
                    <div class="carousel-caption">
                        <h5>Kausani</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://jimcorbett.in/image/package/ranikhet.jpg" alt="New York" className='img-fluid'/>
                    <div class="carousel-caption">
                        <h5>Ranikhet</h5>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
  )
}
