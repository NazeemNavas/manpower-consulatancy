import React, { useEffect } from 'react';
import HeaderPage from './headermenu';
import Footer from './footer';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import ContactInfo from './ContactInfo';
import IndividualIntervalsExample from './IndividualIntervalsExample';


function HomePage() {



  useEffect(() => {
    // Get a reference to the specific div element
    const specificDiv = document.getElementById('noiod');

    // Disable scrolling for the specific div
    specificDiv.style.overflow = 'hidden';

    // Enable scrolling for the specific div when the component unmounts
    return () => {
      specificDiv.style.overflow = 'auto'; // Set it back to 'auto' to enable scrolling
    };
  }, []);
// var x=React.createElement("b",{id:"test",style:{color:"red"}},"some content");
  return (
    <div >
    
  <HeaderPage />
  <div id='noiod'><ContactInfo/></div>
  
 
        
          <center><br/>
          {/* <p> <img src={wall1} style={img1} alt='no img' /> </p> */}
          <IndividualIntervalsExample/><br/>
          <div class="row d-flex align-items-center p-3 m-0 text-emphasis bg-primary-subtle rounded shadow-sm">
   
    <div class="lh-1 col-lg-8 p-2">
      <h1 class="h6 mb-0 text-emphasis lh-1">WELCOME TO HRLM MANPOWER TRAINING CONSULTANCY LLP</h1>
      <small>OIL & GYAS MANAGEMENT & MANPOWER SOLUTION</small>
    </div>
	<div class="col-lg-4 d-flex flex-column flex-sm-row  gap-2">
  <input id="newsletter1" type="text" className ="form-control" ></input>
  
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
  </div>

  <div className="py-5 text-center">
      <h2>Our Expertise</h2>
      <p className="accordion-body">Oil & Gas Management: Our in-depth understanding of the oil and gas sector allows us to offer comprehensive management solutions. From exploration and drilling to production and distribution, we provide strategic guidance, operational support, and project management services to optimize processes and drive success in this dynamic industry.</p>
	  
    </div>
 </center>
    <div className="bd-example-snippet bd-code-snippet">
      <div className="bd-example m-0 border-0">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Manpower Solutions
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
              <div className="accordion-body">
               We recognize that skilled and dedicated manpower is the backbone of any successful venture. Our manpower solutions are tailored to match the specific requirements of our clients, helping them build capable teams that deliver results. Whether you need personnel for onshore operations, offshore platforms, technical roles, or managerial positions, we have the expertise to source, train, and manage the right talent for your organization..
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               Why Choose Us
              </button>
            </h4>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body">
                <ul className='mr-auto' >
                
				<li><code>Industry Insights:</code> With years of experience in the Oil & Gas sector, we bring valuable insights and knowledge that empower our clients to make informed decisions and stay ahead in a competitive landscape.</li>
				<li><code>Customized Approach:</code> We understand that every business is unique. Our solutions are customized to address your individual challenges, ensuring that you receive the most relevant and effective services.</li>
				<li><code>Quality and Compliance:</code> Quality and safety are paramount in the Oil & Gas industry. We adhere to the highest standards and regulations to ensure that all operations are carried out with a focus on safety, compliance, and environmental responsibility.</li>
				<li><code>Skilled Workforce: </code> Our rigorous recruitment and training processes ensure that we deliver a skilled and competent workforce that aligns with your project requirements and company culture</li>
				<li><code>Continuous Improvement:</code> We are committed to continuous improvement and innovation. As the industry evolves, we adapt our strategies, technologies, and methodologies to deliver results that exceed expectations.</li>
				</ul>
              </div>
            </div>
          </div>
      
        </div>
        </div>
		</div>

<center>
    <div class="row row-cols-1 row-cols-md-4 mb-3 text-center container-fluid mt-5">
   
  <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-purple">
          <div className="card-header py-3  text-emphasis bg-primary-subtle border-purple">
            <h4 className="my-0 fw-normal">Our Prime vision</h4>
          </div>
          <div className="card-body">
              <h1 className="card-title pricing-card-title"><svg xmlns="http://www.w3.org/2000/svg" width="60"  fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16">
  <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/>
</svg></h1>
            <p>HRLM intends to be the premier recruitment consultancy,...</p>
            <button type="button" class="w-80 btn btn-lg btn-primary">Read More</button>
          </div>
        </div>
      </div>
	    <div className="col">
       <div className="card mb-4 rounded-3 shadow-sm border-purple">
          <div className="card-header py-3   text-emphasis bg-primary-subtle border-purple">
            <h4 className="my-0 fw-normal">Confidentiality</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title"><svg xmlns="http://www.w3.org/2000/svg" width="60"  fill="currentColor" class="bi bi-file-earmark-check-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg></h1>
            <p>We treat the information that has been entrusted to us with the utmost...</p>
            <button type="button" className="w-80 btn btn-lg btn-primary">Read More</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-purple">
          <div className="card-header py-3  text-emphasis bg-primary-subtle border-purple">
            <h4 className="my-0 fw-normal">Partnership</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title"><svg xmlns="http://www.w3.org/2000/svg" width="60"  fill="currentColor" class="bi bi-globe-asia-australia" viewBox="0 0 16 16">
  <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"/>
</svg></h1>
           <p>We serve as an extension of our client's office, collaborating closely...</p>
            <button type="button" className="w-80 btn btn-lg btn-primary">Read More</button>
          </div>
        </div>
      </div>
	     <div className="col">
       <div className="card mb-4 rounded-3 shadow-sm border-purple">
          <div className="card-header py-3   text-emphasis bg-primary-subtle border-purple">
            <h4 className="my-0 fw-normal">Integrity</h4>
          </div>
          <div className="card-body">
             <h1 className="card-title pricing-card-title"><svg xmlns="http://www.w3.org/2000/svg" width="60" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg></h1>
            <p>We honestly represent our clients to candidates and our candidates.... </p>
            <button type="button" className="w-80 btn btn-lg btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
    </center>

         
        
        

    <Footer/>
    </div>
  );
}

export default HomePage;