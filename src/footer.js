// import './assets/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import img12 from './img/logo_tran.png'
import imgn from './img/contact-map.png'
function Footer(){

  return(
    <div className="container-fluid" >
  <footer className="p-3">
    <div className="row" style={{backgroundImage:`url(${imgn})` , width:'100%'}}>
      <div className="col-6 col-md-6 mb-3 mt-3">
        <p >© 2023 Company, Inc. All rights reserved.</p>
      </div>

     

      <div className="col-md-5 offset-md-1 mb-3 mt-3" >
        <form>
         <img src={img12} style={{width:'250px',paddingBottom:'5px'}}/>
          <div className=" w-100 ">
           <p>NO.17/139,Elanthavilai Junction,<br/>Annainager,Pallam Post,<br/>Kanyakumari District,<br/>Tamilnadu,india.</p>
		   
           
          </div>
        </form>
      </div>
    </div>


  </footer>
</div>

  );}
  export default Footer;


