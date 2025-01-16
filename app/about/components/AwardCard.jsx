// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaRegCalendarAlt } from "react-icons/fa";

// export function AwardCard({ title, date, imageUrl, index, type = "award" }) {
//   const cardStyles =
//     type === "award" ? "  max-w-[400px] max-h-[240px] " : "  max-w-[305px] max-h-[225px]";

//   // const imageStyles = type ==="award" ? "w-270px h-[227px]" : "w-[126px] h-[126px]";

//   const imageWidth = type === "award" ? 270 : 126; // Width in px
//   const imageHeight = type === "award" ? 230 : 126; // Height in px

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.2,
//         ease: "easeOut",
//       }}
//       className="flex flex-col items-start"
//     >
//       <div className={`${cardStyles} bg-white  shadow-custom overflow-hidden`}>
//         <div className="w-full h-full flex items-center justify-center ">
//           <div className="relative">
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={imageWidth}
//               height={imageHeight}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//       <h3 className="text-[20px] font-medium font-montserrat tracking-[-1%] text-headingText text-start mt-7">
//         {title}
//       </h3>
//       {type === "award" && (
//         <div className="flex items-start gap-2 mt-4 text-sm text-gray-500">
//           <FaRegCalendarAlt size={16} className="text-[#888888]" />{" "}
//           {/* Calendar Icon */}
//           <span className="font-montserrat font-normal text-[14px] text-[#888888]">{date}</span>
//         </div>
//       )}
//       {/* <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
//         {title}
//       </h3> */}
//     </motion.div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

export function AwardCard({ title, date, imageUrl, index, type = "award" }) {
  const cardStyles =
    type === "award"
      ? "  md:max-w-[413px] p-8  max-h-[300px] w-full h-auto"
      : "w-full h-auto  md:max-w-[305px] p-8 md:p-6 max-h-[225px]";

  // const imageStyles = type ==="award" ? "w-270px h-[227px]" : "w-[126px] h-[126px]";

  const imageWidth = type === "award" ? 300 : 126;
  const imageHeight = type === "award" ? 200 : 126;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="flex flex-col items-start"
    >
      <div className={` bg-white ${cardStyles} shadow-custom overflow-hidden`}>
        <div className={`w-full h-full flex items-center justify-center`}>
          <Image
            src={imageUrl}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-[20px] font-medium font-montserrat w-full tracking-[-1%] text-headingText text-start mt-7">
        {title}
      </h3>
      {type === "award" && (
        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500">
          <FaRegCalendarAlt size={16} className="text-[#888888]" />{" "}
          {/* Calendar Icon */}
          <span className="font-montserrat font-normal text-[14px] text-[#888888]">
            {date}
          </span>
        </div>
      )}
      {/* <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
        {title}
      </h3> */}
    </motion.div>
  );
}
