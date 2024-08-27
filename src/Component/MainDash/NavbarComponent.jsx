import React from 'react'
import logo from '../../Image/logo.png'
import { CiLock } from "react-icons/ci";
import locker from '../../Image/locker.jpg'

function NavbarComponent() {
  return (
    <div>
      <div className='row main_nav_bar'>
        <div className='col-xxl-10 col-xl-10 col-lg-8 col-md-7 col-sm-8 d-flex align-items-center'>
          <img src={locker} className='img-fluid logo_class mt-2 mb-2 ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-3 ms-sm-2 ms-1' alt='Logo' />
          <div className='ms-4'>
            <div className='main_head'>
              My Company
            </div>
            <p className='sub_head'>My Company PVT LTD</p>
          </div>
        </div>

        <div className='col-xxl-2 col-xl-2 col-lg-4 col-md-5 col-sm-4 mt-4 ms-xxl-0 ms-xl-0 ms-lg-0 ms-md-0 ms-sm-4 ms-1'>
          <p className='digi_heading'>Company Digi Locker <CiLock /></p>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent