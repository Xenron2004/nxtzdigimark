// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// const ParallaxImage = ({ images }) => {
//   const imagesContainerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (imagesContainerRef.current) {
//         const scrollPosition = window.scrollY;
//         imagesContainerRef.current.style.transform = `translateY(-${scrollPosition * 0.4}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div ref={imagesContainerRef} className="space-y-6 transition-transform duration-300">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className="relative h-[400px] w-full rounded-lg overflow-hidden"
//         >
//           <Image
//             src={image}
//             alt={`Project image ${index + 1}`}
//             fill
//             className="object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ParallaxImage;



// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// const ParallaxImage = ({ image, content }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const section = sectionRef.current;
//         const sectionOffsetTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const scrollPosition = window.scrollY;
//         const windowHeight = window.innerHeight;

//         if (scrollPosition >= sectionOffsetTop - windowHeight && scrollPosition <= sectionOffsetTop + sectionHeight) {
//           const progress = (scrollPosition - (sectionOffsetTop - windowHeight)) / (sectionHeight + windowHeight);
//           section.style.transform = `translateY(-${progress * 50}%)`;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
//       <div className="sticky top-0 h-screen">
//         <Image
//           src={image}
//           alt="Parallax Image"
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 p-8 bg-gray-50 shadow-lg">
//         {content}
//       </div>
//     </div>
//   );
// };

// export default ParallaxImage;










































"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ParallaxImage = ({ images }) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-gray-50">
      <motion.div
        className="space-y-6"
        initial={{ y: "100%" }} // Start off-screen (bottom)
        animate={{ y: "-100%" }} // Move off-screen (top)
        transition={{
          duration: images.length * 6, // Adjust duration based on the number of images
          ease: "easeInOut", // Smooth easing
          repeat: Infinity, // Infinite loop
        }}
      >
        {images.concat(images).map((image, index) => (
          // Duplicate images to achieve the infinite loop effect
          <div
            key={index}
            className="relative h-[400px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Sliding image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxImage;



