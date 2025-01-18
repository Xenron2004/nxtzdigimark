import React from "react";
import ContactCard from "./ContactCard";
import { MdCall, MdEmail, MdMessage, MdWhatsapp } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

const contactCardData = [
  {
    icon: <MdCall size={20} color="#F36224" />, // Example icon
    heading: "Contact Us",
    bodyText:
      "Give us a call to explore the possibilities and start a meaningful partnership.",
    links: [{ text: "Call: +1 234 567 890", url: "tel:+1234567890" }],
    iconBgColor: "",
  },
  {
    icon: <MdEmail size={20} color="#f36224" />, // Example icon
    heading: "Email Us",
    bodyText: "Connect with us easily through email communication",
    links: [{ text: "info@example.com", url: "mailto:info@example.com" }],
    iconBgColor: "",
  },
  {
    icon: <FaBuilding size={20} color="#f36224" />, // Example icon
    heading: "Visit Us",
    bodyText: "Visit our location for an up-close look at our offerings.",
    links: [
      { text: "Rajahmundry Studio", url: "https//:www.goole.com" },
      { text: "Vizag Studio", url: "https//:www.goole.com" },
    ],
    iconBgColor: "",
  },
  {
    icon: <MdMessage size={20} color="#f36224" />, // Example icon
    heading: "Connect with Us",
    bodyText: "Connect with us on social media to stay updated!.",
    links: [
      { text: "LinkedIn", url: "https://linkedin.com" },
      { text: "Instagram", url: "https://instagram.com" },
      { text: "Twitter", url: "https://twitter.com" },
      { text: "Facebook", url: "https://facebook.com" },
    ],
    iconBgColor: "",
  },
];

const ContactList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full gap-y-6 items-center justify-between">
      <div className="flex flex-col items-start bg-customGray gap-4 text-start w-full p-6 max-w-[413px] h-full max-h-[180px] bg-bgCard transition-all duration-300">
        <div className="flex items-center justify-between gap-8">
          <div
            className={` flex items-center justify-center rounded-full transition-all duration-0`}
          >
            <MdWhatsapp size={72} color="#25D366" />
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[20px] text-headingText font-medium font-montserrat">
              Chat with us
            </h3>
            <p className="font-montserrat hidden md:block font-normal text-bodyText text-[16px]">
              Reach out to us instantly!
            </p>
            <button className="max-w-[192px] px-4 bg-[#25D366] text-[18px] text-white font-montserrat font-medium w-full h-[50px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
      {contactCardData.map((card, index) => (
        <ContactCard
          key={index}
          icon={card.icon}
          heading={card.heading}
          bodyText={card.bodyText}
          links={card.links}
          iconBgColor={card.iconBgColor}
        />
      ))}
    </div>
  );
};

export default ContactList;
