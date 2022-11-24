import React from 'react'
import { Icon } from '@iconify/react';
import onclick1 from '../asserts/img/onclick.png'
import man1 from '../asserts/img/1.png'
import man2 from '../asserts/img/2.png'

import './Navbar.css'

function Navbar() {
    return (
        <div className='main1' >

            <div className='navbar1'>
                <div><Icon className='icon1' icon="bx:menu-alt-left" /></div>

                <div><img  className='piconclick' src={onclick1} alt='{}' ></img></div>

            </div>

            <div className='main2'>
                <div><p>Invite</p></div>

                <div><button className='btn1' >
                    <div className='flex2' ><Icon icon="fluent:star-arrow-right-start-20-filled" />
                        <p>Up grade</p>
                    </div>
                </button></div>

                <div><img className='man1' src={man1} alt='{}' ></img></div>
                <div><img className='man1' src={man2} alt='{}' ></img></div>

                <div><Icon className='lastarro' icon="gridicons:dropdown" /></div>

            </div>

        </div>
    )
}

export default Navbar
