import React from "react";
import ContactList from "./ContactList";

const StayTouch = () => {
  return (
    <section className="flex flex-col items-start max-w-7xl w-full justify-start gap-[100px]">
      {/* Stay in touch section */}
      <div className="flex flex-col max-w-7xl w-full gap-14 items-start justify-start">
        <div className="flex flex-col gap-6 items-start max-w-7xl justify-start w-full ">
          <h1 className="font-montserrat font-medium items-start text-headingText text-[40px] ">
            STAY IN TOUCH
          </h1>
          <p className="font-montserrat text-[18px] font-normal text-bodyText">
            Reach out to us for inquiries, support, or feedback.We're here to
            help
          </p>
        </div>

        <ContactList />
      </div>
    </section>
  );
};

export default StayTouch;
