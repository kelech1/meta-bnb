import React from 'react'
import DesertKing from './desertking'

export default function Desert() {
  return (
    <div className="container-fluid" id='Desert-main-container'>

        <h3 id='Desert-maintext'>Inspiration for your next Desert</h3>

        <div className="row" id='Desert-main-row'>
            
            <DesertKing />
            
        </div>
    </div>
  )
}
