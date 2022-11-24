import React from 'react'
import './Leftsidebar.css'
import { Icon } from '@iconify/react';


function Leftsidebar() {
    return (
        <div className='mainleft'>



            <div className='disp1'>

                <h4>Dashboard</h4>
                <Icon className='plusicon' icon="carbon:add" />

            </div>

            <div className='ser' > <form>
                <div className='searchicon' >
                    <Icon className='serchiconb' icon="charm:search" />
                    <input placeholder='Search' />
                </div>
            </form>
            </div>




            <div className='dashboard2'>
                <div><h5>Dashboard</h5></div>
                
                <div>  <Icon className='serch2' icon="charm:search" />

                    <Icon className='serch3' icon="material-symbols:arrow-right" />
                </div>

            </div>


            <div className='dashboard2'>
                <div><h5>Spaces</h5></div>
                <div>  <Icon className='serch2' icon="charm:search" />

                    <Icon className='serch3' icon="material-symbols:arrow-right" />
                </div>

            </div>

            <div className='noti'> <h5>Notifications</h5> </div>

            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Notifications
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> 
      </div>
    </div>
  </div>
  
  

</div>



        </div>
    )
}
//      <Icon icon="gridicons:dropdown" />
export default Leftsidebar
