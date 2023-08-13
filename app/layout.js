import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DALLE CLONE",
  description: "Generate AI Images....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200 max-w-[1024px] m-auto h-screen flex flex-col`}
      >
        {" "}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
