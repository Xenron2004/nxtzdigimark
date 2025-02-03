import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Why from "../../../public/assets/why_nxt.png";
import Tostem from "../../../public/assets/partner_tostem.jpg";
import German from "../../../public/assets/german_design.svg";
import Design from "../../../public/assets/if_design.svg";
import RedDot from "../../../public/awards/Red_Dot.png";
import Red from "../../../public/awards/Red_award.png";
import { motion } from "framer-motion";

const Whyus = () => {
  return (
    <section className="flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-7 max-w-[1280px] w-11/12 h-auto items-center justify-between">
      {/* left image */}
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="max-w-[708px] w-full h-auto">
        <Image src={Why} alt="Why us " />
      </motion.div>

      {/* right section */}
      <div className="flex flex-col items-start justify-center ">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=" font-semibold uppercase font-montserrat text-[15px] tracking-wider text-secondary mb-4"
          >
            WHY CHOOSE US
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[40px] font-montserrat  md:text-5xl font-normal text-headingText mb-6"
          >
            Certified Quality and Award-Winning Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-bodyText text-[16px] font-montserrat font-normal tracking-[-1%] "
          >
            Our innovative solutions, trusted certifications, and valued
            partnerships define our industry leadership
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className=" border-gray-200 w-full pt-6"
        >
          <div className="flex border-b-2  py-4 border-headingText items-center justify-between mb-3">
            <h3 className="text-[20px] text-primary font-montserrat font-medium tracking-[-1%]">
              Partners
            </h3>
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="mb-8">
            <Image src={Tostem} alt="tostem partner" />
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        viewport={{ once: true }}
        className=" border-gray-200 w-full ">
          <div className="flex border-b-2 py-4 border-headingText items-center justify-between mb-6">
            <h3 className="text-[20px] text-primary  font-montserrat font-medium tracking-[-1%]">
              Certifications
            </h3>
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[
              "/assets/jis.svg",
              "/assets/aama.svg",
              "/assets/sgs.svg",
              "/assets/rectangle_certificate.png",
              "/assets/astm.svg",
            ].map((src, index) => (
              <div key={index} className="w-[126px] h-[126px]">
                <img
                  src={src}
                  alt={`Certification ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, delay: 1.0 }}
         viewport={{ once: true }}
        className=" border-gray-200 w-full pt-6">
          <div className="flex border-b-2 py-4 border-headingText items-center justify-between mb-6">
            <h3 className="text-[20px] text-primary  font-montserrat font-medium tracking-[-1%]">
              Awards & Recognitions
            </h3>
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Image src={German} alt="German Design Award" />
            <Image src={Red} alt="German Design Award" />
            <Image
              src={Design}
              alt="iF Design Award 2021"
              className="h-24 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whyus;

{
  /* <div className="flex flex-col items-start justify-center">
                <div>
                  <h2 className=" font-semibold uppercase font-montserrat text-[15px] tracking-wider text-secondary mb-4">WHY CHOOSE US</h2>
                  <h1 className="text-[40px] font-montserrat  md:text-5xl font-normal text-headingText mb-6">
                    Certified Quality and Award-Winning Solutions
                  </h1>
                  <p className="text-bodyText text-[16px] font-montserrat font-normal tracking-[-1%] ">
                    Our innovative solutions, trusted certifications, and valued partnerships define our industry leadership
                  </p>
                </div>
      
             
                <div className=" border-gray-200 pt-6">
                  <div className="flex border-b-2 py-4 border-headingText items-center justify-between mb-3">
                    <h3 className="text-[20px] text-primary font-montserrat font-medium tracking-[-1%]">Partners</h3>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="mb-8">
                   <Image src={Tostem} alt="tostem partner" />
                  </div>
                </div>
      
                
                <div className=" border-gray-200 pt-6">
                  <div className="flex border-b-2 py-4 border-headingText items-center justify-between mb-6">
                    <h3 className="text-[20px] text-primary  font-montserrat font-medium tracking-[-1%]">Certifications</h3>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {[
                      '/assets/jis.svg',
                      '/assets/aama.svg',
                      '/assets/sgs.svg',
                      '/assets/rectangle_certificate.png',
                      '/assets/astm.svg'
                    ].map((src, index) => (
                      <div key={index} className="w-[126px] h-[126px]">
                        <img
                          src={src}
                          alt={`Certification ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
      
              
                <div className=" border-gray-200 pt-6">
                  <div className="flex border-b-2 py-4 border-headingText items-center justify-between mb-6">
                    <h3 className="text-[20px] text-primary  font-montserrat font-medium tracking-[-1%]">Awards & Recognitions</h3>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=240&h=120&fit=crop"
                      alt="German Design Award 2021"
                      className="h-24 object-contain"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=240&h=120&fit=crop"
                      alt="iF Design Award 2021"
                      className="h-24 object-contain"
                    />
                  </div>
                </div>
              </div> */
}
