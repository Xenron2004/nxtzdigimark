"use client";
import Link from "next/link";
import Image from "next/image";

const FeatureUse = ({
  index,
  imageSrc,
  FeatureDesc,
  UseDesc,
  FeatureHeading,
  UseHeading,
  link,
}) => {
  const isRightAligned = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isRightAligned ? "md:flex-row-reverse" : ""
      } items-center gap-8 md:gap-12`}
    >
      {/* Image Section */}

      <div className="max-w-[630px] w-full max-h-[450px] h-full">
        <Image
          className=" w-full max-w-[630px] max-h-[450px] object-fit    h-full"
          src={imageSrc}
          alt="Feature Image"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col max-w-[600px] w-full gap-6 text-left">
        <div className="flex flex-col gap-8">
            <h1 className="text-[30px] font-montserrat uppercase font-medium text-secondary">Features And Uses</h1>
          <div className="flex flex-col gap-3">
            <h3 className="text-[20px] uppercase font-medium text-secondary font-montserrat">
              {FeatureHeading}
            </h3>
            <p className="text-[16px] font-normal text-bodyText font-montserrat">
              {FeatureDesc}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[20px] uppercase text-secondary font-medium font-montserrat">
              {UseHeading}
            </h3>
            <p className="text-[16px] font-normal font-montserrat">{UseDesc}</p>
          </div>
        </div>

        {link && (
          <Link href="/contact">
            <button className="bg-primary uppercase mt-[10px] text-white text-16px px-6 py-3 hover:bg-orange-600 transition-all w-fit font-montserrat">
              Enquire Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeatureUse;
