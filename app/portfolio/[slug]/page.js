// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";

// const projectDetails = {
//   "louis-miller": {
//     title: "LOUIS MILLER'S VILLA",
//     description: "A luxurious villa featuring a sleek blend of modern aluminium window and door installations, designed to provide both style and functionality. The project showcases cutting-edge window architecture and durable door solutions, enhancing both the aesthetic and security of the property.",
//     client: "LOUIS MILLER",
//     category: "Aluminium Doors & Windows",
//     images: [
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
//     ]
//   },
//   "thoms-mariya": {
//     title: "THOMS MARIYA RESIDENCE",
//     description: "An elegant residential project featuring premium aluminium windows that blend seamlessly with the modern architecture. The installation emphasizes natural light and panoramic views while maintaining energy efficiency.",
//     client: "THOMS MARIYA",
//     category: "Aluminium Windows",
//     images: [
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
//     ]
//   },
//   "arthur-parry": {
//     title: "ARTHUR PARRY PROJECT",
//     description: "A contemporary commercial space featuring state-of-the-art aluminium window installations. The project combines functionality with modern design, creating an impressive facade that maximizes natural lighting.",
//     client: "ARTHUR PARRY",
//     category: "Aluminium Windows",
//     images: [
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
//     ]
//   },
//   "eliza-barnes": {
//     title: "ELIZA BARNES WARDROBE",
//     description: "A custom wardrobe solution that combines style with functionality. The project features premium materials and innovative storage solutions, creating an organized and elegant space.",
//     client: "ELIZA BARNES",
//     category: "Wardrobes",
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
//     ]
//   }
// };

// This function is required for static site generation with output: 'export'
// export async function generateStaticParams() {
//   return Object.keys(projectDetails).map((slug) => ({
//     slug: slug,
//   }));
// }

// const ProjectDetail = ({ params }) => {
//   const imagesContainerRef = useRef(null);
//   const project = projectDetails[params.slug];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (imagesContainerRef.current) {
//         const scrollPosition = window.scrollY;
//         imagesContainerRef.current.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <Link
//           href="/portfolio"
//           className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Back to Portfolio
//         </Link>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
//                 {project.title}
//               </h1>

//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-lg font-montserrat font-semibold mb-2">DESCRIPTION:</h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div>
//                   <h2 className="text-lg font-montserrat font-semibold mb-2">CLIENT:</h2>
//                   <p className="text-gray-600">{project.client}</p>
//                 </div>

//                 <div>
//                   <h2 className="text-lg font-montserrat font-semibold mb-2">CATEGORY:</h2>
//                   <p className="text-gray-600">{project.category}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative overflow-hidden" style={{ height: "800px" }}>
//             <div ref={imagesContainerRef} className="space-y-6 transition-transform duration-300">
//               {project.images.map((image, index) => (
//                 <div key={index} className="relative h-[400px] w-full rounded-lg overflow-hidden">
//                   <Image
//                     src={image}
//                     alt={`Project image ${index + 1}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParallaxImage from "../components/ParallaxImage";
import StayTouch from "@/app/contact/components/StayTouch";
import VisitOffice from "@/app/contact/components/VisitOffice";

const projectDetails = {
  "louis-miller": {
    title: "LOUIS MILLER'S VILLA",
    description:
      "A luxurious villa featuring a sleek blend of modern aluminium window and door installations, designed to provide both style and functionality. The project showcases cutting-edge window architecture and durable door solutions, enhancing both the aesthetic and security of the property.",
    client: "LOUIS MILLER",
    category: "Aluminium Doors & Windows",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "thoms-mariya": {
    title: "THOMS MARIYA RESIDENCE",
    description:
      "An elegant residential project featuring premium aluminium windows that blend seamlessly with the modern architecture. The installation emphasizes natural light and panoramic views while maintaining energy efficiency.",
    client: "THOMS MARIYA",
    category: "Aluminium Windows",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "arthur-parry": {
    title: "ARTHUR PARRY PROJECT",
    description:
      "A contemporary commercial space featuring state-of-the-art aluminium window installations. The project combines functionality with modern design, creating an impressive facade that maximizes natural lighting.",
    client: "ARTHUR PARRY",
    category: "Aluminium Windows",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "eliza-barnes": {
    title: "ELIZA BARNES WARDROBE",
    description:
      "A custom wardrobe solution that combines style with functionality. The project features premium materials and innovative storage solutions, creating an organized and elegant space.",
    client: "ELIZA BARNES",
    category: "Wardrobes",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "thoms-mariya-windows": {
    title: "THOMS MARIYA RESIDENCE",
    description:
      "An elegant residential project featuring premium aluminium windows that blend seamlessly with the modern architecture. The installation emphasizes natural light and panoramic views while maintaining energy efficiency.",
    client: "THOMS MARIYA",
    category: "Aluminium Windows",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  "eliza-barnes-wardrobes": {
    title: "ELIZA BARNES WARDROBE",
    description:
      "A custom wardrobe solution that combines style with functionality. The project features premium materials and innovative storage solutions, creating an organized and elegant space.",
    client: "ELIZA BARNES",
    category: "Wardrobes",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
};

// // Generate static parameters for SSG
// export async function generateStaticParams() {
//   return Object.keys(projectDetails).map((slug) => ({
//     slug,
//   }));
// }

// const ProjectDetail = async ({ params }) => {
//   const project = projectDetails[params.slug];

//   if (!project) {
//     return <div>Project not found</div>;
//   }

// Generate static parameters for SSG
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

const ProjectDetail = async ({ params }) => {
  // Await the params object to ensure proper handling
  const { slug } = await params;

  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-montserrat font-semibold text-gray-700">
          Project not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[80px] bg-white">
      <div className="max-w-7xl w-full flex flex-col items-start justify-center px-4 sm:px-6  py-20">
        <Link
          href="/portfolio"
          className="inline-flex text-[16px] font-montserrat text-primary items-center  hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 font-montserrat   mr-2" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
                {project.title}
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-montserrat font-semibold mb-2">
                    DESCRIPTION:
                  </h2>
                  <p className="text-gray-600 font-montserrat text-[17px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-montserrat font-semibold mb-2">
                    CLIENT:
                  </h2>
                  <p className="text-gray-600 font-montserrat text-[17px]">
                    {project.client}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-montserrat font-semibold mb-2">
                    CATEGORY:
                  </h2>
                  <p className="text-gray-600 font-montserrat text-[17px]">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden" style={{ height: "450px" }}>
            <ParallaxImage images={project.images} />
          </div>
        </div>
        <div className="flex mt-[80px]  w-full items-start justify-between  flex-col gap-[80px]">
        <StayTouch 
        
        />
        <VisitOffice/>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
