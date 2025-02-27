"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child's animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AnimatedGalleryGrid = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={cardVariants}>
          <Link href={`/gallery/${project.slug}`}>
            <div className="group relative overflow-hidden cursor-pointer">
              <div className="relative h-[400px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white/80 text-[15px] font-montserrat mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-[24px] font-montserrat font-normal">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedGalleryGrid;
