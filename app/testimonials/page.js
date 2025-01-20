// import React from "react";
// import MainSection from "./components/MainSection";
// import Image from "next/image";

// const Testimonials = () => {
//   return (
//     <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
//       <MainSection />
//       <div className="flex flex-col max-w-7xl w-11/12">
//         <div className="text-start flex items-center justify-center flex-col">
//           <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
//             TESTIMONIALS
//           </h2>
//           <h1 className="text-[40px] text-center  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
//             What our Clients Says
//           </h1>
//           <p className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full">
//             Hear from our satisfied clients about their experiences and the
//             exceptional results we've delivered.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






















































// "use client";

// import React from "react";
// import MainSection from "./components/MainSection";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Anderson",
//     role: "Interior Designer",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
//     review: "Working with this team was an absolute pleasure. Their attention to detail and commitment to quality exceeded my expectations. The windows they installed transformed my client's space completely.",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Homeowner",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
//     review: "The professionalism and expertise demonstrated throughout our home renovation project were outstanding. The quality of their aluminum windows is unmatched, and the installation was flawless.",
//   },
//   {
//     id: 3,
//     name: "Emma Thompson",
//     role: "Architect",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
//     review: "I've worked with many contractors, but their dedication to precision and quality stands out. They understand architectural requirements perfectly and deliver exceptional results.",
//   },
//   {
//     id: 4,
//     name: "David Rodriguez",
//     role: "Property Developer",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
//     review: "For our multi-unit development project, they delivered consistently high-quality work across all installations. Their team's efficiency and reliability made them a valuable partner.",
//   },
//   {
//     id: 5,
//     name: "Lisa Zhang",
//     role: "Real Estate Agent",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
//     review: "The quality of their products has become a strong selling point for my properties. Clients consistently praise the modern design and functionality of their installations.",
//   },
//   {
//     id: 6,
//     name: "James Wilson",
//     role: "Commercial Developer",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
//     review: "Their expertise in commercial projects is remarkable. The team handled our large-scale office renovation with exceptional professionalism and attention to detail.",
//   },
// ];

// const Testimonials = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   return (
//     <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
//       <MainSection />
//       <div className="flex flex-col max-w-7xl w-11/12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-start flex items-center justify-center flex-col"
//         >
//           <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
//             TESTIMONIALS
//           </h2>
//           <h1 className="text-[40px] text-center md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
//             What our Clients Says
//           </h1>
//           <p className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full">
//             Hear from our satisfied clients about their experiences and the
//             exceptional results we've delivered.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
//         >
//           {testimonials.map((testimonial) => (
//             <motion.div
//               key={testimonial.id}
//               variants={itemVariants}
//               className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-montserrat font-semibold text-lg">
//                     {testimonial.name}
//                   </h3>
//                   <p className="font-montserrat text-sm text-gray-600">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </div>
//               <p className="font-montserrat text-gray-700 leading-relaxed">
//                 {testimonial.review}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;











































































"use client";

import React from "react";
import MainSection from "./components/MainSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    review: "Working with this team was an absolute pleasure. Their attention to detail and commitment to quality exceeded my expectations. The windows they installed transformed my client's space completely.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    review: "The professionalism and expertise demonstrated throughout our home renovation project were outstanding. The quality of their aluminum windows is unmatched, and the installation was flawless.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    review: "I've worked with many contractors, but their dedication to precision and quality stands out. They understand architectural requirements perfectly and deliver exceptional results.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    review: "For our multi-unit development project, they delivered consistently high-quality work across all installations. Their team's efficiency and reliability made them a valuable partner.",
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    review: "The quality of their products has become a strong selling point for my properties. Clients consistently praise the modern design and functionality of their installations.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Commercial Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    review: "Their expertise in commercial projects is remarkable. The team handled our large-scale office renovation with exceptional professionalism and attention to detail.",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
      <MainSection />
      <div className="flex flex-col max-w-7xl w-11/12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start flex items-center justify-center flex-col"
        >
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            TESTIMONIALS
          </h2>
          <h1 className="text-[40px] text-center md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            What our Clients Says
          </h1>
          <p className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full">
            Hear from our satisfied clients about their experiences and the
            exceptional results we've delivered.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white  shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="font-montserrat text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="font-montserrat text-gray-700 leading-relaxed">
                {testimonial.review}
              </p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;