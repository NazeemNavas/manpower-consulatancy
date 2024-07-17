import React from 'react';
import { Link } from 'react-router-dom';
import HeaderPage from './headermenu';
import Footer from './footer';  
import ContactInfo from './ContactInfo';
// import './assets/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  
// import './assets/dist/js/bootstrap.bundle.min.js'

function AboutPage() {
  const containerStyle = {
    height: '60px',
    display: 'flex'
  };


  const navLinksStyle = {
    paddingLeft: '60%',
    float: 'left'
  };

  const linkStyle = {
    float: 'left',
    padding: '10px',
    textDecoration: 'none'
  };

  const imageContainerStyle = {
    float: 'left',
    padding: '10px'
  };




  return (
    <div>
     
<HeaderPage/>

  <ContactInfo/>
      <div>
        <div style={imageContainerStyle}>
       {/* <img src={myimages} alt="logo"  width={"150px"}/> */}
        </div>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Who We Are</h1>
        <p className="col-lg-10 fs-4">At HRLM Manpower Training Consultancy LLP, we are dedicated to providing exceptional services in the fields of Oil & Gas Management and Manpower Solutions. With a strong commitment to excellence and a team of experienced professionals, we aim to cater to the diverse needs of the industry while ensuring efficiency, reliability, and innovation.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <h2>Get in Touch</h2>
	   <p>We invite you to connect with us and explore how HRLM Manpower Training Consultancy LLP can support your Oil & Gas endeavors. Let's embark on a journey of growth, efficiency, and excellence together.</p>
	   <p>Join us in shaping the future of Oil & Gas Management and Manpower Solutions!</p>
        </form>
      </div>
    </div>
  </div>
      </div>

    
  <Footer />
    </div>
  );
}

export default AboutPage;