import Image from "next/image";
import React from "react";
import LeadingImg from "../../../public/assets/leading_img.png"
import { motion } from "framer-motion";

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
        className="text-[40px] max-w-[463px] w-full leading-[52px] font-montserrat font-normal text-headingText tracking-[-1%]">What makes NXTZEN a leading name</motion.h2>
        <motion.p
         initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="font-montserrat text-bodyText font-normal text-[16px] tracking-[-1%] leading-[25.5px]">
          Nxtzen products are developed to withstand the harshest weather
          conditions, setting new quality benchmarks and yardsticks in the
          industry, which is what makes Nxtzen a leading name in home solutions
          around the world.
        </motion.p>
        </div>
         
         <div className="flex flex-col gap-4 max-w-[300px] w-full">
        <motion.h4
        
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay:0.8 }}
        viewport={{ once: true }}
        className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary">Japnese Innovation</motion.h4>
        <motion.h4
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay:1.0 }}
         viewport={{ once: true }}
        className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary">Award Winning Product</motion.h4>
        <motion.h4
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay:1.2 }}
         viewport={{ once: true }}
        className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary">Pre-Engineered System Windows</motion.h4>
        <motion.h4
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay:1.4 }}
         viewport={{ once: true }}
        className="font-montserrat font-semibold text-[16px] trackign-[-1%] text-primary">Parented 'TEXTGUARD' Technology</motion.h4>
        </div>
        
        <button className="font-montserrat max-w-[150px] mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-4">ABOUT US</button>
      </div>

      {/* right section */}
      <div className="max-w-[622px] w-full">
        <Image src={LeadingImg} alt="Leading sectio image" />
      </div>
    </section>
  );
};

export default Leading;
