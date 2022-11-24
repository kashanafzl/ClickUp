
import React from 'react'

import { Icon } from '@iconify/react';



 import lestpage from '../asserts/img/g2.png'
 import lestpagesec from '../asserts/img/g3.png'

 import boy from '../asserts/img/s.png'

 
 import vector from '../asserts/img/Vector.png'

import onclick1 from '../asserts/img/onclick.png'



import './click22.css'


function Click22() {
  return (
    <div className='container-fluid' id='maincon'  >

        <div className='row' >

            <div className='col-md-5' id='maincon' style={{ height : '100vh'}} >

                <div style={{display: 'flex' ,  marginTop: "30px" , alignItems:'center' }} >
                    
                    <div><img src={onclick1} alt = '{}' ></img></div>
                </div>

                <div>
                    <h3 id='headingofclick22'>Welcome Back</h3>
                </div>

                <div>
                    <h3 id='headingofclick33'>Signup.</h3>
                </div>

                <div>
                    <p id='headingofclick44'>Kindly enter your credentials below to get <br></br>  access to your account.</p>
                </div>

                <div>
                    <label id='headingofclick55'>Email*</label>
                </div>

                <div className='inputfied2' style={{display: 'flex'  , alignItems:'center' }} >
             
                <div>      <Icon icon="clarity:email-line" className='Icon' /></div>
                    <div style={{marginLeft: '10px'}} >  <input className='int' type="password" class="in" id="inputPassword" placeholder="Enter your email" /></div>
                </div>

                <div>
                    <label id='headingofclick555'>Password*</label>
                </div>

                
                <div className='inputfied2' style={{display: 'flex'  , alignItems:'center' }} >
                    <div>      <Icon icon="akar-icons:lock-off" className='Icon' /></div>
                    <div style={{marginLeft: '10px'}} >  <input className='int' type="password" class="in" id="inputPassword" placeholder="Enter your password" /></div>
                </div>


                <div>
                    <label id='headingofclick555'>Confirm Password*</label>
                </div>

                
                <div className='inputfied2' style={{display: 'flex'  , alignItems:'center' }} >
                    <div>      <Icon icon="akar-icons:lock-off" className='Icon' /></div>
                    <div style={{marginLeft: '10px'}} >  <input className='int' type="password" class="in" id="inputPassword" placeholder="Re-enter your password" /></div>
                </div>

                

                

                     
            

            
                <div>
                        <button id='btn2'>LOGIN</button>
                    </div>

                    <div style={{marginTop: '50px' , textAlign:"center" }}>
                    <div>
                    <p className='lastp2'>Already Have An Account Yet?
                     <span className='lstspan2' >LOGIN</span> </p>
                    </div>

                    </div>


            


            </div>
            
            <div className='col-md-7 pe-0' id='secondsection2' style={{ height : '100vh '  }} >

            <div className='container p-0 ' >

                        <div className='row' >

                        
                        <div className='col-md-6'>    <img id='lestpage' className='img-fluid' src={lestpage} alt='{lestpage}' ></img></div>

                        
                        <div className='col-md-6'>   <img id='lestpagesec' className='img-fluid' src={lestpagesec} alt='{lestpagesec}' ></img></div>

                           

                         
                        </div> 
                        </div>


                <div>
                <img id='vector' className='img-fluid' src={vector} alt='{vector}' ></img>
                </div>

                <div>
                    <img id='boy' className='img-fluid' src={boy} alt='{boy}' ></img>
                </div>


            </div>

            

        </div>


  

      
    </div>
  )
}

export default Click22
