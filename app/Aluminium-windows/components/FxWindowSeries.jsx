import React from 'react'

import CsWindowProductCard from './CsWindowProductCard'

const CsWindowSeries = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
    <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
      <div className="text-center flex items-center justify-center flex-col  mb-4">
        <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
          OUR SERIES
        </h2>
        <h1 className="text-[32px] uppercase  md:text-[38px] font-montserrat max-w-[630px] w-full font-normal mb-4">
          Fixed Windows Series
        </h1>
      </div>
      <CsWindowProductCard/>


    

    </div>
  </section>
  )
}

export default CsWindowSeries
