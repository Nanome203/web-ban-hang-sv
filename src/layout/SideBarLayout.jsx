import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
function SideBarLayout() {
  return (
    <div id='pageBody' style={{ height: '200vh', display: 'flex' }}>
      <SideBar />
      <div id='contentBody' style={{ width: '80%', height: '100%' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default SideBarLayout