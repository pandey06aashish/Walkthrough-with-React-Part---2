import React from 'react'
import "./Signup.css"
import inst_logo from '../../assets/inst-logo.png'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='login-card'>
        <div className="logo">
            <img src={inst_logo} alt="" />
        </div>
        <form>
            <div className='input-group'>
                <input type='text' placeholder='Mobile Number or Email'/>
            </div>
            <div className='input-group'>
                <input type='text' placeholder='Full Name'/>
            </div>
            <div className='input-group'>
                <input type='text' placeholder='Phone Number ,Username .or email'/>
            </div>
            <div className='input-group'>
                <input type='Password' placeholder='Password'/>
            </div>
            <button type='submit'>Sign up</button>
        </form>
        <div className='check-account'>
            <p>have an account?<Link to="/signin">Log in</Link></p>
        </div>
    </div>
  )
}

export default Login