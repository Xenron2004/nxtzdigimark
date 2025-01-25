import React from "react";
import HomeGlass from "../../../public/assets/Home_Glass.png";
import Image from "next/image";
import HotelFloor from "../../../public/assets/Hotel_floor.png";
import BlueGate from "../../../public/assets/Blue_Gate.png";
import VillaNight from "../../../public/assets/Villa_night.png";
import Link from "next/link";

const Gallery = () => {
  return (
    <section className="flex  items-start justify-center">
      <div className="flex flex-wrap  items-start gap-5 justify-start  md:justify-center  max-w-7xl w-11/12 md:w-full">
        {/* Row 1 section */}
        <div className="text-start flex items-start justify-center flex-col">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            GALLERY
          </h2>
          <h1 className="text-[40px]  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Our Gallery
          </h1>
          <p className="text-[20px] font-montserrat font-normal text-headingText md:max-w-[466px] max-w-full w-full">
            NxtZen products combine elegance and reliability, helping families
            create homes that meet their needs and inspire peace.
          </p>
          <div className="items-center mt-5 justify-center flex">
            <Link href="/portfolio">
            <button className="font-montserrat mt-[32px] bg-primary text-white text-[16px] tracking-[2%] px-6 py-3">
              View Gallery
            </button>
            </Link>
          </div>

          <div className="max-w-[466px] mt-[67px] w-full h-auto">
            <Image src={HomeGlass} alt="Hero Image" />
          </div>
        </div>

        {/* Row-2 */}
        <div className="flex flex-col items-center gap-5 justify-between">
          <div className=" hidden md:block w-[217px] h-[341px]">
            <Image src={HotelFloor} alt="Hero Image" />
          </div>
          <div className="w-[217px] hidden lg:block h-[220px] object-fill">
            <Image src={BlueGate} alt="Hero Image" />
          </div>
        </div>

        {/* Row-3 */}
        <div className="flex flex-col  items-center  justify-between">
          <div className="hidden lg:block">
            <Image src={VillaNight} alt="Hero Image" />
          </div>
        </div>

         {/* Row-4 */}
         <div className="flex flex-col items-center gap-5 justify-between">
            <div className=" hidden xl:block w-[217px] h-[341px]"><Image src={HotelFloor} alt="Hero Image" /></div>
            <div className=" hidden xl:block w-[217px] h-[220px] object-fill"><Image src={BlueGate} alt="Hero Image" /></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
