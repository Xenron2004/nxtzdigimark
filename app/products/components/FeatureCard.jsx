"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export function FeatureCard({ image, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex  items-center gap-3 bg-white rounded-lg "
    >
      <div className="max-w-[125px]  w-full h-auto overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className='flex flex-col gap-4'>
      <h3 className="text-[20px] text-start font-montserrat font-semibold text-primary">
        {title}
      </h3>
      <p className="text-[15px] font-montserrat text-gray-600 text-start">
        {description}
      </p>
      </div>
    </motion.div>
  );
}