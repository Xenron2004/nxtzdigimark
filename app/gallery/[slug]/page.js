
// ProjectDetail.jsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StayTouch from "@/app/contact/components/StayTouch";
import VisitOffice from "@/app/contact/components/VisitOffice";
import ProjectGallery from "../components/ProjectGallery";
import Aone from "../images/ATIS/1.jpg";
import Atwo from "../images/ATIS/2.jpg";
import Athree from "../images/ATIS/3.jpg";
import Afour from "../images/ATIS/4.jpg";
import Wone from "../images/WE PLUS/1.jpg";
import Wtwo from "../images/WE PLUS/2.jpg";   
import Wthree from "../images/WE PLUS/3.jpg";
import Weone from "../images/WE 70/1.jpg";
import Wetwo from "../images/WE 70/2.jpg";
import Wethree from "../images/WE 70/3.jpg";
import Gone from "../images/GRANTS/1.jpg";
import Gtwo from "../images/GRANTS/2.jpg";
import Gthree from "../images/GRANTS/3.jpg";  
import Gfour from "../images/GRANTS/4.jpg";
import Ione from "../images/INTERIOR SERIES/1.jpg";




const projectDetails = {
  "atis": {
    title: "ATIS Series Gallery",
    images: [
      {
        url: Aone.src,
        title: "ATIS",
      },
      {
        url: Atwo.src,
        title: "Living Room",
      },
      {
        url: Athree.src,
        title: "Kitchen",
      },
      {
        url: Afour.src,
        title: "Balcony",
      },
   
    ],
  },

  "we-plus": {
    title: "WE Plus Series Gallery",
    images: [
      {
        url: Wone.src,
        title: "ATIS",
      },
      {
        url: Wtwo.src,
        title: "Living Room",
      },
      {
        url: Wthree.src,
        title: "Kitchen",
      },  
    ],
  },

  "we-70": {
    title: "WE70 Series Gallery",
    images: [
      {
        url: Weone.src,
        title: "ATIS",
      },
      {
        url: Wetwo.src,
        title: "Living Room",
      },
      {
        url: Wethree.src,
        title: "Kitchen",
      },  
    ],
  },
  
  "grants": {
    title: "Grants Series Gallery",
    images: [
      {
        url: Gone.src,
        title: "ATIS",
      },
      {
        url: Gtwo.src,
        title: "Living Room",
      },
      {
        url: Gthree.src,
        title: "Kitchen",
      },  
      {
        url: Gfour.src,
        title: "Balcony",
      }
    ],
  },

  "interior-series": {
    title: "Interior Series Gallery",
    images: [
      {
        url: Ione.src,
        title: "ATIS",
      },
   
    ],
  },

};

// Generate static parameters for SSG
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

const ProjectDetail = ({ params }) => {
  const { slug } = params;
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-montserrat font-semibold text-gray-700">
          Gallery not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[80px] bg-white">
      <div className="max-w-7xl w-full flex flex-col items-start justify-center px-4 sm:px-6 py-20">
        <Link
          href="/gallery"
          className="inline-flex text-[16px] font-montserrat text-primary items-center hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 font-montserrat mr-2" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
                {project.title}
              </h1>
             
            </div>
          </div>

          {/* <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: "450px" }}>
            <img 
              src={project.images[0].url} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>

        {/* Add the client-side image gallery component here */}
        <ProjectGallery images={project.images} />

        <div className="flex mt-[80px] w-full items-start justify-between flex-col gap-[80px]">
          <StayTouch />
          <VisitOffice />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
