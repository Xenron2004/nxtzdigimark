import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTopBottom from "@/components/ScrollToTopBottom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NXTZEN Consultant's Pvt Ltd",
  description: "Discover NXTZEN: Innovative, stylish, and sustainable housing solutions with premium fenestration products. Elevate your lifestyle with cutting-edge technology and exceptional value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
        <Navbar/>
       <main>{children}</main> 
       <Footer/>
       <ScrollToTopBottom />
       </SmoothScroll>
      </body>
    </html>
  );
}
