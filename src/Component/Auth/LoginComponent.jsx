import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import locker from '../../Image/locker.jpg';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('auth-token', token);
                navigate('/digi-locker-talco-main-dash-board');
            } else {
                console.error('Login failed:', response.data.message);
                alert('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Failed to login. Please try again.');
        }
    };

    const handleProtectedRoute = async () => {
        const token = localStorage.getItem('auth-token');
        try {
            const response = await axios.get('http://localhost:3000/protected', {
                headers: { 'auth-token': token }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert('You are not authorized to access this route.');
        }
    };

    return (
        <div className='container text-center'>
            <div className='row '>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5 py-5'>
                    <img src={locker} alt='Login' className=' ' />
                </div>

                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5 py-5 text-start'>
                    <div className='card signIn_card mx-4 mt-2 p-4'>
                        <p className='fw-bold fs-5 mt-5'>LogIn</p>
                        <label className='login_label mt-3'>Email</label>
                        <input
                            type='text'
                            className='form-control signIn_input mt-3'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className='login_label mt-3'>Password</label>
                        <div className='input-group mt-3'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='form-control signIn_input'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className='btn btn-outline-secondary'
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        <div className='row text-center'>
                            <div className='d-flex justify-content-center'>
                                <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-3'>
                                    <button
                                        className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row text-center mt-5'>
                            <div className='col'><hr /></div>
                            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 ms-1'>or</div>
                            <div className='col'><hr /></div>
                        </div>

                        <div className='row text-center'>
                            <div className='d-flex justify-content-center'>
                                <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-3'>
                                    <button className='btn btn-outline-info landing_switch_btn rounded-pill mt-4 px-4'>
                                       Forgot
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
