import React from 'react'
import "./Login.css"
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
                <input type='text' placeholder='Phone number,username or email'/>
            </div>
            <div className='input-group'>
                <input type='password' placeholder='Password'/>
            </div>
            <button type='submit'>Sign in</button>
        </form>
        <div className='check-account'>
            <p>Don't Have account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login