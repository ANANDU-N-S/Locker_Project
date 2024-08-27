import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SubNavComponent() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/logout', {
        email: 'talcotvm@gmail.com', // Replace with actual email from state or context
        password: 'demo' // Replace with actual password from state or context
      });

      // Clear the token or session identifier
      localStorage.removeItem('authToken');

      // Replace the history state to prevent navigating back
      window.history.replaceState(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', '/');

      // Redirect to the login page upon successful logout
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  

  return (
    <div className='main_sub_div text-center'>
      <nav className="ms-5 navbar navbar-expand-lg bg-body-tertiary ms-5">
        <div className="container-fluid ms-5">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/digi-locker-talco-main-dash-board">Home |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/digi-locker-talco-main-dash-board-change-paswrd">Change Password |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/digi-locker-talco-main-dash-board-add-paswrd">Add Password |</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={handleLogout}>Logout</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SubNavComponent;
