// import React from "react";

// const DownloadBrochure = () => {
//   return (
//     <div className="fixed left-4 top-1/2 transform -translate-y-1/2">
//       <a
//         href="/Tostem_Brochure flyer.pdf"
//         download
//         className="bg-primary text-white px-4 py-2 rounded shadow-lg hover:bg-secondary transition-all duration-300"
//       >
//         Download Brochure
//       </a>
//     </div>
//   );
// };

// export default DownloadBrochure;

















import React from "react";

const DownloadBrochure = () => {
  return (
    <div className="fixed left-0 top-1/2 transform z-50">
      <a
        href="/brochure.pdf"
        download
        className="bg-primary text-white px-4 py-2 rounded-r-lg shadow-lg hover:secondary transition-all duration-300"
      >
        Download Brochure
      </a>
    </div>
  );
};

export default DownloadBrochure;
