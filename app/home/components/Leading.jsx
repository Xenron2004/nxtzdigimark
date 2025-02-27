import Image from "next/image";
import React from "react";
import LeadingImg from "../../../public/assets/leading_img.png";
import { motion } from "framer-motion";
import Link from "next/link";

const Leading = () => {
  return (
    <section className="flex flex-col gap-y-7 md:flex-row max-w-[1280px] h-auto w-11/12 items-center justify-between ">
      {/* Left section */}
      <div className="max-w-[631px] flex flex-col gap-12 w-full h-auto">
        <div className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[40px] max-w-[463px] w-full leading-[52px] font-montserrat font-normal text-headingText tracking-[-1%]"
          >
            What makes NXTZEN a leading name
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat text-bodyText font-normal text-[16px] tracking-[-1%] leading-[25.5px]"
          >
            Our products are developed to withstand the harshest weather
            conditions, setting new quality benchmarks and yardsticks in the
            industry, which is what makes us a leading name in home solutions
            around the world.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4 max-w-[300px] w-full">
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary"
          >
            Japanese Innovation
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary"
          >
            Award Winning Product
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary"
          >
            Pre-Engineered System Windows
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary"
          >
            Patented 'TEXGUARD' Technology
          </motion.h4>
        </div>
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group w-full md:max-w-[180px]"
          >
            <Link href="/about">
              <button className="mt-6 px-6 py-4 w-full bg-primary text-white shadow relative overflow-hidden">
                <span className="relative uppercase font-montserrat text-[16px] tracking-[2%] text-white z-10">
                  About us
                </span>
                <span className="absolute inset-0 bg-secondary transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </button>
            </Link>
          </motion.div>
      </div>

      {/* right section */}
      <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="max-w-[622px] w-full">
        <Image src={LeadingImg} alt="Leading sectio image" />
      </motion.div>
    </section>
  );
};

export default Leading;
