import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MainLoginPage from './Pages/Auth/MainLoginPage';
import MainDashComponent from './Component/MainDash/MainDashComponent';
import MainPassPage from './Pages/MainDashPage/MainPassPage/MainPassPage';
import MainAddPassPage from './Pages/MainDashPage/MainAddPass/MainAddPassPage';
import MainTalcoPage from './Pages/MainTalco/MainTalcoPage';
import MainTalswcspage from './Pages/MainTalswcs/MainTalswcspage';
import MainTalswcspass from './Pages/Talswcspass/MainTalswcspass';
import SubNavComponent from '../src/Component/MainDash/SubNavComponent';
import NavbarComponent from './Component/MainDash/NavbarComponent';

function Navigation() {

  const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken');
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <div>

      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        
        <Route path="/digi-locker-talco-main-dash-board" element={
          <MainDashComponent />
        } />

        <Route path="/digi-locker-talco-main-dash-board-change-paswrd" element={
          <MainPassPage />
        } />

        <Route path="/digi-locker-talco-main-dash-board-add-paswrd" element={
          <MainAddPassPage />
        } />

        <Route path="/digi-locker-talco-main-dash-board-thiruvananthapuram-allied-labour-contract-organization-main-page" element={
          <MainTalcoPage />
        } />

        <Route path="/digi-locker-talco-main-dash-board-thiruvananthapuram-allied-labour-social-welfare-co-operative-society-main-page" element={
          <MainTalswcspage />
        } />

        <Route path="/digi-locker-talco-main-dash-board-add-paswrd-thiruvananthapuram-allied-labour-social-welfare-co-operative-society-new" element={
          <MainTalswcspass />
        } />

      </Routes>
    </div>
  );
}

export default Navigation;
