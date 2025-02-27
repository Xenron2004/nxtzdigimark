import Image from "next/image";
// import BgSection from "../../public/assets/Bg_Sections.png";
import MainSection from "./components/MainSection";
import AboutNxt from "./components/AboutNxt";
// import Products from "../home/components/Products";
import Gallery from "../home/components/Gallery";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about NXTZEN Consultant's Pvt Ltd’s expertise in aluminium doors, windows, and architectural solutions. Delivering high-quality products for modern spaces.",
  keywords:
    "About NXTZEN Consultant's Pvt Ltd, aluminium experts, architectural aluminium, aluminium solutions, premium aluminium doors, aluminium windows",
};


const About = () => {
  return (
    <section className="flex-col mt-[90px] h-auto flex gap-[100px] items-center">
      <MainSection />
      <AboutNxt />

      <Gallery />
    </section>
  );
};

export default About;
