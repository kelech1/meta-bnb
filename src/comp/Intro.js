import React from 'react'

import grid from "../assets/rotate/grid.png"

export default function Intro() {
  return (
    <div className='flex flex-col justify-between my-2 md:my-9 lg:flex-row px-5vw lg:px-7vw'>
        <section className='lg:w-1/2'>
            <h1 className='text-6xl'>
                Rent a <span className='text-primary'>Place</span> away from <span className='text-primary'>Home</span> in the <span className='text-primary'>Metaverse</span>
            </h1>
            <p className='mt-4 text-2xl leading'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form className='flex mt-6 mb-10'>
              <input placeholder='Search for location' type="text" className='w-1/2 border-inputBorder rounded-l-lg border border-r-0 px-3 py-3.5 '/>
              <button className='bg-primary py-3.5 border-primary rounded-r-lg border border-l-0 text-white px-8 lg:px-20'>Search</button>
            </form>
        </section>
        <img src={grid} className="mb-8 " alt='sample locations'/>
    </div>
  )
}
