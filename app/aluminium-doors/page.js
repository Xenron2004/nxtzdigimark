import React from 'react'
import MainSection from './MainSection'
import AboutDoors from './components/AboutDoors'
import DesignDetails from './components/DesignDetails'

const AluminiumDoors = () => {
  return (
   <section className='flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full'>
    <MainSection/>
    <div className='flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12'>
        
    <AboutDoors/>
    <DesignDetails/>
    </div>
   
   </section>
  )
}

export default AluminiumDoors
