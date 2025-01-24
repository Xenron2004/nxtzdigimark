
// "use client";

// import React from "react";
// import MainSection from "./components/MainSection";
// import Image from "next/image";

// const projects = [
//   {
//     id: 1,
//     title: "THOMS MARIYA",
//     category: "Aluminium Windows",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
//       slug: 'louis-miller'
//   },
//   {
//     id: 2,
//     title: "ARTHUR PARRY",
//     category: "Aluminium Windows",
//     image:
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "ELIZA BARNES",
//     category: "Wardrobes",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     title: "THOMS MARIYA",
//     category: "Doors & Interior",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     title: "THOMS MARIYA",
//     category: "Aluminium Windows",
//     image:
//       "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     id: 6,
//     title: "ELIZA BARNES",
//     category: "Wardrobes",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
//       <MainSection />
//       <div className="flex flex-col max-w-7xl w-11/12">
//         <div className="text-start flex items-center justify-center flex-col">
//           <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
//             PORTFOLIO
//           </h2>
//           <h1 className="text-[40px] text-center md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
//             Our Previous Works
//           </h1>
//           <p className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full">
//             Browse through our portfolio of successful projects where quality
//             meets precision in every design.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative overflow-hidden cursor-pointer"
//             >
//               <div className="relative h-[400px] w-full">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   <span className="text-white/80 text-[15px] font-montserrat mb-2">
//                     {project.category}
//                   </span>
//                   <h3 className="text-white text-[24px] font-montserrat font-normal">
//                     {project.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


// "use client";

import React from "react";
import MainSection from "./components/MainSection";
import Image from "next/image";
import Link from "next/link";
import PortfolioHead from "./components/PortfolioHead";
import AnimatedProjectGrid from "./components/AnimatedProjectGrid";

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

const Portfolio = () => {
  return (
    <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
      <MainSection />
      <div className="flex flex-col max-w-7xl w-11/12">
        {/* <div className="text-start flex items-center justify-center flex-col">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            PORTFOLIO
          </h2>
          <h1 className="text-[40px] text-center md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Our Previous Works
          </h1>
          <p className="text-[20px] mt-3 text-center font-montserrat font-normal text-headingText md:max-w-[700px] max-w-full w-full">
            Browse through our portfolio of successful projects where quality
            meets precision in every design.
          </p>
        </div> */}

        <PortfolioHead/>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <Link href={`/portfolio/${project.slug}`} key={project.id}>
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
          ))}
        </div> */}

        <AnimatedProjectGrid projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;