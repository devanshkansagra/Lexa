import React from 'react'
import { Link } from 'react-router-dom'

function Products(props) {
  return (
    <>
      <div className="container">
        <div className="container d-flex justify-content-between mt-5 flex-wrap">
          <div className="productTitle">
            <h1>Our Products</h1>
          </div>
          <div className="product-breadcrumb-link">
            <nav className="dev-nav-breadcrumb" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" className='breadcrumb-nav-link'>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Our Products</li>
              </ol>
            </nav>
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

export default Products