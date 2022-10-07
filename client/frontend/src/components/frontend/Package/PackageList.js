import React from 'react'
import { Link } from 'react-router-dom'

export default function PackageList() {
  return (
    <div className="row package-margin">
        <div className="col-sm-4 col-xs-12 p-0">
            <div className="package-image">
            <div className="image-gallery">
                <img className="img-responsive" src="../image/package-image.jpeg" alt='Hotel Iris' />
            </div>
            </div>
        </div>
        <div className="col-sm-8 col-xs-12">
            <div className="packages-listing">
            <h2>Ranthambore Fun Tour With 1 Jeep Safari </h2>
            <div className="rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>
            <p>To experience the wonder and thrill of a natural wildlife tour, plan a trip to Corbett National Park. Corbett National...</p>
            <div className="package-detail">
                <ul className="list-unstyled">
                <li>
                    <span> 1 Night / 2 Days </span>
                </li>
                <li>
                    <span> Time Breakfast, and Dinner </span>
                </li>
                <li>
                    <span> Welcome drink </span>
                </li>
                </ul>
            </div>
            </div>
            <div className="price-from">
            <h6>Price from</h6>
            <div className="price">
                <i className="fa fa-inr"></i>
                <b>3500</b>
                <span>Per night</span>
            </div>
            <div className="findButton">
                <Link to="/package-details" className="btn btn-danger">View More</Link>
            </div>
            </div>
        </div>
        </div>
  )
}
