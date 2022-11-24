
import React from 'react'
import './Dashboard.css'
import '../../src/App.css'
import Navbar from '../component2/Navbar'
import Leftsidebar from '../component2/Leftsidebar'

import Right from '../component2/Right'
import {Outlet} from 'react-router-dom';
 

function Dashboard() {
  return (
    <div>

        <Navbar/>
        
        <div className='flex1'>
        <Leftsidebar/>  
        <Outlet/>
        <Right/>

        </div>

      
    </div>
  )
}

export default Dashboard
