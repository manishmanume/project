import React from 'react'
import "./Top.css"
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import userImage from '../../../Assets/user4.png'
import userImage2 from '../../../Assets/pot.png'
import video from '../../../Assets/VIDEO.mp4'
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Plant App</h1>
          <p>Hello Manish, Welcome back!</p>
        </div>

        <div className="searchbar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className='icon' />
        </div>

        <div className="admin flex">
          <TbMessageCircle className='icon' />
          <IoMdNotificationsOutline className='icon' />
          <div className="adminImage flex">
            <img src={userImage} alt="Admin image" />
          </div>
        </div>

      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary Products</h1>
          <p>The world's fast growing industry today are natural and products!</p>
          <div className="buttons flex">
            <button className='btn'>Explore more</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My stat</h1>

              <div className="flex">
                <span>
                  today <br /> <small>4 orders</small>
                </span>
                <span>
                  This Month  <br /> <small>130 orders</small>
                </span>
              </div>
              <div className="flex link">
                Go to my orders <BsArrowRightShort className='icon' />
              </div>
            </div>
            <div className="imgDiv">
              <img src={userImage2} alt="Image name" />
            </div>
            <Link></Link>
          </div>

            <div className="sideBarCard">
              <BsQuestionCircle className='icon' />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>Having trouble in PlantApp, please contact us from for more Question.</p>
                <button className='btn'>Go to help center</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top