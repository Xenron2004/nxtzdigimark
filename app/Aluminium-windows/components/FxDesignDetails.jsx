import React from "react";
import FeatureUse from "@/components/FeatureUse";
import AluminiumDoor from "../assets/1961.jpg";

const featuresAndUsesData = [
    {
      imageSrc: AluminiumDoor,
      FeatureHeading: "Elegant Features of Fixed Windows",
      FeatureDesc:
        "Fixed windows offer a non-operable design, maximizing glass coverage for uninterrupted views. Built with thick glass panels, they provide excellent noise and wind insulation, while weatherproof sealing ensures dust and water resistance. Featuring sleek sashes and eco-friendly aluminum material, these windows perfectly balance modern aesthetics and sustainability.",
      UseHeading: "Ideal Uses for Every Space",
      UseDesc:
        "Perfect for kitchens, wardrobes, and bedrooms, fixed windows enhance natural lighting in confined spaces. Their sophisticated design adds elegance to both residential and commercial areas, creating bright, open, and visually appealing environments.",
    },

    // Add more objects here if needed
  ];

const FxDesignDetails = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-full h-auto flex gap-x-[56px] flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px] uppercase  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Fixed Windows
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

export default FxDesignDetails;
