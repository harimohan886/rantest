import React from 'react'

export default function ContentImage() {
    return (
        <div id="romType" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#romType" data-slide-to="0" className="active"></li>
                <li data-target="#romType" data-slide-to="1"></li>
                <li data-target="#romType" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h5>Hotel Maya Resort</h5>
                    <img src="../image/inside-room.jpeg" alt="Los Angeles" className='img-fluid' />
                </div>
                <div className="carousel-item">
                    <h5>City Palace</h5>
                    <img src="../image/inside-room.jpeg" alt="Chicago" className='img-fluid' />
                </div>
                <div className="carousel-item">
                    <h5>Hotel Trident</h5>
                    <img src="../image/inside-room.jpeg" alt="New York" className='img-fluid' />
                </div>
            </div>
            <a className="carousel-control-prev" href="#romType" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#romType" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}
