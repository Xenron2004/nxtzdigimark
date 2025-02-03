"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import aldoor from "../assets/aldoorsfive.webp";
import aldoors from "../assets/aldoorsfour.webp";
import aldoorsone from "../assets/aldoorsthree.webp";
import aldoorsfour from "../assets/aldoorstwo.webp";
import Image from "next/image";
import facadesone from "../assets/facadesone.webp";
import facadestwo from "../assets/facadestwo.webp";
import facadesthree from "../assets/facadesthree.webp";
import facadesfour from "../assets/facadesfour.webp";
import alwindows from "../assets/alwindowsone.webp";
import alwindowsone from "../assets/alwindowstwo.webp";
import alwindowstwo from "../assets/alwindowsthree.webp";
import alwindowsthree from "../assets/alwindowsfour.webp";
import interone from "../assets/interone.webp"
import intertwo from "../assets/intertwo.webp"
import interthree from "../assets/interthree.webp"
import interfour from "../assets/interfour.webp"
import entranceone from "../assets/entranceone.webp"
import entrancetwo from "../assets/entrancetwo.webp"
import entrancethree from "../assets/entrancethree.webp"
import entrancefour from "../assets/entrancefour.webp"

const productCategories = [
  {
    id: "aluminium-doors",
    title: "Aluminium Doors",
    active: true,
    products: [
      {
        id: 1,
        name: "Grants",
        image: aldoor,
        description:
          "Grants is TOSTEM's Flagship series. Its innovative design results in...",
      },
      {
        id: 2,
        name: "ATIS",
        image: aldoors,
        description: "Premium quality aluminium doors for modern homes...",
      },
      {
        id: 3,
        name: "We70",
        image: aldoorsone,
        description: "Contemporary design meets functionality...",
      },
      {
        id: 4,
        name: "We Plus",
        image: aldoorsfour,
        description:
          "Sleek Design which fulfills the needs of modern architect without...",
      },
    ],
  },
  {
    id: "aluminium-windows",
    title: "Aluminium Facades",
    products: [
      {
        id: 5,
        name: "Premium Facade",
        image: facadesone,
        description:
          "High-quality aluminium facades designed for modern architecture with excellent weather resistance and energy efficiency.",
      },
      {
        id: 6,
        name: "Stylish Facade",
        image: facadestwo,
        description:
          "Elegant aluminium facades offering durability, insulation, and a sleek aesthetic for contemporary designs.",
      },
      {
        id: 7,
        name: "Durable Facade",
        image: facadesthree,
        description:
          "Robust aluminium facades crafted for long-lasting performance and optimal thermal efficiency.",
      },
      {
        id: 8,
        name: "Modern Facade",
        image: facadesfour,
        description:
          "Advanced aluminium facades combining style, functionality, and superior insulation for cutting-edge projects.",
      },
      // Add more facade products...
    ],
  },

  {
    id: "facades",
    title: "Aluminium Windows",
    products: [
      {
        id: 9,
        name: "Sleek Aluminium Windows",
        image: alwindows,
        description:
          "Elegant aluminium windows designed for superior natural lighting and modern aesthetics.",
      },
      {
        id: 10,
        name: "Durable Aluminium Windows",
        image: alwindowsone,
        description:
          "Robust aluminium windows offering exceptional weather resistance and thermal efficiency.",
      },
      {
        id: 11,
        name: "Energy-Efficient Aluminium Windows",
        image: alwindowstwo,
        description:
          "Advanced aluminium windows engineered for optimal energy efficiency and durability.",
      },
      {
        id: 12,
        name: "Stylish Aluminium Windows",
        image: alwindowsthree,
        description:
          "Modern aluminium windows combining style, performance, and functionality.",
      },
      // Add more aluminium window products...
    ],
  },

  {
    id: "internal-partitions",
    title: "Internal Partitions",
    products: [
      {
        id: 13,
        name: "Sleek Office Partitions",
        image: interone,
        description: "Modern internal partitions designed to optimize space while maintaining privacy and aesthetics.",
      },
      {
        id: 14,
        name: "Customizable Office Partitions",
        image: intertwo,
        description: "Elegant and customizable partitions for office spaces, providing flexibility and style.",
      },
      {
        id: 15,
        name: "Durable Office Partitions",
        image: interthree,
        description: "High-quality internal partitions built for durability and designed for contemporary workspaces.",
      },
      {
        id: 16,
        name: "Stylish Office Partitions",
        image: interfour,
        description: "Stylish and functional office partitions to create modern and organized environments.",
      },
      // Add more partition products...
    ],
  },

  {
    id: "entrance-doors",
    title: "Entrance Doors",
    products: [
      {
        id: 17,
        name: "Elegant Entrance Door",
        image: entranceone,
        description: "Elevate your home's first impression with our elegant and durable entrance doors, designed for style and security.",
      },
      {
        id: 18,
        name: "Modern Entrance Door",
        image: entrancetwo,
        description: "Make a bold statement with our modern entrance doors, crafted for durability and timeless aesthetics.",
      },
      {
        id: 19,
        name: "Classic Entrance Door",
        image: entrancethree,
        description: "Discover the perfect blend of tradition and innovation with our classic yet sturdy entrance doors.",
      },
      {
        id: 20,
        name: "Stylish Entrance Door",
        image: entrancefour,
        description: "Add a touch of sophistication to your entryway with our stylish and secure entrance doors.",
      },
      // Add more entrance door products...
    ],
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("aluminium-doors");

  const activeProducts = productCategories.find(
    (category) => category.id === activeCategory
  )?.products;

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="w-11/12 flex flex-col items-center justify-center max-w-[1280px] ">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px]  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Premium Aluminium & Door Solutions
          </h1>
        </div>

        <section className="flex flex-col md:flex-row max-w-[1280px] h-auto w-full items-center justify-center">
          <div className="w-auto ">
            {/* Category Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-start max-w-[1200px]  lg:grid-cols-5  font-montserrat font-medium  justify-center gap-4 mb-12">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-3 text-[15px] md:text-md font-montserrat font-medium lg:text-[18px] transition-all duration-300 border-b-2 hover:text-orange-500 ${
                    activeCategory === category.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeProducts?.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden  "
                >
                  <div className="relative h-[548px] w-full ">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-6  py-10 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm mb-4">{product.description}</p>
                      <button className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
                        View More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
