import React from 'react'
import './Activity.css'
import { BsArrowRightShort } from "react-icons/bs";
import user from '../../../Assets/user1.png'
import user1 from '../../../Assets/user2.png'
import user2 from '../../../Assets/user5.png'
import user3 from '../../../Assets/user1.png'
import user4 from '../../../Assets/user2.png'

const Activity = () => {
  return (
    <div className='activitySction'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetail">
            <span className='name'>Mukesh Vashuja</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 mint ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetail">
            <span className='name'>Deepak Makkar</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">few mint ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetail">
            <span className='name'>Dipanshu Dureja</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">1 mint ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetail">
            <span className='name'>Akash Makhija</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 mint ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetail">
            <span className='name'>Ashika jain</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 mint ago</div>
        </div>
      </div>
    </div>
  )
}

export default Activity