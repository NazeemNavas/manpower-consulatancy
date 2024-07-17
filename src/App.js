import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import AboutPage from './about';
import ContactPage from './contact';
import Carrer from './Carrer';
// import Login from './Login';
import About from './Aboutlog';
import Dashboard from "./Dashboard";

import './App.css';
const App = () => {    //or function App(){
  return (
   <BrowserRouter>
    <Routes>
    <Route index element={<HomePage />} />
    <Route path='home' element={<HomePage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='Carrer' element={<Carrer />} />
    <Route path='contact' element={<ContactPage />} />
    {/* <Route path='Login' element={<Login />} />  */}
    <Route path="/Dashboard" element={<Dashboard />} /> {/* Render Dashboard on the root path */}
    <Route path="/Dashboard/:username" element={<Dashboard />} />
    {/* <Route path="/users" element={UserList} />  */}
    <Route path="/Aboutlog" element={<About />} />
    </Routes>
   </BrowserRouter>
  )
}
export default App;

// import React from "react";
// import Header from './Header';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




// import ContactPage from "./Contact";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
          
         
         
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;