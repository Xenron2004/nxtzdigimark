// import Image from "next/image";
// import React from "react";
// import BgSection from "../../public/assets/Bg_Sections.png";

// const About = () => {
//   return (
//     <section>
//       <div className="flex items-center justify-center mt-[100px] w-full h-auto ">
//         <div className="flex items-center text-[40px] w-full  h-[30vh] font-montserrat z-50 justify-center">
//           <Image src={BgSection} alt="Section Background " />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import Image from "next/image";
import BgSection from "../../public/assets/Bg_Sections.png";
import MainSection from "./components/MainSection";
import AboutNxt from "./components/AboutNxt";
import Products from "../home/components/Products";

const About = () => {
  return (
    <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center justify-be+">
      <MainSection />
      <AboutNxt />
      <Products/>
    </section>
  );
};

export default About;
