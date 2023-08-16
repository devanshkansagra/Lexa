import React from 'react'
import { Link } from 'react-router-dom'
function Contact(orops) {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="productTitle"><h1>Contact Us</h1></div>
          <div className="product-breadcrumb-link">
            <nav className="dev-nav-breadcrumb" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" className='breadcrumb-nav-link'>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
        <hr />
        <div className="contact-container">
          <h3 className='mt-5'>Our Location on map</h3>
          <div className="map-container">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.8908429398407!2d70.78618640842554!3d22.16822676248837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958352c46977ed1%3A0xd48f02100fce8aa7!2sTechnolink%20plastic!5e0!3m2!1sen!2sin!4v1692209666625!5m2!1sen!2sin" className='map-frame'></iframe>
            </div>
          </div>
          <div className="dev-form-container">
            <h3 className='mt-5'>Send us an inquiry</h3>
            <form className="row g-3 mt-3">
              <div className="col-md-4">
                <label htmlFor="txtname" className="form-label">Your Name*</label>
                <input type="text" className="form-control" id="txtname" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="txtcname" className="form-label">Company Name*</label>
                <input type="text" className="form-control" id="txtcname" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="txtphone" className="form-label">Contact number*</label>
                <input type="number" className="form-control" id="txtphone" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="txtemail" className="form-label">Email*</label>
                <input type="email" className="form-control" id="txtemail" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="prodReq" className="form-label">Required Products*</label>
                <input type="text" className="form-control" id="prodReq" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="prodAmt" className="form-label">Required Ammount*</label>
                <input type="number" className="form-control" id="prodAmt" required />
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Send Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact