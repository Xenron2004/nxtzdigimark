import React from "react";
import MainSection from "./components/MainSection";
import AboutEntrance from "./components/AboutEntrance";
import GeiDesignDetails from "./components/GieDesignDetails";
import GeVentDoors from "./components/GeVentDoors";

const EntranceDoors = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full">
      <MainSection />
      <div className="flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12">
        <AboutEntrance />
        <GeiDesignDetails />
        <GeVentDoors />
      </div>
    </section>
  );
};

export default EntranceDoors;
