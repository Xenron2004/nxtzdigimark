import Image from "next/image";
import BgSection from "../../public/assets/Bg_Sections.png";
import MainSection from "./components/MainSection";
import AboutNxt from "./components/AboutNxt";
import Products from "../home/components/Products";
import Gallery from "../home/components/Gallery";

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
