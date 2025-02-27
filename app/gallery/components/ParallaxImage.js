
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ParallaxImage = ({ images, duration = 4 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, duration * 1000); // Change image every `duration` seconds

    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-gray-50 ">
      {images.map((image, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 w-full h-full`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 0.9,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt={`Image ${i + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ParallaxImage;
