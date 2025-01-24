"use client";

import Image from "next/image";

const FeatureHighlight = ({ icon, description, imageAlt, className = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 max-w-[652px] w-full  ${className}`}
    >
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt={imageAlt}
          width={100}
          height={90}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-primary font-montserrat font-medium text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureHighlight;
