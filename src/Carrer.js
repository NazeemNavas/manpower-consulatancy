import React from 'react';
import HeaderPage from './headermenu';
import Footer from './footer';
import ContactInfo from './ContactInfo';
// import './assets/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';  

function Carrer() {
  return (
    <div>
      <HeaderPage/>

  <ContactInfo/>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
<div className="bd-example m-0 border-0">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Advance Your Career with HRLM Manpower Training Consultancy LLP - Join Our Team!</h4>
          <p>Are you ready to take your career to new heights in the dynamic fields of Oil & Gas Management and Manpower Solutions? Look no further than HRLM Manpower Training Consultancy LLP. We are a leading company dedicated to excellence, innovation, and professional growth. Join us in shaping the future of the industry while unlocking your full potential.</p>
          <hr/>
          <p className="mb-0">HRLM Manpower Training Consultancy LLP is more than just a workplace – it's a platform for growth, innovation, and impact. Join us in making a difference in the Oil & Gas industry and contributing to a brighter energy future. Your career journey starts here.</p>
        </div>
        </div>

</div>
</div>
      <Footer/>
    </div>
  )
}

export default Carrer;
