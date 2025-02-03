import React from 'react'
import MainSection from './MainSection'
import AboutDoors from './components/AboutDoors'
import DesignDetails from './components/DesignDetails'
import ProductListing from './components/ProductsCard'
import AvSeries from './components/AvSeries'
import CsSeries from './components/CsSeries'
import CsDetails from './components/CsDetails'
import FrDetails from './components/FrDetails'
import FrSeries from './components/FrSeries'
import FoldDetails from './components/FoldDetails'
import FoldSeries from './components/FoldSeries'
import VentDetails from './components/VentDetails'
import CorDetails from './components/CorDetails'
import SlideDetails from './components/SlideDetails'


export const metadata = {
  title: "Aluminium Doors",
  description:
    "Discover NXTZEN Consultant's Pvt Ltd’s premium aluminium doors, designed for strength, durability, and modern aesthetics for residential and commercial spaces.",
  keywords:
    "aluminium doors, NXTZEN Consultant's Pvt Ltd aluminium doors, commercial aluminium doors, residential aluminium doors, high-quality aluminium doors",
};


const AluminiumDoors = () => {
  return (
   <section className='flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full'>
    <MainSection/>
    <div className='flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12'>
        
    <AboutDoors/>
    <DesignDetails/>
    {/* <ProductListing/> */}
    <AvSeries/>
    <CsDetails/>
    <CsSeries/>
    <FrDetails/>
    <FrSeries/>
    <FoldDetails/>
    <FoldSeries/>
    <VentDetails/>
    <CorDetails/>
    <SlideDetails/>
   
  
    </div>
   
   </section>
  )
}

export default AluminiumDoors
