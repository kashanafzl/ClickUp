import React from 'react'
import './Center.css'
import center from '../asserts/img/center.png'
import {Link} from 'react-router-dom'

function Center() {
  return (
    <div className='centermain' >

      <div className='center2' >
        <div> <img className='centerpic' src={center} alt = '{}'  /> </div>

        <div className='centertex'><h5>Create Dashboard to organize anythink to Onclick</h5></div>

       
        <Link to = '/Center2'> <div><button className='btn2' >
            <p>ADD DASHBOARD</p> 
            </button></div>  </Link>

            



      </div>

      
    </div>
  )
}

export default Center
