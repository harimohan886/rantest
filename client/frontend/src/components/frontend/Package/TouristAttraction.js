import React from 'react'

export default function TouristAttraction() {
  return (
    <div className='destination'>
        <h5>Near By Attractions</h5>
        <div id="attraction" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#attraction" data-slide-to="0" className="active"></li>
                <li data-target="#attraction" data-slide-to="1"></li>
                <li data-target="#attraction" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://jimcorbett.in/image/package/Corbett-Museum.jpg" alt="Los Angeles" className='img-fluid' />
                    <div class="carousel-caption">
                        <h5>Corbett Museum</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://jimcorbett.in/image/package/Kori-River.jpg" alt="Chicago" className='img-fluid'/>
                    <div class="carousel-caption">
                        <h5>Kori River</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://jimcorbett.in/image/package/Garjia-Devi-Temple.jpg" alt="New York" className='img-fluid'/>
                    <div class="carousel-caption">
                        <h5>Garjia Devi Temple</h5>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#attraction" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#attraction" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
  )
}