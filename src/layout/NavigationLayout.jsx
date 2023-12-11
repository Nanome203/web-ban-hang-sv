import React from 'react'
import "../App.css";
import NavigationHeader from '../components/NavigationHeader';
import { Outlet } from 'react-router-dom';

function NavigationLayout() {
  return (
    <div className="App" id="Home">
      <NavigationHeader />
      <Outlet />
    </div>
  )
}

export default NavigationLayout