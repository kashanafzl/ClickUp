import React from 'react';
import { Icon } from '@iconify/react';
import './Center2.css';
import pic1 from '../asserts/img/image 25.png';
import pic2 from '../asserts/img/image 26.png';
import pic3 from '../asserts/img/image 27.png';
import shape0 from '../asserts/img/shape0.png';

import {Link} from 'react-router-dom'

function Center2() {
  return (
    <div className='Centerscreen'>

      <div className='mainflex'>

        <h4>Dashboard 1</h4>      


     <div className='sidebar'>

      <div><button className='btn2' >
            <div className='flex3' >
            <Icon className='iconf' icon="bx:pencil" />
            <p>Editing</p>

            <Icon icon="akar-icons:eye" />
            <p>Viewing</p>
            </div>
            </button></div>

          <div className='sideicon'>
       
            <div><Icon className='icon3' icon="bx:menu-alt-left" /></div>
            <div> <p>Filter</p> </div>
            


          </div>
     
         
          <div className='sideicon'>
            <div><Icon className='icon3' icon="charm:refresh" /></div>
            <div> <p>Refresh</p> </div> 

          </div><div>
            <div><Icon className='icon3' icon="ep:stopwatch" /></div>
      
          </div>


          
          <div className='sideicon'>
            <div><Icon className='icon3'  icon="ic:outline-zoom-in-map" /></div>
         

          </div>

          

       
          <div className='sideicon'>
            <div><Icon className='icon3' icon="dashicons:lock-duplicate" /></div>
            <div> <p>Private</p> </div> 

          </div>

          

            </div>

      
     </div>

     <h4 className='dash'>Create a Dashboard</h4>
     <h6 className='dash2' >Get Started with a Dashboard template, or start from Scratch and bulid  your own widgets!</h6>

    
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 px-4'>
          <h6 className='dashh'>Simple Dashboard</h6>
            <img id='picsett' className='img-fluid' src= {pic1} alt = '{}' ></img>

            <div className='btnflex'>
              <button className='flextbn' class="btnboot fstbtnboot" data-bs-toggle="modal" data-bs-target="#exampleModal" > USE TEMPLATE
              <div> <Icon className='plus' icon="carbon:add" /></div>
              </button> 
            </div>
 
 
 
        </div>

        <div className='col-md-4'>
        <h6 className='dashh'>Reporting Dashboard</h6> 
        <img  id='picsett'  className='img-fluid' src= {pic2} alt = '{}' ></img>

         
        <div className='btnflex'>
              <button className='flextbn' class="btnboot fstbtnboot" data-bs-toggle="modal" data-bs-target="#exampleModal" > USE TEMPLATE
              <div> <Icon className='plus' icon="carbon:add" /></div>
              </button> 
            </div>
 
            
 
          
          </div>

          <div className='col-md-4'>
          <h6 className='dashh'>Time Tracking Dashboard</h6>
          <img  id='picsett'  className='img-fluid' src= {pic3} alt = '{}' ></img>

          <Link to='/Center3'>   <div className='btnflex'>
              <button className='flextbn'> USE TEMPLATE
              <div> <Icon className='plus' icon="carbon:add" /></div>
              </button> 
            </div> </Link>
 
                    
          </div>


      </div>
    </div>
    

    <div className='last-btn'>
      <button className='last2-btn'>START FROM SCRATCH 
        <div><Icon className='btnlast3' icon="material-symbols:arrow-right" /></div> 
         </button> </div> 


{/* bootstrap 5 modal form code $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Dashboard Tempalte Setup</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <p>location</p>

              <div className='locationmodal'>


                <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    List
                  </button>
                  <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item active" href="/">Names</a></li>
                    <li><a className="dropdown-item" href="/">Services</a></li>
                    <li><a className="dropdown-item" href="/">Contact</a></li>

                    <li><a className="dropdown-item" href="/">Blogs</a></li>
                    <li><a className="dropdown-item " href="/">Events</a></li>
                    <li><a className="dropdown-item" href="/">Projects</a></li>
                    <li><a className="dropdown-item" href="/">Login</a></li>

                    <li><a className="dropdown-item" href="/">Sign</a></li>
                  </ul>
                </div>
              </div>



              <div className='donline'></div>

              <div className='ser' >
                <form>
                  <div className='searchicon22' >
                    <input className='inppp' placeholder='Search' />
                    <Icon className='serchiconb22' icon="charm:search" />
                  </div>
                </form>
              </div>

              <div className='shap'>

                <div><Icon id='do' icon="ic:outline-arrow-drop-down" /></div>
                <img id='shap' src={shape0} alt='{}'></img> <b className='b'>space</b>
                <input id='check' type="checkbox" />
              </div>

              <div className='shap'>

            <div><Icon id='do' icon="ic:outline-arrow-drop-down" /></div>
            <img id='shap' src={shape0} alt='{}'></img> <b className='b'>Lists ul</b>
            <input id='check' type="checkbox" />
            </div>




            </div>

            <div class="modal-footer">
              <button type="button" className='cancelbtn' data-bs-dismiss="modal">CANCLE</button>
              <button type="button" className='cancelbtn2'>APPLY</button>
            </div>
          </div>
        </div>
      </div>


      
    </div>

    

  )
}

export default Center2

