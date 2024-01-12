import React from 'react'
import Sidebar from './Components/SideBar Section/SlideBar'
import Body from './Components/Body Section/Body'



const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardcontainer flex">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard