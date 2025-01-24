"use client";
import { useState } from "react";
import Image from "next/image";
import { awnSeriesData } from "../constants/ProductsData";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-100  p-4 shadow-sm">
      {/* Product Image */}
      <div className="max-w-[390px] max-h-[300px] w-full h-11/12">
        <Image
          src={product.imageSrc}
          alt={product.title}
          //   width={413}
          //   height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-[20px] font-medium text-headingText font-montserrat text-start mt-5">
        {product.title}
      </h3>

      {/* Product Details */}
      <div className="mt-3 font-montserrat  text-[15px] text-gray-700">
        {Object.entries(product.details).map(([key, value], index) => (
          <p key={index} className="grid grid-cols-2 justify-between gap-8">
            <span className="font-medium font-montserrat">{key}:</span>
            <span className="font-normal text-[14px] text-[#949596]">
              {value}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

const AwnProductCard = () => {
  const [selectedSeries, setSelectedSeries] = useState("ATIS");

  const currentSeries = awnSeriesData.find(
    (series) => series.series === selectedSeries
  );

  return (
    <div className="max-w-[1280px]  w-full  py-8">
      {/* Series Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        {awnSeriesData.map((series) => (
          <button
            key={series.series}
            className={`px-4 md:px-6 py-2 font-medium font-montserrat text-[16px]  ${
              selectedSeries === series.series
                ? "bg-primary text-white"
                : "bg-gray-100 text-bodyText"
            }`}
            onClick={() => setSelectedSeries(series.series)}
          >
            {series.series}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentSeries.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AwnProductCard;
