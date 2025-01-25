import React from "react";
import MainSection from "./MainSection";
import AboutWindows from "./components/AboutWindows";
import SlDesignDetails from "./components/SlDesignDetails";
import SlWindowSeries from "./components/SlWindowSeries";
import CsDesignDetails from "./components/CsDesignDetails";
import CsDetails from "../aluminium-doors/components/CsDetails";
import CsWindowSeries from "./components/CsWindowSeries";
import AwnWindowSeries from "./components/AwnWindowSeries";
import AwnDesignDetails from "./components/AwnDesignDetails";
import FxDesignDetails from "./components/FxDesignDetails";
import FxWindowSeries from "./components/FxWindowSeries";
import GsDesignDetails from "./components/GsDesignDetails";
import GsWindowSeries from "./components/GsWindowSeries";
import FrDesignDetails from "./components/FrDesignDetails";
import FrWindowSeries from "./components/FrWindowSeries";
import TsDesignDetails from "./components/TsDesignDetails";
import SlitDesignDetails from "./components/SlitDesignDetails";
import VertDesignDetails from "./components/VertDesignDetails";

const AluminiumWindows = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[90px] h-auto w-full">
      <MainSection />
      <div className="flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12">
        <AboutWindows />
        <SlDesignDetails />
        <SlWindowSeries />
        <CsDesignDetails />
        <CsWindowSeries />
        <AwnDesignDetails />
        <AwnWindowSeries />
        <FxDesignDetails />
        <FxWindowSeries />
        <GsDesignDetails />
        <GsWindowSeries />
        <FrDesignDetails />
        <FrWindowSeries/>
        <TsDesignDetails/>
        <SlitDesignDetails/>
        <VertDesignDetails/>
      </div>
    </section>
  );
};

export default AluminiumWindows;
