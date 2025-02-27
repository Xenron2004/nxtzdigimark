"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Clove from "../../portfolio/assets/cloveTechnologies/5.jpg";
import Kay from "../../portfolio/assets/Keirthi Builders-Kay Space Apartments/4.jpg";
import Sastry from "../../portfolio/assets/Sastry/5.jpg";
import Suhasini from "../../portfolio/assets/Mrs. Suhasini/7.jpg";
import Link from "next/link";

const worksList = [
  {
    id: 1,
    title: "Clove Technologies",
    architect: "",
    image: Clove,
    portfolioUrl: "/portfolio/clove-technologies",
  },
  {
    id: 2,
    title: "Kay Space Apartments",
    architect: "Keirthi Builders",
    image: Kay,
    portfolioUrl: "/portfolio/kay-space-apartments",
  },
  {
    id: 3,
    title: "Mr Sastry",
    architect: "",
    image: Sastry,
    portfolioUrl: "/portfolio/mr-sastry",
  },
  {
    id: 4,
    title: "Mrs. Suhasini",
    architect: "",
    image: Suhasini,
    portfolioUrl: "/portfolio/mrs-suhasini",
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
          <h2 className="text-[28px] md:text-[40px] font-montserrat font-normal">
            Our Previous Works
          </h2>
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
                      <p className="text-white font-montserrat font-medium uppercase   text-[24px]  mb-4 text-center">
                        {work.title}
                      </p>
                      <p className="text-white/90 font-montserrat font-medium   text-[18px] mb-6 text-center">
                        {work.architect}
                      </p>
                    </div>
                    <Link href={work.portfolioUrl}>
                      <button className="text-white font-montserrat font-medium   text-[17px] flex items-center gap-2 group/btn rounded-full  transition-colors duration-300">
                        View More
                        <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </Link>
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
