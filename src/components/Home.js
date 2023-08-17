import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <>
            <Carousel />
            <div className="container">
                <div className="container d-flex justify-content-around mt-5">
                    <div className="productTitle">
                        Our Latest Products
                    </div>
                    <div className="product-link">
                        <Link to="/products" className="product-link">View All Products &nbsp;<i className="fa-solid fa-arrow-right dev-arrow"></i></Link>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container mt-5">
                <div className="row flex-wrap">
                    <div className="col-sm-4">
                        <div className="card mx-2">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card mx-2">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card mx-2">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex-wrap">
                    <div className="col-sm-4">
                        <div className="card mx-2">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card mx-2">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card mx-2">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-container mt-5 pt-3">
                <div className="container d-flex justify-content-between flex-wrap">
                    <div className="address-container">
                        <h3>Our Address</h3>
                        <p className="address"><i className="fa-solid fa-location-dot fa-lg"></i>&nbsp;&nbsp;Technolink plastic, Survey No 252, Captain Gate, Opp. Pitrukrupa Hotel,Shapar, Gujarat 360024</p>
                    </div>
                    <div className="contact-cont">
                        <h3>Customer Care</h3>
                        <p className="c-care"><i className="fa-solid fa-phone fa-lg"></i>&nbsp;&nbsp;+91 8460603033</p>
                    </div>
                    <div className="links-container">
                        <h3>Follow Us On</h3>
                        <div className="icons-container">
                            <div className="container d-flex justify-content-around">
                                <a href="https://m.facebook.com/Technolink.Plastic/"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                                <a href="https://www.instagram.com/technolink.plastic/"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home