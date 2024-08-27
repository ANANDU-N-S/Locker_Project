import React,{useState} from 'react'
import axios from 'axios';

function TalswcsComponent() {
    const [item, setItem] = useState('');
    const [itemId, setItemId] = useState('');
    const [itemPassword, setItemPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1);

    const handleAddProduct = async () => {
        const token = localStorage.getItem('auth-token');

        try {
            const response = await axios.post(
                'http://localhost:3001/add-product-talswcs',
                {
                    item,
                    itemId,
                    itemPassword,
                    email,
                    password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                alert('Product added successfully');
                console.log(response.data);
            }
        } catch (error) {
            alert('Failed to add product. Please check your credentials.');
        }
        window.location.reload();
    };

    const handleNextClick = () => {
        if (step === 1) {
            // Validate old email and password if needed
            setStep(step + 1);
        } else if (step === 2) {
            // Validate email and OTP if needed
            setStep(step + 1);
        }
    };

    const handleBackClick = () => {
        if (step === 2 || step === 3) {
            setStep(step - 1);
        }
    };

    return (
        <div className='container text-center'>
            <div className='d-flex justify-content-center'>
                <div className='row ms-5'>
                    <div className='col mt-5 py-5 text-start'>
                        <div className={`card signIn_card mx-4 mt-2 p-4 ${step === 2 || step === 3 ? 'fade-in' : ''}`}>
                            <p className='fw-bold fs-5 mt-5'>Add New Password (Company 2)</p>

                            {step === 1 ? (
                                <>
                                    <label className='login_label mt-3'>Enter Item</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={item}
                                        onChange={(e) => setItem(e.target.value)}
                                    />

                                    <label className='login_label mt-3'>Enter Item Id</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={itemId}
                                        onChange={(e) => setItemId(e.target.value)}
                                    />

                                    <label className='login_label mt-3'>Enter password</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={itemPassword}
                                        onChange={(e) => setItemPassword(e.target.value)}
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
                            ) : (
                                <>
                                    <label className='login_label mt-3'>Enter Email</label>
                                    <input
                                        type='text'
                                        className='form-control signIn_input mt-3'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <label className='login_label mt-3'>Enter Password</label>
                                    <input
                                        type='password'
                                        className='form-control signIn_input mt-3'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <div className='row text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='col'>
                                                <button
                                                    className='btn signIn_btn text-light mt-5 rounded-pill px-4'
                                                    onClick={handleAddProduct}
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

export default TalswcsComponent