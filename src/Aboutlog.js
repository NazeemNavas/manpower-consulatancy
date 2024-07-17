import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate ,Link} from 'react-router-dom';
import Dashboard from './Dashboard';
const boxStyle = {
  padding: '10px',
  width: '100%', // Change the width to 100% for responsiveness
  maxWidth: '300px', // Add a max-width for larger screens
  borderRadius: '10px',
  border: '1px solid #FFF9F9',
  fontSize: '16px',
  color: '#444',
};

const btnStyle = {
  padding: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.986)',
  border: 'none',
  borderRadius: '10px',
  width: '200px',
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px',
  transition: 'background-color 0.3s ease',
  
};


const h3Style = {
  marginLeft: '10px',
  paddingTop: '40px',
  
};

const backStyle = {
  marginTop:'100px',
  marinTop:'100px',
  marginLeft: 'auto', // Center the form horizontally on small screens
  marginRight: 'auto', // Center the form horizontally on small screens
  borderRadius: '20px',
  width: '80%', // Adjust the width for responsiveness
  maxWidth: '400px', // Add a max-width for larger screens
  background: 'linear-gradient(150deg, #97d5e7, #f1b6b6)',
  boxShadow: '0px 10px 20px rgb(17, 17, 17)',
  paddingLeft: '0%',
};

function Aboutlog() {
  const [data22, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/reactbackend/view1.php')
      .then(res => res.json())
      .then(data => {
        setData(data.data1);
      })
      .catch(err => console.log(err));
  }, []);
 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    // Check if username and password match data fetched
    const foundUser = data22.find(user => user.username ===  username && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
       localStorage.setItem('username', username);
       navigate(`/Dashboard/`);
    } else {
      alert('Invalid credentials');
    }
  };
  
  return ( 
    <div>
     <center>
      <div style={backStyle} className='back'>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <div>
                  <center>
                  <h3 style={h3Style}>Login</h3>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    style={boxStyle}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br/><br/>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    style={boxStyle}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br/><br/>
                  <button style={btnStyle} onClick={handleLogin}>Login</button>
                  <br/><br/>
                  <div ><Link to="/home" style={{ textDecoration: 'none' }} className='btn text-primary' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg> &nbsp;Back to home</Link></div><br/><br/><br/><br/>
                  </center>
                </div>
              )
            }
          />
        </Routes>
      </div></center>
    </div>
  );
}

export default Aboutlog;