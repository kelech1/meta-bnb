import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagesCSS/home.css'

import BoardImage1 from '../assets/images/BoardImage 1.png'
import BoardImage2 from '../assets/images/BoardImage 2.png'
import BoardImage3 from '../assets/images/BoardImage 3.png'
import BoardImage4 from '../assets/images/BoardImage 4.png'

export default function Board() {
  return (
    <div className="container-fluid" id='Board-main-container'>

      <div className="row" id='Board-row'>
            
            <div  id='Board-col-1'>
                
                <div id='Board-div-1'>
                    <h1 id='Board-div-1-maintext'>Rent a <span id='Board-div-1-subtext'>Place</span> away from <br />
                    <span id='Board-div-1-subtext'>Home </span>in the <span id='Board-div-1-subtext'>Metaverse</span></h1>
                </div>

                <div id='Board-div-2'>
                    <p  id='Board-div-2-maintext'>we provide you access to luxury and affordable  <br />
                    houses in the metaverse, get a chance to turn your <br />
                    imagination to reality at your comfort zone</p>
                </div>

                <div id='Board-div-3'>
                    <input type="text" placeholder='Search for location' id='Board-div-input' />
                    <button id='Board-div-btn'>Search</button>
                </div>

            </div>

            <div className='Board-col-images'>
                
                <img src={BoardImage1} alt="BoardImage1" id='BoardImage1'/>
                <img src={BoardImage2} alt="BoardImage2" id='BoardImage2'  />
                
                <img src={BoardImage3} alt="BoardImage3" id='BoardImage3'/>
                <img src={BoardImage4} alt="BoardImage4" id="BoardImage4" />
                
            </div>
      </div>

    </div>
  )
}
