import { Syne, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

// High-end Geometric Sans-Serif for massive headings
const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"] 
});

// Premium Italic Serif for the contrast word ("power")
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"] 
});

// Clean legible Sans for body copy
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Keaver Foundation",
  description: "Empowering The Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden selection:bg-[#cda44b] selection:text-black">
         <Navbar />
         <SmoothScroll>
            {children}
         </SmoothScroll>
      </body>
    </html>
  );
}
