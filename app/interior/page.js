import React from "react";
import MainSection from "./components/MainSection";
import AboutInterior from "./components/AboutInterior";
import HangDesignDetails from "./components/HangDesignDetails";
import PartDesignDetails from "./components/PartDesignDetails";
import StayTouch from "../contact/components/StayTouch";


const Interior = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full">
      <MainSection />
      <div className="flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12">
          <AboutInterior/>
          <HangDesignDetails/>
          <PartDesignDetails/>
          
      </div>
      <StayTouch/>
    </section>
  );
};

export default Interior;
