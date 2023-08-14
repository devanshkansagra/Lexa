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

        </>
    )
}

export default Home