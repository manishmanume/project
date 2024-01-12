import React from 'react'
import './SideBar.css'
import logo from '../../Assets/logo3.png'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {Link} from 'react-router-dom'

const SlideBar = () => {
  return (
    <div className='sidebar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="image name" />
        <h2>Plant App</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className='icon' />
              <span className='smalltext'>
                <Link className='manu' to='/Dashboard'>Dash board</Link>
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className='icon' />
              <span className='smalltext'>
                My order
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className='icon' />
              <span className='smalltext'>
                Explore
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className='icon' />
              <span className='smalltext'>
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="SettingDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className='icon' />
              <span className='smalltext'>
                Chart
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className='icon' />
              <span className='smalltext'>
                Trends
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className='icon' />
              <span className='smalltext'>
                Contacts
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className='icon' />
              <span className='smalltext'>
                Billings
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
            <MdLogout  className='icon'/>
              <span className='smalltext'>
               <Link className='manu' to='/'>Logout</Link>
              </span>
            </a>
          </li>
        </ul>
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
  )
}

export default SlideBar