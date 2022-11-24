
import React from 'react'

import { Icon } from '@iconify/react';



import group from '../asserts/img/group.png'

import onclick1 from '../asserts/img/onclick.png'

import Vector from '../asserts/img/Vector.png'

import './Click.css'


function Click() {
  return (
    <div className='container-fluid' id='maincon'  >

        <div className='row' >

            <div className='col-md-5' id='maincon' style={{ height : '100vh'}} >

                <div style={{display: 'flex' ,  marginTop: "30px" , alignItems:'center' }} >
                    
                    <div><img src={onclick1} alt = '{}' ></img></div>
                </div>

                <div>
                    <h3 id='headingofclick2'>Welcome Back</h3>
                </div>

                <div>
                    <h3 id='headingofclick3'>Login.</h3>
                </div>

                <div>
                    <p id='headingofclick4'>Kindly enter your credentials below to get <br></br>  access to your account.</p>
                </div>

                <div>
                    <label id='headingofclick5'>Email*</label>
                </div>

                <div className='inputfied' style={{display: 'flex'  , alignItems:'center' }} >
             
                <div>      <Icon icon="clarity:email-line" className='Icon' /></div>
                    <div style={{marginLeft: '10px'}} >  <input className='int' type="password" class="in" id="inputPassword" placeholder="Enter your email" /></div>
                </div>

                <div>
                    <label id='headingofclick55'>Password*</label>
                </div>

                
                <div className='inputfied' style={{display: 'flex'  , alignItems:'center' }} >
                    <div>      <Icon icon="akar-icons:lock-off" className='Icon' /></div>
                    <div style={{marginLeft: '10px'}} >  <input className='int' type="password" class="in" id="inputPassword" placeholder="Enter your password" /></div>
                </div>

                     
                <div className='medi' style={{display: 'flex' ,  marginTop: "15px" 
                , justifyContent:'space-between',  fontSize: '16px' , marginBottom: '20px' , alignItems:'center' }} >
                    <div>
                    <label style={{ marginLeft : '10px'}} ><input id='labeelpass'  type="checkbox"/> 
                    <label style={{fontSize:'16px ',  alignItems:'center' , paddingLeft: '7px'}} >Show Password</label> </label>
                    </div>

                    <div>
                        <label id='fortgetpass' >Forgot Password?</label>
                    </div>
                </div>

            
                <div>
                        <button id='btn'>LOGIN</button>
                    </div>

                    <div style={{marginTop: '50px' , textAlign:"center" }}>
                    <div>
                    <p className='lastp'>Dont Have An Account Yet?
                     <span className='lstspan' >SIGN UP</span> </p>
                    </div>

                    </div>


            


            </div>
            
            <div className='col-md-7 pe-0' id='secondsection' style={{ height : '100vh '  }} >

            <div className='container-fluid p-0 ' >

                        <div className='row' >

                           

                            <div className='col-12 per '  >

                            <img  id='arro'  className='img-fluid'  src={Vector} alt='{pic}' ></img>
                        <div > <img   className='picrightthird  img-fluid ' src={group} alt='' /></div>
                       

                        </div>
                        </div> 
                        </div>
            </div>

            

        </div>


  

      
    </div>
  )
}

export default Click
