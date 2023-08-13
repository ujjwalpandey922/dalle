import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 mt-auto p-4 flex justify-between">
      <div className="cursor-pointer">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="LOGO" height={100} width={100} />
        </Link>
      </div>
      <div className="text-lg font-bold text-black-400">
        @Dalle 2023
      </div>
    </footer>
  );
};

export default Footer;
