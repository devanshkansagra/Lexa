import React from 'react'
import img1 from '../images/slide01.jpg'

function Carousel(props) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 dev-img" alt="Slide 1"/>
                </div>
                <div className="carousel-item">
                    <img src={img1} className="d-block w-100 dev-img" alt="Slide 2"/>
                </div>
                <div className="carousel-item">
                    <img src={img1} className="d-block w-100 dev-img" alt="Slide 3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel