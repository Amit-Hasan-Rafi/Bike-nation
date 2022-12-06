import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer'
import Navber from '../shared/navber/Navber'

function MainLayout() {
  return (
    <div>
       <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default MainLayout