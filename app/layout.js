import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Dr. Md. Aftab Alam",
  description:
    "Mechanical Engineer | Ph.D. Specialization: Additive Manufacturing, Bone Tissue Engineering & Patient-Specific Implant Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable}
          ${inter.variable}
          antialiased
          bg-[#F8F5EC]
          text-[#1A1A1A]
          font-[var(--font-inter)]
        `}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
