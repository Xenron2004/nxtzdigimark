// import { useState } from "react";

// export default function Features() {
//   const [selectedFeature, setSelectedFeature] = useState(0);

//   const features = [
//     {
//       id: 0,
//       title: "Smooth and Durable Gliding Mechanism",
//       description:
//         "Our mechanism ensures seamless operation, providing long-lasting and smooth gliding.",
//     },
//     {
//       id: 1,
//       title: "Large Glass Panels for Natural Light",
//       description:
//         "Enjoy expansive views and brighter spaces with large, durable glass panels.",
//     },
//     {
//       id: 2,
//       title: "Excellent Noise Insulation",
//       description:
//         "Our design significantly reduces external noise, ensuring a quieter living space.",
//     },
//     {
//       id: 3,
//       title: "Slim Profiles for a Modern Aesthetic",
//       description:
//         "The slim profiles deliver a sleek and contemporary look to complement modern architecture.",
//     },
//     {
//       id: 4,
//       title: "Customizable Configurations",
//       description:
//         "Personalize your setup with multi-track options tailored to your needs.",
//     },
//   ];



//   return (
//     <div className="flex items-center justify-center h-full w-full">
//       <div className="relative w-4/5 max-w-xl text-center">
//         <h2 className="text-3xl font-bold mb-6">Features</h2>
//         <div className="relative flex justify-center items-center">
//           <div className="absolute inset-0 flex justify-center items-center">
//             <div className="text-center">
//               <h3 className="text-xl font-semibold">{features[selectedFeature].title}</h3>
//               <p className="text-gray-600 mt-2">{features[selectedFeature].description}</p>
//             </div>
//           </div>
//           <div className="w-full h-full flex justify-center items-center">
//             <div className="relative w-72 h-72 rounded-full border border-gray-300">
//               {features.map((feature, index) => (
//                 <button
//                   key={index}
//                   className={`absolute p-4 rounded-full border-2 ${
//                     selectedFeature === feature.id
//                       ? "bg-orange-500 border-orange-500"
//                       : "bg-white border-gray-300"
//                   }`}
//                   style={{
//                     transform: `rotate(${72 * index}deg) translate(120px) rotate(-${72 * index}deg)`,
//                   }}
//                   onClick={() => setSelectedFeature(feature.id)}
//                 >
//                   <span
//                     className={`text-xl ${
//                       selectedFeature === feature.id
//                         ? "text-white"
//                         : "text-orange-500"
//                     }`}
//                   >
//                     {["⏳", "🔆", "🔇", "📏", "⚙️"][index]}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
       
//       </div>
//     </div>
//   );
// }



















"use client";

import { useState } from "react";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Smooth and Durable Gliding Mechanism",
      description:
        "Our mechanism ensures seamless operation, providing long-lasting and smooth gliding.",
      icon: "⏳",
    },
    {
      id: 1,
      title: "Large Glass Panels for Natural Light",
      description:
        "Enjoy expansive views and brighter spaces with large, durable glass panels.",
      icon: "🔆",
    },
    {
      id: 2,
      title: "Excellent Noise Insulation",
      description:
        "Our design significantly reduces external noise, ensuring a quieter living space.",
      icon: "🔇",
    },
    {
      id: 3,
      title: "Slim Profiles for a Modern Aesthetic",
      description:
        "The slim profiles deliver a sleek and contemporary look to complement modern architecture.",
      icon: "📏",
    },
    {
      id: 4,
      title: "Customizable Configurations",
      description:
        "Personalize your setup with multi-track options tailored to your needs.",
      icon: "⚙️",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      
      <div className="relative w-[300px] h-[300px] flex justify-center items-center">
        {/* Center Circle */}
        <div className="absolute flex flex-col items-center">
          <h3 className="text-xl font-semibold">{features[selectedFeature].title}</h3>
          <p className="text-gray-600 mt-2 text-sm text-center">
            {features[selectedFeature].description}
          </p>
        </div>

        {/* Circular Icons */}
        <div className="relative w-[300px] h-[300px]">
          {features.map((feature, index) => {
            const angle = (index / features.length) * 360; // Calculate angle
            const x = Math.cos((angle * Math.PI) / 180) * 120; // X-Coordinate
            const y = Math.sin((angle * Math.PI) / 180) * 120; // Y-Coordinate

            return (
              <button
                key={index}
                className={`absolute w-14 h-14 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  selectedFeature === feature.id
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-300"
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                onClick={() => setSelectedFeature(feature.id)}
              >
                <span
                  className={`text-2xl ${
                    selectedFeature === feature.id
                      ? "text-white"
                      : "text-orange-500"
                  }`}
                >
                  {feature.icon}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
