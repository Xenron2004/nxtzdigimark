"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const productCategories = [
  {
    id: "aluminium-doors",
    title: "Aluminium Doors",
    active: true,
    products: [
      {
        id: 1,
        name: "Grants",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218",
        description: "Grants is TOSTEM's Flagship series. Its innovative design results in...",
      },
      {
        id: 2,
        name: "Tostem+Aluk",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607",
        description: "Premium quality aluminium doors for modern homes...",
      },
      {
        id: 3,
        name: "We70",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
        description: "Contemporary design meets functionality...",
      },
      {
        id: 4,
        name: "We Plus",
        image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e",
        description: "Sleek Design which fulfills the needs of modern architect without...",
      },
    ],
  },
  {
    id: "aluminium-windows",
    title: "Facades",
    products: [
      {
        id: 5,
        name: "Premium Windows",
        image: "https://images.unsplash.com/photo-1509644851345-3f82e5eaac86",
        description: "High-end aluminium windows with superior insulation...",
      },
      // Add more window products...
    ],
  },
  {
    id: "facades",
    title: "Aluminium windows",
    products: [
      {
        id: 9,
        name: "Modern Facades",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        description: "Contemporary facade solutions for modern architecture...",
      },
      // Add more facade products...
    ],
  },
  {
    id: "internal-partitions",
    title: "Internal Partitions",
    products: [
      {
        id: 13,
        name: "Office Partitions",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Elegant internal partitions for office spaces...",
      },
      {
        id: 14,
        name: "Office Partitions",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Elegant internal partitions for office spaces...",
      },
      {
        id: 15,
        name: "Office Partitions",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Elegant internal partitions for office spaces...",
      },
      {
        id: 16,
        name: "Office Partitions",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Elegant internal partitions for office spaces...",
      },
      // Add more partition products...
    ],
  },
  {
    id: "entrance-doors",
    title: "Entrance Doors",
    products: [
      {
        id: 17,
        name: "Grand Entrance",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
        description: "Make a statement with our grand entrance doors...",
      },
      // Add more entrance door products...
    ],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("aluminium-doors");

  const activeProducts = productCategories.find(
    (category) => category.id === activeCategory
  )?.products;

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="w-11/12 flex flex-col items-center justify-center max-w-[1280px] ">
        <div className="text-center flex items-center justify-center flex-col mb-16">
          <h2 className="text-[15px] text-secondary font-semibold font-montserrat uppercase tracking-wider mb-2">
            OUR PRODUCTS
          </h2>
          <h1 className="text-[40px]  md:text-5xl font-montserrat max-w-[630px] w-full font-normal mb-4">
            Modern Aluminium & Door Solutions
          </h1>
        </div>

        <section className="flex flex-col md:flex-row max-w-[1280px] h-auto w-full items-center justify-center">
          <div className="w-auto ">
            {/* Category Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-start max-w-[1200px]  lg:grid-cols-5  font-montserrat font-medium  justify-center gap-4 mb-12">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-3 text-[15px] md:text-md font-montserrat font-medium lg:text-[18px] transition-all duration-300 border-b-2 hover:text-orange-500 ${
                    activeCategory === category.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {category.title}
                </button>
              ))} 
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeProducts?.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden  "
                >
                  <div className="relative h-[548px] w-full ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-6  py-10 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm mb-4">{product.description}</p>
                      <button className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
                        View More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}