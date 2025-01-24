"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const projects = [
    {
      id: 1,
      title: "THOMS MARIYA",
      category: "Aluminium Windows",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      slug: "thoms-mariya"
    },
    {
      id: 2,
      title: "ARTHUR PARRY",
      category: "Aluminium Windows",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      slug: "arthur-parry"
    },
    {
      id: 3,
      title: "ELIZA BARNES",
      category: "Wardrobes",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      slug: "eliza-barnes"
    },
    {
      id: 4,
      title: "THOMS MARIYA",
      category: "Doors & Interior",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      slug: ""
    },
    {
      id: 5,
      title: "THOMS MARIYA",
      category: "Aluminium Windows",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      slug: "thoms-mariya-windows"
    },
    {
      id: 6,
      title: "ELIZA BARNES",
      category: "Wardrobes",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      slug: "eliza-barnes-wardrobes"
    },
  ];

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

const AnimatedProjectGrid = ({ projects }) => {
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
          <Link href={`/portfolio/${project.slug}`}>
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

export default AnimatedProjectGrid;
