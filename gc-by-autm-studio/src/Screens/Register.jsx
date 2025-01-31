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

    const onRegisterClicked = async() => {

        if(firstName.length === 0)
        {
          toast.warn('Please Enter First Name');
        }
        else if(lastName.length === 0)
        {
          toast.warn('Please Enter Last Name');
        }
        else if(email.length === 0)
        {
          toast.warn('Please Enter Email');
        }
        else if(userName.length === 0)
        {
              toast.warn('Please Enter Username');
        }
        else if(password.length === 0)
        {
          toast.warn('Please Enter Password');
        }
        else if(confirmPassword.length === 0)
        {
          toast.warn('Please Conrim Password');
        }
        else if(password !== confirmPassword)
        {
          toast.warn('Password Dosent match');
        }
        else
        {
          navigate('/login');
          const result = await signup(firstName, lastName, email, userName, password);
          console.log(result);
          if(result.affectedRows == 1)
          {
              toast.success('User Registered Successfully');
              navigate('/login');
          }
          else
          {
              toast.error(result['error']);
          }
        }
  
       
    }

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
                 <p>Already have account? <Link to='/user-profile' style={{color:"#0069ad", textDecoration:"none"}}>Login</Link></p>
            </div>
            <div className="registerButtonHolder">
                <button onClick={onRegisterClicked}>Create Account</button>
            </div>
            
        </div>
    );
}

export default Register;
