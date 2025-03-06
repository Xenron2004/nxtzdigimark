"use client";
import React from "react";
import Hero from "./components/Hero";
import HeroImg from "../../public/assets/Hero_nxt.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Why from "../../public/assets/why_nxt.png";
import Tostem from "../../public/assets/partner_tostem.jpg";
import Whyus from "./components/Whyus";
import Leading from "./components/Leading";
import Products from "./components/Products";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center  gap-[100px]   ">
      {/* Hero section */}

      <div className="flex flex-col gap-y-10   md:flex-row items-center max-w-7xl w-11/12 justify-between">
        {/* LEft section */}
        <div className="flex flex-col gap-5 mt-10 items-start md:max-w-[525px] w-full h-auto justify-center ">
          {/* heading & small text */}
          <div className="flex flex-col gap-3 ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className=" capitalize font-montserrat font-semibold text-[15px] text-secondary"
            >
              WELCOME TO NXTZEN
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-montserrat max-w-[525px] text-[56px] text-start text-headingText font-medium leading-[72px]"
            >
              Innovative Ideas Stylish Designs
            </motion.h1>
          </div>

          {/* Japanese innovation text */}
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat max-w-[240px] tracking-[-1%]  w-full text-[22px] font-semibold text-start text-secondary "
          >
            Japanese <span className="font-medium"> Innovation </span>
            <span className="font-medium"> in Window</span> Design
          </motion.h3>

          {/* paragraph text */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[480px] w-full font-montserrat tracking-[2%] leading-[25px] font-normal text-bodyText text-[17px]"
          >
          NXTZEN is an exclusive channel partner for TOSTEM, the leading Japanese brand in aluminium windows and doors, catering to the North Andhra and East Godavari region. With a commitment to quality, innovation, and superior craftsmanship, we bring world-class, precision-engineered aluminium solutions to homes and commercial spaces.

          </motion.p>

          {/* CTA Button */}

          {/* <motion.button
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-montserrat mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4"
            >
              GET IN TOUCH
            </motion.button> */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group w-full md:max-w-[180px]"
          >
            <Link href="/contact">
              <button className="mt-6 px-6 py-4 w-full bg-primary text-white shadow relative overflow-hidden">
                <span className="relative font-montserrat text-[16px] tracking-[2%] text-white z-10">
                  GET IN TOUCH
                </span>
                <span className="absolute inset-0 bg-secondary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right section  */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className=" w-full max-w-[850px]    h-full"
        >
          <Image src={HeroImg} alt="Nxtzen hero Image" />
        </motion.div>
      </div>

      <Whyus />
      <Leading />
      <Products />
      <Works />
      <Reviews />
      <Gallery />
    </section>
  );
};

export default Home;
