

import React from 'react'
import './Center3.css'
import { Icon } from '@iconify/react';
import shape0 from '../asserts/img/shape0.png';

export default function Center3() {
  return (
    <div className='centermain3'>

      <div>
        <button type="button" class="btnboot fstbtnboot" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Use Template
          <div> <Icon className='plusboot2' icon="carbon:add" /></div>
        </button>
      </div>

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
