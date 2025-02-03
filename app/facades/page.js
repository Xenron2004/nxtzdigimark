import React from "react";
import MainSection from "./MainSection"
import AboutFacade from "./components/AboutFacade";
import FacDesignDetails from "./components/FacDesignDetails";
import FacWindowSeries from "./components/FacWindowSeries";

export const metadata = {
  title: "Aluminium Facades",
  description:
    "NXTZEN Consultant's Pvt Ltd offers high-quality aluminium facades that enhance building aesthetics, energy efficiency, and structural durability.",
  keywords:
    "aluminium facades, NXTZEN Consultant's Pvt Ltd facades, architectural aluminium facades, modern facades, commercial aluminium facades",
};


const Facades = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full">
      <MainSection />
      <div className="flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12">
      <AboutFacade/>
      <FacDesignDetails/>
      <FacWindowSeries/>
    
    
      </div>
    </section>
  );
};

export default Facades;
