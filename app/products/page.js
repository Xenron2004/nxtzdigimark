import React from "react";
import MainSection from "./components/MainSection";
import About from "../about/page";
import AboutProduct from "./components/AboutProduct";
import { FeatureCard } from "./components/FeatureCard";
import Japanese from "./assets/japanese.webp"
import Preengineered from "./assets/pre-engineered.webp"
import Window from  "./assets/windowbox.webp"
import ProductDetails from "./components/ProductDetails";


const Products = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px]  mt-[100px] h-auto w-full">
      <MainSection />
      <div className="flex flex-col items-center justify-center h-auto max-w-[1280px] w-11/12">
        <AboutProduct />
      
      </div>
      <ProductDetails/>
    </section>
  );
};

export default Products;
