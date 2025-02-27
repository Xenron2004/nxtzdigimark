
import React from "react";
import MainSection from "./components/MainSection";
import Image from "next/image";
import Link from "next/link";
import PortfolioHead from "./components/PortfolioHead";
import AnimatedProjectGrid from "./components/AnimatedProjectGrid";
import Clove from "./assets/cloveTechnologies/5.jpg";
import Kay from "./assets/Keirthi Builders-Kay Space Apartments/4.jpg";
import Sastry from "./assets/Sastry/5.jpg";
import Suhasini from "./assets/Mrs. Suhasini/7.jpg";

export const metadata = {
  title: "Our Portfolio",
  description:
    "Explore NXTZEN Consultant's Pvt Ltd’s portfolio of high-quality aluminium doors, windows, facades, and architectural solutions for residential and commercial projects.",
  keywords:
    "NXTZEN Consultant's Pvt Ltd portfolio, aluminium projects, door solutions, commercial aluminium, residential aluminium, architectural aluminium",
};


const projects = [
  {
    id: 1,
    title: "Clove Technologies",
    category: "Aluminium Windows",
    image: Clove,
    slug: "clove-technologies"
  },
  {
    id: 2,
    title: "Keirthi Builders - kay Space Apartments",
    category: "Aluminium Windows",
    image: Kay,
    slug: "kay-space-apartments"
  },
  {
    id: 3,
    title: "Mr Sastry",
    category: "Wardrobes",
    image: Sastry,
    slug: "mr-sastry"
  },
  {
    id: 4,
    title: "Mrs. Suhasini",
    category: "Doors & Interior",
    image: Suhasini,
    slug: "mrs-suhasini"
  },

];

const Portfolio = () => {
  return (
    <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
      <MainSection />
      <div className="flex flex-col max-w-7xl w-11/12">
     
      

        <PortfolioHead/>

     

        <AnimatedProjectGrid projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;