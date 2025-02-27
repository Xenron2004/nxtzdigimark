import React from "react";
import MainSection from "./components/MainSection";
import Image from "next/image";
import Link from "next/link";
import GalleryHead from "./components/GalleryHead";
import AnimatedGalleryGrid from "./components/AnimatedGalleryGrid";
import atis from "./images/ATIS/3.jpg";

import weplus from "./images/WE PLUS/2.jpg";
import we70 from "./images/WE 70/2.jpg";
import grants from "./images/GRANTS/2.jpg";
import interior from "./images/INTERIOR SERIES/1.jpg";

export const metadata = {
  title: "Our Gallery",
  description:
    "Explore NXTZEN Consultant's Pvt Ltd’s portfolio of high-quality aluminium doors, windows, facades, and architectural solutions for residential and commercial projects.",
  keywords:
    "NXTZEN Consultant's Pvt Ltd portfolio, aluminium projects, door solutions, commercial aluminium, residential aluminium, architectural aluminium",
};

const projects = [
  {
    id: 1,
    title: "ATIS",
    category: "Aluminium Windows & Doors",
    image: atis,
    slug: "atis",
  },

  {
    id: 3,
    title: "WE PLUS",
    category: "Windows & Doors",
    image: weplus,
    slug: "we-plus",
  },
  {
    id: 4,
    title: "WE 70",
    category: "Sliding Doors & Windows",
    image: we70,
    slug: "we-70",
  },
  {
    id: 5,
    title: "Grants",
    category: "Doors",
    image: grants,
    slug: "grants",
  },
  {
    id: 6,
    title: "Interior Series",
    category: "Interior Solutions",
    image: interior,
    slug: "interior-series",
  },

 
];

const Gallery = () => {
  return (
    <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
      <MainSection />
      <div className="flex flex-col max-w-7xl w-11/12">
        <GalleryHead />

        <AnimatedGalleryGrid projects={projects} />
      </div>
    </section>
  );
};

export default Gallery;
