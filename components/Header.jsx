import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-zinc-400 w-full p-4 flex justify-between items-center mb-4">
      <div className="cursor-pointer">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="LOGO" height={100} width={100} />
        </Link>
      </div>
      <button className="bg-slate-600 p-2 text-red-50 rounded-lg hover:bg-slate-700 transition-colors ">
        <Link href="/createPage">Create</Link>
      </button>
    </header>
  );
};

export default Header;
