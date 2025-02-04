"use client";

import React from "react";
import Link from "next/link";
import AboutProductsImage from "../assets/products_about.webp";
import Image from "next/image";
import Textguard from "../assets/textguard.svg";
import FeatureHighlight from "./FeatureHiglight";
import Security from "../assets/security.webp";
import Rubber from "../assets/rubber.webp";
import Glass from "../assets/wideglass.webp";
import Japanese from "../assets/japanese.webp";
import Preengineered from "../assets/pre-engineered.webp";
import Window from "../assets/windowbox.webp";

const features = [
  {
    icon: Textguard,
    title: "Patented TEXGUARD Coating",
    description: "Patented TEXGUARD Coating for long-lasting lustre",
    imageAlt: "TEXGUARD coating icon",
  },
  {
    icon: Security,
    title: "Crescent Lock",
    description: "Crescent Lock for excellent safety & security",
    imageAlt: "Crescent lock icon",
  },
  {
    icon: Glass,
    title: "Wide Glass Panels & Narrow Sightlines for expansive views",
    description: "For expansive views",
    imageAlt: "Glass panels icon",
  },
  {
    icon: Rubber,
    title: "Rubber Gaskets",
    description:
      "Rubber Gaskets for better sealing against dust, noise, and water",
    imageAlt: "Rubber gaskets icon",
  },
];

const featured = [
  {
    image: Japanese,
    title: "Japanese Technology",
    description:
      "Crafted with Japanese technology, these doors excel in extreme weather conditions.",
  },
  {
    image: Preengineered,
    title: "Pre Engineered Doors",
    description:
      "Be it one door or 100, our machine-driven manufacturing guarantees consistent quality.",
  },
  {
    image: Window,
    title: "Window in a Box",
    description:
      "Our doors come boxed for easy transport, handling, and storage.",
  },
];

import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
const AboutProduct = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[60px] w-full h-auto">
      <div className="flex flex-col gap-[60px] max-w-[1280px] w-full  md:flex-row items-center justify-between">
        <div className="max-w-[602px] w-full max-h-[650px] h-full">
          <Image
            className=" w-full object-cover    h-full"
            src={AboutProductsImage}
            alt="Nxtzen hero Image"
          />
        </div>
        {/* LEft section */}
        <div className="flex flex-col gap-5  items-start md:max-w-[652px] w-full h-auto justify-center">
          {/* heading & small text */}
          <div className="flex flex-col gap-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=" capitalize font-montserrat font-semibold text-[15px] text-secondary"
            >
              ABOUT US
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="font-montserrat max-w-[525px] text-[32px] text-start text-headingText font-medium tracking-[-1%]"
            >
              Tostem Production Excellence
            </motion.h1>
          </div>

          {/* Japanese innovation text */}
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
            className="font-montserrat tracking-[2%] font-medium  leading-[27px] w-full max-w-[650px] text-[16px]  text-start text-bodyText "
          >
            Our products are crafted with a focus on innovation, quality, and
            customer-centric solutions, ensuring excellence in every detail.
          </motion.h3>

          {/* paragraph text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[625px] w-full font-montserrat tracking-[2%] leading-[25px] font-normal text-bodyText text-[16px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureHighlight key={index} {...feature} />
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <Link href="/contact">
          <button className="font-montserrat mt-[8px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4">
            CONTACT
          </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutProduct;
