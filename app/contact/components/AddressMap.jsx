import React from "react";

const AddressMap = () => {
  return (
    <section className="flex items-center flex-col md:flex-row gap-10 justify-between max-w-7xl w-full">
      {/* Left map Rajahmundry studio */}
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-[24px] font-montserrat font-medium">
            Head Office: Vizag Studio
          </h2>
          <p className="font-montserrat font-normal text-bodyText text-[16px] ">
            TOSTEM Studio, 4th Floor, Chandu Central, D Mart Service Road, Near
            Car Shed Junction ,Madhurawada, Visakhapatnam – 530041
          </p>
        </div>
        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3437.5833420951053!2d83.3525284!3d17.8079865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b2eacc6c991%3A0x85b359e6cd125115!2sTOSTEM%20STUDIO%20-%20NXTZEN!5e1!3m2!1sen!2sin!4v1737200536579!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right Map */}
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-[24px] font-montserrat font-medium">
            Head Office: Vizag Studio
          </h2>
          <p className="font-montserrat font-normal text-bodyText text-[16px] ">
            TOSTEM Studio, 4th Floor, Chandu Central, D Mart Service Road, Near
            Car Shed Junction ,Madhurawada, Visakhapatnam – 530041
          </p>
        </div>
        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3437.5833420951053!2d83.3525284!3d17.8079865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b2eacc6c991%3A0x85b359e6cd125115!2sTOSTEM%20STUDIO%20-%20NXTZEN!5e1!3m2!1sen!2sin!4v1737200536579!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AddressMap;
