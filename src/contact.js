import React, { useState } from 'react';
import HeaderPage from './headermenu';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import imgcon from './img/contact-map.png';
import Axios from "axios";
function ContactPage() {
  const containerStyle = {
    height: '60px',
    display: 'flex',
  };
  const forimg = {
    backgroundImage: `url(${imgcon})`,
  };
  const url = "http://localhost/reactbackend/insert.php";
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
  });
 // State for fetched data
 const [isSubmitted, setIsSubmitted] = useState(false);
 function submit(e) {
  e.preventDefault();
  Axios.post(url, formData)
    .then((response) => {
      console.log("Response:", response.data);
      setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
      });
      setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
    })
    .catch((error) => {
      // Handle errors (e.g., show an error message)
      console.error("Error:", error);
    });
}
  return (
    <div>
      <HeaderPage />
      <div>
        <div className="container col-xl-10 col-xxl-8 px-4 py-1">
          <div className="row align-items-center g-lg-5 ">
          {isSubmitted ? (
            <div className="alert alert-success" role="alert">
              Form submitted successfully!
            </div>
          ) : null}
            <div className="col-lg-7 text-center text-lg-start" style={forimg}>
              <h2 className="display-4 fw-bold lh-1 text-body-emphasis ">Contact Us</h2>
              <div className="list-group">
                <div href="#" className="list-group-item list-group-item-action d-flex gap-1 py-3" aria-current="true">
                  <i className="fas fa-map-marker-alt "></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">
                        <p>NO.17/139,Elanthavilai Junction,<br />Annainager,Pallam Post,<br />Kanyakumari District,<br />Tamilnadu,india.</p>
                      </h6>
                    </div>
                  </div>
                </div>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <i className="fas fa-phone-volume"></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">
                        <p>+91 83449 99960 | 62 | 63 | 64 | 65 |</p>
                        <p>+91 4652 287477</p>
                        <p>+91 4652 290476</p>
                      </h6>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <i className="fas fa-envelope-open-text"></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0"><p>hrldrilling@gmail.com</p></h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form
                className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
                onSubmit={submit}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                  name="number"
                  placeholder="Mobile"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })} required
                />
                  <label for="floatingInput">Mobile Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                     type="email"
                     className="form-control"
                     id="email"
                     name="email"
                     placeholder="Email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                   />
                  <label for="floatingInput">Email Address</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                     className="form-control"
                     id="message"
                     name="message"
                     rows="5"
                     placeholder="Message"
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })} required
                   ></textarea>
                  <label for="floatingPassword">Message</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>
                <hr className="my-4" />
                <small className="text-body-secondary">We're here to answer your questions, discuss your needs, and explore how we can collaborate to drive success in the Oil & Gas Management and Manpower Solutions domains. Contact us.</small>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ContactPage;