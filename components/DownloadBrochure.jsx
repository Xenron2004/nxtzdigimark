
'use client';

import { FileDown } from 'lucide-react';

const DownloadBrochure = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 -translate-x-[calc(100%-2.5rem)] hover:translate-x-0 transition-transform duration-300">
      <a
        href="/Tostem_Brochure flyer.pdf"
        download
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-r-lg shadow-lg transition-all duration-300 group [writing-mode:vertical-lr] rotate-180"
      >
        <FileDown className="w-4 h-4 text-white -rotate-90 group-hover:animate-bounce" />
        <span className="font-medium font-montserrat text-white">Download Brochure</span>
      </a>
    </div>
  );
};

export default DownloadBrochure;