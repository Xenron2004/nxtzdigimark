import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTopBottom from "@/components/ScrollToTopBottom";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import DownloadBrochure from "@/components/DownloadBrochure";
import Script from 'next/script';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NXTZEN Consultant's Pvt Ltd",
    template: "%s - NXTZEN Consultant's Pvt Ltd",
  },
  description:
    "Discover NXTZEN: Innovative, stylish, and sustainable housing solutions with premium fenestration products. Elevate your lifestyle with cutting-edge technology and exceptional value.",
  metadataBase: new URL("https://nxtzengroup.in"),
  keywords: [
    "aluminium doors",
    "windows and doors",
    "aluminium windows",
    "modern fenestration",
    "premium doors",
    "sustainable housing solutions",
    "NXTZEN Consultant's Pvt Ltd",
    "aluminium doors in India",
    "windows manufacturers in Andhra Pradesh",
    "best fenestration solutions",
    "high-quality doors and windows",
    "energy-efficient doors",
    "architectural fenestration",
    "residential doors",
    "commercial aluminium windows",
    "customized doors and windows",
    "soundproof windows",
    "luxury fenestration",
    "industrial doors and windows",
    "low-maintenance aluminium doors",
    "modern glass doors",
    "home improvement solutions",
    "durable doors and windows",
    "exterior aluminium doors",
    "sliding doors and windows",
    "double-glazed windows",
    "smart home doors",
    "aluminium door installation",
    "Andhra Pradesh aluminium company",
    "high-performance windows",
  ],
  author: "NXTZEN Consultant's Pvt Ltd",

  openGraph: {
    type: "website",
    url: "https://nxtzengroup.in",
    title: "NXTZEN Consultant's Pvt Ltd - Premium Aluminium & Fenestration Solutions",
    description:
      "Discover NXTZEN: Innovative, stylish, and sustainable housing solutions with premium fenestration products. Elevate your lifestyle with cutting-edge technology and exceptional value.",
    images: ["/assets/portfolio/nxtzen-mockup.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NXTZEN Consultant's Pvt Ltd - Aluminium & Doors Solutions",
    description:
      "Discover NXTZEN: Innovative, stylish, and sustainable housing solutions with premium fenestration products.",
    images: ["/assets/portfolio/nxtzen-mockup.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* Google Analytics Tag manager code */}

      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-KR2GLFL4H2`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KR2GLFL4H2');
            `}
        </Script>

        {/* Test script using next/script */}
      </head>



      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <SmoothScroll>
        <Navbar/>
       <main>{children}</main> 
       <Footer/>
       <ScrollToTopBottom />
       <WhatsAppIcon/>
       <DownloadBrochure/>
       </SmoothScroll>
      </body>
    </html>
  );
}
