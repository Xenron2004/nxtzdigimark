import React from "react";
import MainSection from "./components/MainSection";
import AboutInterior from "./components/AboutInterior";
import HangDesignDetails from "./components/HangDesignDetails";
import PartDesignDetails from "./components/PartDesignDetails";
import StayTouch from "../contact/components/StayTouch";



export const metadata = {
  title: "Internal Partitions",
  description:
    "Optimize your space with NXTZEN Consultant's Pvt Ltd’s stylish aluminium internal partitions, perfect for commercial and residential interiors.",
  keywords:
    "aluminium internal partitions, NXTZEN Consultant's Pvt Ltd partitions, space dividers, modern aluminium partitions, office partitions",
};

const Interior = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full">
      <MainSection />
      <div className="flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12">
        <AboutInterior />
        <HangDesignDetails />
        <PartDesignDetails />
      </div>
      <StayTouch />
    </section>
  );
};

export default Interior;
