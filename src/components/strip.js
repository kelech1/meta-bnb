import React from 'react'
import MBtoken from '../assets/icons/MBtoken.png'
import Metamask from '../assets/icons/Metamask.png'
import Opensea from '../assets/icons/Opensea.png'

export default function Strip() {
  return (
    <div className="container-fluid" id='Strip-main-container'>

        <div className="row" id='Strip-row'>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='Strip-col'>
                <img src={MBtoken} alt="MB-Token" />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='Strip-col'>
                <img src={Metamask} alt="Metamask" />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='Strip-col'>
                <img src={Opensea} alt="Opensea" />
            </div>

        </div>

    </div>
  )
}
