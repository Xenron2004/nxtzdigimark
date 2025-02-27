"use client";

import { motion } from "framer-motion";

const GalleryHead = () => {
  return (
    <div className="text-start flex items-center justify-center flex-col">
      <motion.h2
        className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>

      <motion.h1
        className="text-[40px] text-center md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
       Showcasing Excellence
      </motion.h1>

      <motion.p
        className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
      Explore our collection of completed projects, each crafted with precision and creativity. Our work speaks for itself—where innovation meets design.
      </motion.p>
    </div>
  );
};

export default GalleryHead;
