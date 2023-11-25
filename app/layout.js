import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-primary">
        <Header />
        <div className=" pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
