import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import LFImage from '../assets/images/LFImage.png'

export default function Lastframe() {
  return (
    <div className="container-fluid" id='Lastframe-main-container'>

    <div className="row" id='Lastframe-row'>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='Lastframe-col-1'>
            <h4 id='Lastframe-maintext'>Metabnb NFTs</h4>

            <p id='Lastframe-subtext'>Discover our NFT gift cards collection. Loyal <br />
            customers gets amazing gift cards which are <br />
            traded as NFTs. These NFTs gives our cutomer <br />
            access to loads of our exclusive services.</p>

            <button id='Lastframe-btn'>Learn More</button>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" id='Lastframe-col-2'>


            <img src={LFImage} alt="LFImage" height={500} width={620} id='LastframeImage' />

        </div>

    </div>
</div>
  )
}
