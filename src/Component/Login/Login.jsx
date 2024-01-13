import React, { useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import video from '../../LoginAssets/VIDEO.mp4'
import image from '../../LoginAssets/logo3.png'
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from 'axios'


const Login = () => {
  const [username,setusername]= useState("")
  const [password,setpassword]= useState("")

  const navigate = useNavigate()

  // const userlogin= (e)=>{
  //   e.preventDefault()
  //   axios.post('http://localhost:3000/login', {
  //     loginemail:email,
  //     loginpassword:password
  //   }).then((response)=>{
  //     console.log(response)
  //     if(response.data.message){
  //       // console.log(" not match")
  //       navigate('/')
  //     }
  //     else{
  //       navigate('/Dashboard')
  //     }
  //   })
  // }
  const userlogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', { username, password });
    console.log(response.status)

    if (response.status === 200) {
      alert('Login successful');
      navigate("/Dashboard")
    } else {
      alert('Login failed');
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    alert("error")
  }
};

  return (
    <div className='loginpage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Create and sell Extrarordinary Products</h2>
            <p>Adopt the Peace of Nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className='text'>Don't have an account? </span>
            <Link to={'/Registration'}>
              <button className='btn'> Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={image} alt="" />
            <h3>Welcome back!</h3>
          </div>
          <form action="" className='form grid'>
            <span className='showmessage'>Login Status will go here</span>
            <div className="inputDiv">
              <label htmlFor="username">username</label>
              <div className="input flex">
              <FaUserShield  className='icon'/>
                <input type="username" id='username' placeholder='Enter Your username'
                onChange={(e)=>setusername(e.target.value)} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">password</label>
              <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Your password'
                onChange={(e)=>setpassword(e.target.value)} />
              </div>
            </div>
            <button type='submit' className='btn'>
              <span onClick={userlogin}>Login</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

             <a href="/Dashboard">Dashboard</a> 
            <span className='forgot'>
              Forgot your password? <a href="">Click here</a>
            </span>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
