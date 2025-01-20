"use client";

import { motion } from "framer-motion";

const PortfolioHead = () => {
  return (
    <div className="text-start flex items-center justify-center flex-col">
      <motion.h2
        className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.h2>

      <motion.h1
        className="text-[40px] text-center md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Our Previous Works
      </motion.h1>

      <motion.p
        className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Browse through our portfolio of successful projects where quality meets
        precision in every design.
      </motion.p>
    </div>
  );
};

export default PortfolioHead;
