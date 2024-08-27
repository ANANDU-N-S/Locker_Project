import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function DashBoardComponent() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-2 text-center div_one'>
                        <div className='card'>
                            <h5 class="card-title card_tit_all mt-3"> Company 1</h5>
                            <p className='card_view' onClick={() => navigate('/digi-locker-talco-main-dash-board-thiruvananthapuram-allied-labour-contract-organization-main-page')}>View <FaLongArrowAltRight /></p>
                        </div>

                    </div>

                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-2 text-center div_one'>
                        <div className='card'>
                            <h5 class="card-title card_tit_all mt-3">Company 2 </h5>
                            <p className='card_view' onClick={() => navigate('/digi-locker-talco-main-dash-board-thiruvananthapuram-allied-labour-social-welfare-co-operative-society-main-page')}>View <FaLongArrowAltRight /></p>
                        </div>
                    </div>

                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-2 text-center div_one'>
                        <div className='card'>
                            <h5 class="card-title card_tit_all mt-3">Change Password</h5>
                            <p className='card_view' onClick={() => navigate('/digi-locker-talco-main-dash-board-change-paswrd')}>Change <FaLongArrowAltRight /></p>
                        </div>

                    </div>
                </div>

                <div className='row mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-0'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-2 text-center div_one'>
                        <div className='card'>
                            <h5 class="card-title card_tit_all mt-3">Total Numbers of Accounts</h5>
                            <p className='card_view'>2</p>
                        </div>

                    </div>

                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-2 text-center div_one'>
                        <div className='card'>
                            <h5 class="card-title card_tit_all mt-3">Add New Password (Company 1) </h5>
                            <p className='card_view' onClick={() => navigate('/digi-locker-talco-main-dash-board-add-paswrd')}>Add <FaLongArrowAltRight /></p>
                        </div>
                    </div>

                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-2 text-center div_one'>
                        <div className='card'>
                            <h5 class="card-title card_tit_all mt-3">Add A New Password (Company 2) </h5>
                            <p className='card_view' onClick={() => navigate('/digi-locker-talco-main-dash-board-add-paswrd-thiruvananthapuram-allied-labour-social-welfare-co-operative-society-new')}>Add <FaLongArrowAltRight /></p>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    )
}

export default DashBoardComponent