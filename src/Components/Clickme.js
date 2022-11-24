
import React from 'react'
import { Icon } from '@iconify/react';
import pic from '../asserts/img/Mask group.png'

import img1 from '../asserts/img/1.png'
import img2 from '../asserts/img/2.png'
import img3 from '../asserts/img/3.png'

import Vector from '../asserts/img/Vector.png'

import './Clickme.css'

function Clickme() {
  return (
    
      <div>
            <div className="container-fluid sinup__">
                <div className="row ">
                    <div className="col-5 sinup__leftside">
                        <div className="container sinup__heading">
                         <div style={{display : 'flex' , alignItems: 'center' , marginTop: '40px'}}> 
                              <img  src={pic} alt='{kasahn}' ></img>
                            <h1  >OnClick</h1></div>
                            <br></br> <br></br>
                            
                        </div>
                        <div className="container sinup__allinputs">
                            <small className='frist_subheading'>Welcome Back</small>
                            <h2 >Login.</h2>
                            <h3 className='second_subheading'>Kindly enter your credentials below to get access to your account.</h3>
                            <form>
                             
                                <label>Email<span style={{color:'#9F86C0' , fontWeight: 'bold' }} > *</span> </label>
                             
                             
                                <div className='input__'>
                                    <Icon icon="clarity:email-line" className='Icon' />
                                    <input type="email" class="in" id="exampleFormControlInput1" placeholder="Enter your email" />
                                </div>
                                <label>Password <span style={{color:'#9F86C0' , fontWeight: 'bold' }} > *</span> </label>
                                <div className='input__'>
                                    <Icon icon="akar-icons:lock-off" className='Icon' />
                                    <input type="password" class="in" id="inputPassword" placeholder="Enter your password" />
                                </div>

                                


                                
                               
                             
                                <button type="submit" class="sinup__btn">Login</button>

                                <div className='sinup__footer'>
                                    <p>Dont Have An Account Yet?</p>
                                    <a href='sinup'>Log in</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-7 sinup__rightside">


    <img  alt='{pic}'  style={{height: '20px' , width: '40px' }} src={Vector}></img>

                    <div className='container-fluid'  style={{border: "3px dashed red " , textAlign:'center' }} >
                        <div className='row' >

                            
                        <div className='col-md-4  col-sm-6  col-12 '  > <img   className='picright third  img-fluid ' src={img1} alt='' /></div>

                        <div className='col-md-4'  col-sm-6  col-12  > <img  className='picright thirdpi  img-fluid  ' src={img3} alt='' /></div>

                        <div className='col-md-4'  col-sm-6  col-12 >  <img  className='picright thirdpic img-fluid  '  src={img2} alt='' /> </div>

                    
      
                    </div>
                    

                    </div>


                           {/* <div>  <img  className='picright' src={img1} alt='' /></div>
                           <div>  <img  className='picright' src={img2} alt='' /></div>
                           <div>  <img  className='picright' src={img3} alt='' /></div> */}

                    </div>
                    
                </div>
                
            </div>

            {/* <h1 id='headf'>kashan is a boy</h1> */}

         


    </div>


  )
}

export default Clickme
