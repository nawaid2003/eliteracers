import React, {useState} from 'react'
// import './Signup.css'
import axios from 'axios'; // Import the axios library
import { Link } from 'react-router-dom'
import { SignupForm } from './Signup.st';
import google from "../../assets/google.svg"
import terSilver from "../../assets/ter-silver.png"
import SignupImage from "../../assets/signup.svg"

function Signup() {
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [signUpMessage, setSignUpMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        branch: 'ME',
        department: 'Aero'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const sendData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const responseData = await response.json();

                // Handle success response if needed

                if (!responseData.error) {
                    console.log('Signup successful:', responseData);
                    setSignUpMessage(responseData)
                    // Show signup success message
                    setSignupSuccess(true);
                } else {
                    console.log('Signup failed:', responseData.error);
                    setSignUpMessage(responseData.error)
                    setSignupSuccess(true);
                }


                // You can reset the form here if desired
                setFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    branch: 'ME',
                    department: 'Aero'
                });

            } catch (error) {
                // Handle error response if needed
                console.error('Signup error:', error);
                console.log('Message:', responseData.error);
            }
        };

        sendData(); // Call the inner async function
    };
    return (
        <SignupForm signupcover={SignupImage}>
            <div className="content-block">
                <div className="img">
                    <div className="logo">
                        <img src={terSilver} alt="Logo-Silver" />
                    </div>
                    <div className="slogan">The elite <span>racers</span></div>
                    <div className="car"></div>
                </div>
                <div className="form-section">
                    <div className='form-area'>
                    <div className="title">Create your account</div>
                    <div className="google-link">
                        <div className="google"><img src={google} alt="" /></div>
                        <div className="text">Signup with Google</div>
                    </div>
                    <div className="or-sec">
                        <div className='dash'></div>
                        <div>or</div>
                        <div className='dash'></div>
                    </div>
                    <div className="label">Name</div>
                    <input type="text" />
                    <div className="label">Email</div>
                    <input type="text" />
                    <div className="label">Password</div>
                    <input type="password" />
                    <div className="checkbox">
                        <input type="checkbox" name="agree" id="agree" />
                        <label>I agree to all <span>Terms, Privacy Policy</span> and <span>Fees</span></label>
                    </div>
                    <button>Sign Up</button>
                    <div className="signup-link">Have An Account? <Link>Log In</Link></div>
                    </div>
                </div>
            </div>
        </SignupForm>
    );
}

export default Signup;