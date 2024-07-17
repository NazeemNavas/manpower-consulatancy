import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./img/logo.png";

const tableBoxStyle = {
  marginTop: "20px",
  padding: "30px",
  background: "linear-gradient(to bottom, #eefaff, #bdc0e9)",
  border: "1px solid #000000",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgb(0, 0, 0)",
  overflowX: "auto",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const thStyle = {
  textAlign: "center",
};

const tdStyle = {
  padding: "12px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
};

const trHoverStyle = {
  backgroundColor: "#f9f9f9",
  transition: "background-color 0.3s",
};

const dashboardContainerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "22px",
  backgroundColor: "#fcfafa",
  border: "1px solid #ddd",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
};

const dashboardTitleStyle = {
  fontSize: "32px",
  color: "#1a1d20",
  marginBottom: "20px",
  letterSpacing: "1px",
  fontFamily: "monospace",
};

const buttonStyle = {
  backgroundColor: "#89abcd",
  color: "rgb(0, 0, 0)",
  fontSize: "18px",
  fontFamily: "monospace",
  borderRadius: "5px",
  border: "none",
  marginLeft: "30px",
  cursor: "pointer",
  padding: "10px 20px",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  textTransform: "uppercase",
  fontWeight: "bold",
  textDecoration: "none",
};

const headerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.54) ",
  boxShadow: "0px 100px 700px rgb(17, 17, 17)",
  color: "rgb(0, 0, 0)",
  marginBottom: "20px",
  width: "100%",
  height: "125px",
};

const flex = {
  padding: "10px",
  display: "flex",
};

const buttonStyles = {
  backgroundColor: "#89abcd",
  color: "rgb(0, 0, 0)",
  fontSize: "18px",
  fontFamily: "monospace",
  borderRadius: "5px",
  border: "none",
  marginLeft: "10px",
  cursor: "pointer",
  padding: "10px 20px",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  textTransform: "uppercase",
  fontWeight: "bold",
  textDecoration: "none",
};
function Dashboard() {
 
  const username = localStorage.getItem("username");

  const [data22, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/About");
    } else {
      fetchData();
    }
  }, [navigate]);

  useEffect(() => {
    const username = localStorage.getItem("username");

    // Check if the username is available
    if (username) {
      console.log(`Welcome, ${username}!`);
    } else {
      console.log("Username not found in localStorage.");
    }
  }, []);

  const fetchData = () => {
    fetch("http://localhost/reactbackend/view.php")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data1);
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/Aboutlog");
  };

  const handleDeleteRow = (idToDelete) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this row?"
    );

    if (isConfirmed) {
      fetch(`http://localhost/reactbackend/delete.php?id=${idToDelete}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Refetch data after successful deletion
            fetchData();
            window.location.reload();
          } else {
            console.error("Failed to delete row:", data.message);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data22.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditPassword = () => {
    // Send a request to change the admin password with the old and new passwords
    
 if(oldPassword==="" && newPassword===""){
    alert("please fill all the fields ");
  }
  else if(oldPassword===""){
    alert("please fill old Password ");
  }
  else if(newPassword===""){
    alert("please fill new password ");
  }
  else if(oldPassword!=="" && newPassword!==""){
              fetch(`http://localhost/reactbackend/view2.php?username=${username}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ oldPassword, newPassword }),
              })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.success) {
                  alert( `${username} password changed successfully!`);
                  setOldPassword(""); // Clear the old password input field
                  setNewPassword(""); // Clear the new password input field
                } else {
                  alert(data.message || "Failed to change admin password");
                }
              })
                
                .catch((err) => console.error(err));
    
  };
 
  }
  return (
    <div>
      <div style={headerStyle}>
        <div style={flex}>
          <img src={Logo} alt="no img" width={200} />
          <h3>HRLM Admin Page </h3>
        </div>
        <div style={{ marginLeft: "200px" }}></div>
        <Link to="/About">
          <button className="button" style={buttonStyles}>
            Home
          </button>
        </Link>{" "}
        <Link to="/Aboutlog">
          <button className="button" style={buttonStyle} onClick={handleLogout}>
            logout
          </button>
        </Link>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <label style={{ color: "white" }}>Old password</label>&nbsp;&nbsp;
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />

        <label style={{ color: "white" }}>New password</label>&nbsp;&nbsp;
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={handleEditPassword}>
          Change password
        </button>
        <br />
      </div>

      <div style={dashboardContainerStyle}>
        <h1 style={dashboardTitleStyle}>Contact</h1>
        <div style={tableBoxStyle} className="table-box">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Serial No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Number</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Message</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((Usert, index) => (
                <tr key={index} style={trHoverStyle}>
                  <td style={tdStyle}>
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </td>
                  <td style={tdStyle}>{Usert.name}</td>
                  <td style={tdStyle}>{Usert.mobile}</td>
                  <td style={tdStyle}>{Usert.email}</td>
                  <td style={tdStyle}>{Usert.message}</td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => handleDeleteRow(Usert.id)}
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data22.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Dashboard;