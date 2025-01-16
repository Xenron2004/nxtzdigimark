"use client";
import { AwardCard } from "./AwardCard";
import { SectionHeader } from "./SectionHeader";
import Aama from "../../../public/awards/aama.png";
import Astm from "../../../public/awards/astm.png";
import Jis from "../../../public/awards/jis.png";
import Tisi from "../../../public/awards/tisi.png";
import Sgs from "../../../public/awards/sgs.png";
import RedAward from "../../../public/awards/Red_award.png";
import German from "../../../public/awards/German.png";
import IfDesign from "../../../public/assets/if_design.svg";

const awards = [
  {
    title: "German Design Award 2021",
    date: "1 Sep 2021",
    imageUrl: German,
  },
  {
    title: "iF Design Award 2021",
    date: "11 Mar 2021",
    imageUrl: IfDesign,
  },
  {
    title: "Red Dot Award 2021",
    date: "25 Mar 2021",
    imageUrl: RedAward,
  },
];

const certificates = [
  {
    title: "Japanese Industrial Standards (JIS)",
    date: "Valid through 2024",
    imageUrl: Jis,
  },
  {
    title: "ASTM - American Society for Testing and Materials",
    date: "Valid through 2024",
    imageUrl: Astm,
  },
  {
    title: "SGS System Certification ISO 9001",
    date: "Valid through 2025",
    imageUrl: Sgs,
  },
  {
    title: "Thai Industrial Standards Institutes (TISI)",
    date: "Valid through 2024",
    imageUrl: Tisi,
  },
  {
    title: "American Architectural Manufacturers Association (AAMA)",
    date: "Valid through 2024",
    imageUrl: Aama,
  },
];

export default function Awards() {
  return (
    <div className="flex flex-col gap-14 items-center justify-center">
      <div className="max-w-7xl w-11/12 flex flex-col gap-14 items-center justify-center  h-auto ">
        <h1 className=" text-[32px] md:text-[40px] font-normal font-montserrat text-center text-headingText mb-14">
          AWARDS & RECOGNITIONS
        </h1>

        <section className="flex flex-col gap-[46px] items-start w-full justify-center">
          <SectionHeader
            title="AWARDS"
            subtitle="Celebrating Excellence with Prestigious Achievements"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-x-8 gap-y-10 items-start justify-between">
            {awards.map((award, index) => (
              <AwardCard
                key={award.title}
                {...award}
                index={index}
                type="award"
                className="h-auto"
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-[46px]  items-start w-full justify-center">
          <SectionHeader
            title="CERTIFICATES"
            subtitle="Global Certifications that Reflect Our Commitment to Quality"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl w-full lg:grid-cols-4 gap-x-8 gap-y-10 items-start justify-between">
            {certificates.map((certificate, index) => (
              <AwardCard
                key={certificate.title}
                {...certificate}
                index={index}
                type="certificate"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
