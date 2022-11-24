import React from 'react'
import './Right.css'
import { Icon } from '@iconify/react';
import img9 from '../asserts/img/right4.png';
import img10 from '../asserts/img/right1.png';
import img11 from '../asserts/img/right2.png';
import img12 from '../asserts/img/right3.png';

function Right() {
  return (
    <div>

<section className='navbar-sec'>
        <div className='navbar-1'>

          <div className='navbar-a'>
          <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <div className='navbar-b'>
              <Icon className='icon-1' icon="carbon:add" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Right
