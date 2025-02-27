import React from "react";
import OurProducts from "./OurProducts";
import AluminiumDoors from "../assets/Aldoors.webp";
import AlWindows from "../assets/aluminium_windows.webp";
import Entrance from "../assets/Entrance_doors.webp";
import Facadess from "../assets/Facades.webp";
import Interior from "../assets/Interio.webp";

const products = [
  {
    imageSrc: AluminiumDoors,
    heading: "Aluminium Doors",
    description:
      "Available in four series with seven unique designs, our aluminium doors blend durability, style, and functionality for any space.",
    availableDesigns:
      "Sliding Doors, Casement Doors, French Doors, Ventilation Doors ",
    series: "Grants, ATIS, We Plus, We 70",
    link: "/aluminium-doors", // Add the link to the page
  },

  {
    imageSrc: Entrance,
    heading: "Entrance Doors",
    description:
      "Enhance your space with French windows that combine elegant design with superior ventilation and lighting.",
    availableDesigns: "Giesta Doors, Giesta with Ventilation",
    series: "GIESTA Design Simulation",
    link: "/entrance-doors",
  },
  {
    imageSrc: AlWindows,
    heading: "Aluminium Windows",
    description:
      "Our sliding windows provide a seamless blend of modern aesthetics and robust functionality, perfect for contemporary spaces.",
    availableDesigns:
      "Sliding Windows, Casement Windows, French Windows,Awning Windows",
    series: "Grants, ATIS, We Plus, We 70",
    link: "/Aluminium-windows", // Add the link to the page
  },
  {
    imageSrc: Facadess,
    heading: "Facades",
    description:
      "Enhance your space with French windows that combine elegant design with superior ventilation and lighting.",
    availableDesigns: "Curtain Wall Facades, Store Front Facades",
    link: "/facades"
  },
  {
    imageSrc: Interior,
    heading: "Interior",
    description:
      "Enhance your space with French windows that combine elegant design with superior ventilation and lighting.",
    availableDesigns: "Classic, Double Glazed, Triple Glazed",
    link:"/interior"
  },
];

const ProductDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px] h-auto w-full">
      <div className="max-w-[1280px] w-11/12 h-auto flex flex-col items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px]  md:text-5xl font-montserrat max-w-[800px] w-full font-normal mb-4">
          Premium Aluminium Doors & Windows Solutions
          </h1>
        </div>

        <div className="flex flex-col max-w-7xl w-full gap-16">
          {products.map((product, index) => (
            <OurProducts
              key={index}
              index={index + 1}
              imageSrc={product.imageSrc}
              heading={product.heading}
              description={product.description}
              availableDesigns={product.availableDesigns}
              series={product.series}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
