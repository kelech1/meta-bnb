import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Board from '../components/board'
import Strip from '../components/strip'
import Desert from '../components/desert'
import Lastframe from '../components/lastframe'

export default function Home() {
  return (
    <>
      <Board />
    
      <Strip />

      <Desert />

      <Lastframe />
    </>
  )
}
