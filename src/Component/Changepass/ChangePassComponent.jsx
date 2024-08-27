import React, { useState } from 'react';
import axios from 'axios';

function ChangePassComponent() {
    const [step, setStep] = useState(1);
    const [oldEmail, setOldEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNextClick = async () => {
        if (step === 1) {
            setStep(step + 1);
        } else if (step === 2) {
            try {
                await axios.post('http://localhost:3001/request-otp', { newEmail: email });
                setStep(step + 1);
            } catch (error) {
                console.error('Error requesting OTP:', error);
                alert('Error requesting OTP');
            }
        } else if (step === 3) {
            setStep(step + 1);
        }
    };

    const handleBackClick = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSaveClick = async () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/change-password', {
                oldEmail,
                oldPassword,
                newEmail: email,
                otp,
                newPassword,
                reenterPassword: confirmPassword
            });

            alert(response.data.message);
            window.location.reload();
        } catch (error) {
            console.error('Error changing password:', error);
            alert('Error changing password');
        }
    };

    return (
        <div className='container text-center'>
            <div className='d-flex justify-content-center'>
                <div className='row ms-5'>
                    <div className='col mt-5 py-5 text-start'>
                        <div className={`card signIn_card mx-4 mt-2 p-4 ${step === 2 || step === 3 || step === 4 ? 'fade-in' : ''}`}>
                            <p className='fw-bold fs-5 mt-5'>Change Password</p>

                            {step === 1 ? (
                                <>
                                    <label className='login_label mt-3'>Enter Old Email Id</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={oldEmail}
                                        onChange={(e) => setOldEmail(e.target.value)}
                                    />

                                    <label className='login_label mt-3'>Enter Old Password</label>
                                    <input
                                        type='password'
                                        className='form-control signIn_input mt-3'
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />

                                    <div className='row text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='col'>
                                                <button
                                                    className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                    onClick={handleNextClick}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : step === 2 ? (
                                <>
                                    <label className='login_label mt-3'>Enter Email Id</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className='row text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='col'>
                                                <button
                                                    className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                    onClick={handleNextClick}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <button
                                                className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                onClick={handleBackClick}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : step === 3 ? (
                                <>
                                    <label className='login_label mt-3'>Enter OTP</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />

                                    <div className='row text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='col'>
                                                <button
                                                    className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                    onClick={handleNextClick}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <button
                                                className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                onClick={handleBackClick}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <label className='login_label mt-3'>Enter New Password</label>
                                    <input
                                        type='password'
                                        className='form-control signIn_input mt-3'
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />

                                    <label className='login_label mt-3'>Re-enter New Password</label>
                                    <input
                                        type='password'
                                        className='form-control signIn_input mt-3'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    <div className='row text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='col'>
                                                <button
                                                    className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                    onClick={handleSaveClick}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassComponent;
