import React, { useState } from "react";
import './Register.css'
import {RegisterUser, signup} from '../Services/User'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');  
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');

    const navigate = useNavigate()

    const onRegisterClicked = async () => {
        if (!firstName || !lastName || !email || !userName || !password || !confirmPassword) {
            toast.warn('Please fill all fields');
            return;
        }
        if (password !== confirmPassword) {
            toast.warn('Passwords do not match');
            return;
        }
    
        const result = await signup(firstName, lastName, email, userName, password);
        if (result.id) { 
            toast.success('User Registered Successfully');
            navigate('/login');
        } else {
            toast.error(result.error || 'Registration failed');
        }
    };
    

    return (
        <div className="registerFormHolder">
            <h2>Create Your Account</h2>
            <div className="registerInputHolder">
                <input onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                    type='text'
                    placeholder="First Name" />

                <input onChange={(e) => {
                    setLastName(e.target.value);
                }}
                    type='text'
                    placeholder="Last Name" />

                <input onChange={(e) => {
                    setEmail(e.target.value);
                }}
                    type='email'
                    placeholder="Email" />

            <input onChange={(e) => {
                    setUserName(e.target.value);
                }}
                    type='text'
                    placeholder="Username" />      


                <input onChange={(e) => {
                    setPassword(e.target.value);
                }}
                    type='password'
                    placeholder="Create Password" />


                <input onChange={(e) => {
                    setConfirmPassword(e.target.value);  
                }}
                    type='password'
                    placeholder="Confirm Password" />

            </div>
            <div className="loginAndRegisterLinks">
                 <p>Already have account? <Link to='/login' style={{color:"#0069ad", textDecoration:"none"}}>Login</Link></p>
            </div>
            <div className="registerButtonHolder">
                <button onClick={onRegisterClicked}>Create Account</button>
            </div>
            
        </div>
    );
}

export default Register;
