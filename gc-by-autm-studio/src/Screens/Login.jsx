import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signin } from "../Services/User";
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onSignInClicked = async() => {
        
        if(email.length === 0)
        {
          toast.warn('Please Enter Email');
        }
        else if(password.length === 0)
        {
          toast.warn('Please Enter Password');
        }
         else {

            // We'll check login credentials here by comparing with Db
             navigate('/home')
          
        }
     
    }

    return <>
 
        <div className="loginFormHolder">
            <div className="glassEffect">
            <h2>Login </h2>
            <div className="loginInputHolder">
                <input onChange={(e) => {
                    setEmail(e.target.value);
                }}
                    type='text'
                    placeholder="Username / Email" />


                <input onChange={(e) => {
                    setPassword(e.target.value);
                }}
                    type='password'
                    placeholder="Create Password" />


              
            </div>
            <div style={{margin:"2vh 0 0 0"}}>
                <p style={{color:"#fff"}}>Don't have account? <Link to='/signup' style={{color:"#0069ad",textDecoration:"none"}}>Register</Link></p>
            </div>
            <div className="loginButtonHolder">
                <button onClick={onSignInClicked}>Login</button>
            </div>
            </div>
            
        </div>

    </>
}

export default Login;