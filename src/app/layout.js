import Footer from "@/components/Footer/Footer";
import Mouse from "@/components/Mouse/Mouse";
import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevsGiant",
  description: "Always your side",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-white bg-[#000212]`}>
        <Mouse />
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
