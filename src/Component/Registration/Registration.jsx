import React, { useState } from 'react'
import './Registration.scss'
import { Link } from 'react-router-dom'
import video from '../../LoginAssets/VIDEO.mp4'
import image from '../../LoginAssets/logo3.png'
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import axios from 'axios'


const Registration = () => {
  const [email,setemail] = useState()
  const [username,setusername] = useState()
  const [password,setpassword] = useState()

  const createuser =()=>{    
    axios.post('http://localhost:3000/regist', {
      email:email,
      username:username,
      password:password
    }).then(()=>{
      console.log('User has been Created')
    })
  }

  return (
    <div className='register flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Create and sell Extrarordinary Products</h2>
            <p>Adopt the Peace of Nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className='text'> have an account? </span>
            <Link to={'/'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={image} alt="" />
            <h3>Let us know you!</h3>
          </div>
          <form action="" className='form grid'>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
              <MdMarkEmailRead  className='icon'/>
                <input type="email" id='email' placeholder='Enter Your email'
                onChange={(e)=>{setemail(e.target.value)}} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Usrname</label>
              <div className="input flex">
              <MdMarkEmailRead  className='icon'/>
                <input type="username" id='username' placeholder='Enter Your username'
                 onChange={(e)=>{setusername(e.target.value)}} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">password</label>
              <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Your password'
                 onChange={(e)=>{setpassword(e.target.value)}} />
              </div>
            </div>
            <button type='submit' className='btn' onClick={createuser}>
              <span>Register</span>
              <AiOutlineSwapRight className='icon'/>
            </button>
            <span className='forgot'>
              Forgot your password? <a href="">Click here</a>
            </span>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Registration