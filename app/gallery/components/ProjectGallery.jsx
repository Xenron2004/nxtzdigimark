"use client";
// components/ProjectGallery.jsx
import { useState } from "react";

const ProjectGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const zoomStep = 0.2;

  const openFullscreen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsFullscreen(true);
    setZoom(1); // Reset zoom when opening a new image
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + zoomStep, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - zoomStep, 1));

  const handleWheelZoom = (e) => {
    if (isFullscreen) {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    }
  };

  return (
    <div className="mt-12 w-full">
      <h2 className="text-2xl font-montserrat font-bold mb-6"> Gallery</h2>
      
      {/* Image Grid - 4 images per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col">
            <div 
              className="relative h-48 md:h-56 overflow-hidden cursor-pointer  shadow-md"
              onClick={() => openFullscreen(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
          onWheel={handleWheelZoom}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full Image"
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            />

            {/* Zoom Controls */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={zoomOut}
                className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md shadow-lg"
              >
                ➖ Zoom Out
              </button>
              <button
                onClick={zoomIn}
                className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md shadow-lg"
              >
                ➕ Zoom In
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md shadow-lg text-lg"
              onClick={() => {
                setIsFullscreen(false);
                setZoom(1);
              }}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;