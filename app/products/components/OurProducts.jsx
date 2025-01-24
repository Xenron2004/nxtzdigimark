"use client"; 
import Link from "next/link";
import Image from "next/image";


const OurProducts = ({
  index,
  imageSrc,
  heading,
  description,
  availableDesigns,
  series,
  link
}) => {
  const isRightAligned = index % 2 !== 0;
 


  return (

    <div
      className={`flex flex-col md:flex-row ${
        isRightAligned ? "md:flex-row-reverse" : ""
      } items-center gap-8 md:gap-12`}
    >
      {/* Image Section */}

      <div className="max-w-[630px] w-full max-h-[650px] h-full">
        <Image
          className=" w-full object-cover    h-full"
          src={imageSrc}
          alt={heading}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col max-w-[600px] w-full gap-6 text-left">
        <h2 className="text-[32px] text-headingText font-medium uppercase font-montserrat">
          {heading}
        </h2>
        <p className="text-[16px] font-normal  font-montserrat">
          {description}
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-[20px] uppercase font-medium text-secondary font-montserrat">
              Available Designs
            </h3>
            <p className="text-[16px] font-normal text-bodyText font-montserrat">
              {availableDesigns}  <span className="text-primary">and many more...</span>
            </p>
          </div>

            {series && (
            <div>
              <h3 className="text-[20px] uppercase font-medium font-montserrat">Our Series</h3>
              <p className="text-[16px] font-normal font-montserrat">{series}</p>
            </div>
          )}
        </div>

        {link && (
          <Link href={link} passHref>
            <button className="bg-primary mt-[10px] text-white text-16px px-6 py-3 hover:bg-orange-600 transition-all w-fit font-montserrat">
              View Products
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
