import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParallaxImage from "../components/ParallaxImage";
import StayTouch from "@/app/contact/components/StayTouch";
import VisitOffice from "@/app/contact/components/VisitOffice";
import One from "../assets/cloveTechnologies/1.jpg";
import Five from "../assets/cloveTechnologies/5.jpg";
import Six from "../assets/cloveTechnologies/6.jpg";
import Three from "../assets/cloveTechnologies/3.jpg";
import Four from "../assets/cloveTechnologies/4.jpg";
import Two from "../assets/cloveTechnologies/2.jpg";
import Kone from "../assets/Keirthi Builders-Kay Space Apartments/1.jpg";
import Ktwo from "../assets/Keirthi Builders-Kay Space Apartments/2.jpg"; 
import Kthree from "../assets/Keirthi Builders-Kay Space Apartments/3.jpg"; 
import Kfour from "../assets/Keirthi Builders-Kay Space Apartments/4.jpg";
import Kfive from "../assets/Keirthi Builders-Kay Space Apartments/5.jpg";
import Ksix from "../assets/Keirthi Builders-Kay Space Apartments/6.jpg";
import Kseven from "../assets/Keirthi Builders-Kay Space Apartments/7.jpg";
import Twotwindow from "../assets/Sastry/1.jpg";
import Mtwo from "../assets/Sastry/2.jpg";
import Doorfourtrackhandle from "../assets/Sastry/3.jpg";
import Grantsfourtrack from "../assets/Sastry/7.jpg";
import Villaone from "../assets/Sastry/4.jpg";
import Windowtwotrackhandle from "../assets/Sastry/5.jpg";
import Windowfourtrack from "../assets/Sastry/6.jpg";
import Mrone from "../assets/Mrs. Suhasini/1.jpg";
import Mrtwo from "../assets/Mrs. Suhasini/2.jpg";
import Mrthree from "../assets/Mrs. Suhasini/3.jpg";
import Mrfour from "../assets/Mrs. Suhasini/4.jpg";
import Mrfive from "../assets/Mrs. Suhasini/5.jpg";
import Mrsix from "../assets/Mrs. Suhasini/6.jpg";
import Mrseven from "../assets/Mrs. Suhasini/7.jpg";






const projectDetails = {
  "clove-technologies": {
    title: "Clove Technologies",
    description:
      "Designed and installed premium aluminum entrance doors and parking entrance doors for a modern office space. The sleek, durable aluminum frames provide a sophisticated look while ensuring security and longevity. The entrance doors enhance the office's aesthetic appeal, while the parking entrance doors offer seamless access and robust functionality.",
    client: "Clove Technologies",
    category: "Aluminium Doors & Windows",
    images: [One.src, Five.src, Six.src, Three.src, Two.src, Four.src],
  },


  "kay-space-apartments": {
    title: "Keirthi Builders",
    description:
      "Designed and installed premium aluminum entrance doors for Keirthi Builders' Kay Space office. The sleek, durable aluminum frames enhance security, functionality, and modern aesthetics.",
    client: "Keirthi Builders",
    category: "Aluminium Doors & Windows",
    images: [Kone.src, Kfive.src, Ksix.src, Kthree.src, Ktwo.src, Kfour.src, Kseven.src],
  },

  "mr-sastry": {
    title: "Mr. Sastry",
    description:
      "Designed and installed high-quality aluminum windows, including 4-track and 2-track sliding windows, Grand 4-track windows, and 2-track handled windows. These durable and sleek designs enhance ventilation, functionality, and aesthetics while ensuring smooth operation and long-lasting performance.",
    client: "Mr. Sastry",
    category: "Aluminium Doors & Windows",
    images: [Mtwo.src, Twotwindow.src,Grantsfourtrack.src, Doorfourtrackhandle.src, Villaone.src, Windowtwotrackhandle.src, Windowfourtrack.src, Windowfourtrack.src],
  },
  
  "mrs-suhasini": {
    title: "Mrs. Suhasini",
    description:
      "Installed premium aluminum windows, offering a sleek design, durability, and smooth functionality. The windows enhance ventilation, natural light, and overall aesthetics while ensuring long-lasting performance.",
    client: "Mrs. Suhasini",
    category: "Aluminium Doors & Windows",
    images: [Mrtwo.src, Mrthree.src,Mrfour.src, Mrfive.src, Mrsix.src, Mrseven.src],
  },



};


// Generate static parameters for SSG
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

const ProjectDetail = async ({ params }) => {
  // Await the params object to ensure proper handling
  const { slug } = await params;

  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-montserrat font-semibold text-gray-700">
          Project not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[80px] bg-white">
      <div className="max-w-7xl w-full flex flex-col items-start justify-center px-4 sm:px-6  py-20">
        <Link
          href="/portfolio"
          className="inline-flex text-[16px] font-montserrat text-primary items-center  hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 font-montserrat   mr-2" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
                {project.title}
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-montserrat font-semibold mb-2">
                    DESCRIPTION:
                  </h2>
                  <p className="text-gray-600 font-montserrat text-[17px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-montserrat font-semibold mb-2">
                    CLIENT:
                  </h2>
                  <p className="text-gray-600 font-montserrat text-[17px]">
                    {project.client}
                  </p>
                </div>

                {/* <div>
                  <h2 className="text-lg font-montserrat font-semibold mb-2">
                    CATEGORY:
                  </h2>
                  <p className="text-gray-600 font-montserrat text-[17px]">
                    {project.category}
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden" style={{ height: "450px" }}>
            <ParallaxImage images={project.images} />
          </div>
        </div>
        <div className="flex mt-[80px]  w-full items-start justify-between  flex-col gap-[80px]">
          <StayTouch />
          <VisitOffice />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
