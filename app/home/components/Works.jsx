// "use client";

// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";

// const works = [
//   {
//     id: 1,
//     title: "Modern Beach House",
//     architect: "Sarah Anderson",
//     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Urban Loft",
//     architect: "James Wilson",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Mountain Retreat",
//     architect: "Emma Davis",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//   },
//   {
//     id: 4,
//     title: "Glass House",
//     architect: "Michael Chen",
//     image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
//   },
//   {
//     id: 5,
//     title: "Desert Villa",
//     architect: "Laura Martinez",
//     image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
//   },
//   {
//     id: 6,
//     title: "Eco Residence",
//     architect: "David Park",
//     image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
//   },
//   {
//     id: 7,
//     title: "Lakeside Home",
//     architect: "Sophie Turner",
//     image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
//   },
//   {
//     id: 8,
//     title: "Forest Cabin",
//     architect: "Robert Lee",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//   },
// ];

// const Works = () => {
//   const scrollRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
//       setScrollProgress(scrollPercentage);
//     }
//   };

//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener("scroll", handleScroll);
//       return () => scrollElement.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-[1280px] w-11/12 mx-auto">
//         <div className="text-center mb-12">
//           <h4 className="text-sm font-medium text-orange-500 mb-2">
//             SIGNATURE WORKS
//           </h4>
//           <h2 className="text-4xl font-bold">Our Previous Works</h2>
//         </div>

//         <div
//           ref={scrollRef}
//           className="relative overflow-x-auto hide-scrollbar"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           <div className="flex gap-6 pb-8">
//             {works.map((work) => (
//               <div
//                 key={work.id}
//                 className="relative flex-shrink-0 group cursor-pointer"
//                 style={{ width: "413px", height: "548px" }}
//               >
//                 <Image
//                   src={work.image}
//                   alt={work.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-8">
//                   <h3 className="text-white text-2xl font-bold mb-2">
//                     {work.title}
//                   </h3>
//                   <p className="text-white mb-4">{work.architect}</p>
//                   <button className="text-white flex items-center gap-2 group">
//                     View More
//                     <span className="transform group-hover:translate-x-2 transition-transform">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="relative mt-8 mx-auto" style={{ width: "1100px" }}>
//             <div className="h-1 bg-gray-200 rounded-full">
//               <div
//                 className="h-full bg-orange-500 rounded-full transition-all duration-300"
//                 style={{ width: `${scrollProgress}%` }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Works;

// "use client";

// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";

// const worksList = [
//   {
//     id: 1,
//     title: "Modern Beach House",
//     architect: "Sarah Anderson",
//     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Urban Loft",
//     architect: "James Wilson",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Mountain Retreat",
//     architect: "Emma Davis",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//   },
//   {
//     id: 4,
//     title: "Glass House",
//     architect: "Michael Chen",
//     image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
//   },
//   {
//     id: 5,
//     title: "Desert Villa",
//     architect: "Laura Martinez",
//     image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
//   },
//   {
//     id: 6,
//     title: "Eco Residence",
//     architect: "David Park",
//     image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
//   },
//   {
//     id: 7,
//     title: "Lakeside Home",
//     architect: "Sophie Turner",
//     image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
//   },
//   {
//     id: 8,
//     title: "Forest Cabin",
//     architect: "Robert Lee",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//   },
// ];

// const Works = () => {
//   const scrollRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
//       setScrollProgress(scrollPercentage);
//     }
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener("scroll", handleScroll);
//       return () => scrollElement.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-[1280px] w-11/12 mx-auto">
//         <div className="text-center mb-12">
//           <h4 className="text-sm font-medium text-orange-500 mb-2">
//             SIGNATURE WORKS
//           </h4>
//           <h2 className="text-4xl font-bold">Our Previous Works</h2>
//         </div>

//         <div
//           ref={scrollRef}
//           className="relative overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
//           style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onMouseMove={handleMouseMove}
//         >
//           <div className="flex gap-6 pb-8">
//             {worksList.map((work) => (
//               <div
//                 key={work.id}
//                 className="relative flex-shrink-0 group cursor-pointer"
//                 style={{ width: "413px", height: "548px" }}
//               >
//                 <Image
//                   src={work.image}
//                   alt={work.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg flex flex-col justify-end p-8">
//                   <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                     <h3 className="text-white text-2xl font-bold mb-2">
//                       {work.title}
//                     </h3>
//                     <p className="text-white/90 ">{work.architect}</p>
//                     <button className="text-white flex items-center gap-2 group/btn">
//                       View More
//                       <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">
//                         →
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//         <div className="relative mt-8 mx-auto" style={{ width: "1100px" }}>
//             <div className="h-1 bg-gray-200 rounded-full">
//               <div
//                 className="h-full bg-orange-500 rounded-full transition-all duration-300"
//                 style={{ width: `${Math.max(5, scrollProgress)}%` }}
//               />
//             </div>
//           </div>
//       </div>
//     </section>
//   );
// };

// export default Works;

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const worksList = [
  {
    id: 1,
    title: "LATHA'S FARM HOUSE",
    architect: "Sarah Anderson",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 2,
    title: "URBAN LOFT",
    architect: "James Wilson",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    id: 3,
    title: "MOUNTAIN RETREAT",
    architect: "Emma Davis",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 4,
    title: "GLASS HOUSE",
    architect: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: 5,
    title: "Desert Villa",
    architect: "Laura Martinez",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 6,
    title: "Eco Residence",
    architect: "David Park",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: 7,
    title: "Lakeside Home",
    architect: "Sophie Turner",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    id: 8,
    title: "Forest Cabin",
    architect: "Robert Lee",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const Works = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(scrollPercentage);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="flex flex-col items-center w-full justify-center">
      <div className=" w-11/12 max-w-[1280px] flex items-center flex-col justify-center">
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-[15px]  font-semibold font-montserrat text-secondary mb-2">
            SIGNATURE WORKS
          </h4>
          <h2 className="text-[28px] md:text-[40px] font-montserrat font-normal">Our Previous Works</h2>
        </div>

        <div
          ref={scrollRef}
          className="relative  w-full overflow-x-auto hide-scrollbar cursor-grab "
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-4 md:gap-6 pb-8">
            {worksList.map((work) => (
              <div
                key={work.id}
                className="relative overflow-hidden w-11/12 h-[540px] max-w-[413px] flex-shrink-0 group cursor-pointer"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-11/12 max-w-[370px] h-[400px]  opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-gradient-to-b from-gradientStart to-gradientEnd py-12 w-full h-full flex flex-col mt-11  items-center justify-center gap-[120px] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="relative mt-[70px]">
                    <p className="text-white font-montserrat font-medium   text-[20px]  mb-4 text-center">
                      {work.title}
                    </p>
                    <p className="text-white/90 font-montserrat font-medium   text-[18px] mb-6 text-center">
                      {work.architect}
                    </p>
                    </div>
                    <button className="text-white font-montserrat font-medium   text-[17px] flex items-center gap-2 group/btn rounded-full  transition-colors duration-300">
                      View More
                      <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 mx-auto w-11/12 max-w-[1100px]">
          <div className="h-1 bg-gray-200 max-w-[1100px] w-11/12 rounded-full">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${Math.max(5, scrollProgress)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
