import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlaceNav from '../components/place-to-stayNav'
import DesertKing from '../components/desertking'
import '../pagesCSS/place-to-stay.css'
import DesertKingMore from '../components/desertkingMore'


export default function Home() {
  return (
    <>
      <PlaceNav />
        <div id='special'>
            <DesertKing />

            <DesertKingMore />

            <DesertKing />
        </div>
    </>
  )
}
