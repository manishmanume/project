import React from 'react'
import './Listing.css'
// import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import image1 from '../../../Assets/pot2.png'
import image4 from '../../../Assets/pot8.png'
import image3 from '../../../Assets/pot3.png'
import user1 from  '../../../Assets/user1.png'
import user2 from  '../../../Assets/user2.png'
import user3 from  '../../../Assets/user1.png'
import user4 from  '../../../Assets/user4.png'
import user5 from  '../../../Assets/user5.png'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={image1} alt="Image Name" />
          <h3>Annual vince </h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={image3} alt="Image Name" />
          <h3>Annual vince </h3>
        </div>
       
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={image4} alt="Image Name" />
          <h3>Annual vince </h3>
        </div>
      

    
     <div className="seller flex">
        <div className="topSeller">
          <div className="hading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user1} alt="Users Name" />
              <img src={user2} alt="Users Name" />
              <img src={user3} alt="Users Name" />
              <img src={user4} alt="Users Name" />
              <img src={user5} alt="Users Name" />
            </div>
            <div className="cardText">
              <span>
                15-224 plant Sold <br />
                <small>
                  21 Seller <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="featureSaller flex">
        <div className="topSeller">
          <div className="hading flex">
            <h3>Feature Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user1} alt="Users Name" />
              <img src={user2} alt="Users Name" />
              <img src={user3} alt="Users Name" />
              <img src={user4} alt="Users Name" />
              <img src={user5} alt="Users Name" />
            </div>
            <div className="cardText">
              <span>
                28-224 plant Sold <br />
                <small>
                  25 Seller <span className="date"> Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
   
  )
}

export default Listing