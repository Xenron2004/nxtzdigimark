import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../assets/2149301118.jpg";

const featuresAndUsesData = [
  {
    imageSrc: AluminiumDoor,
    FeatureHeading: "Innovative Features for Giesta Ventilation Doors",
    FeatureDesc:
      "Experience the perfect blend of airflow and security with Giesta Ventilation Doors. Featuring an integrated airflow window for improved ventilation, these doors come equipped with anti-theft locking mechanisms for enhanced safety. Durable steel panels wrapped with insulating foam ensure long-term performance, while rubber gaskets provide superior sealing against dust and noise.",

    UseHeading: "Pactical Uses for Every Space",
    UseDesc:
      "Giesta Ventilation Doors are ideal for humid climates, effectively reducing indoor moisture while enhancing air circulation. Perfect for kitchens and living areas that require continuous airflow, these doors help improve indoor air quality and prevent unpleasant odors. Their innovative design adds both safety and functionality to modern homes.",
  },

  // Add more objects here if needed
];

const GeVentDoors = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Giesta Ventilation Doors
          </h1>
        </div>

        {/* Features and uses section */}
        <section className="flex flex-col gap-12 w-full max-w-[1280px] ">
          {featuresAndUsesData.map((item, index) => (
            <FeatureUse
              key={index}
              index={index}
              imageSrc={item.imageSrc}
              FeatureHeading={item.FeatureHeading}
              FeatureDesc={item.FeatureDesc}
              UseHeading={item.UseHeading}
              UseDesc={item.UseDesc}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default GeVentDoors;
