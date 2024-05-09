"use client";

import Image from "next/image";
import RSALogo from "/public/rsa-logo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";

export default function Navbar() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const NavbarLinks = () => (
    <>
      <div className="ml-16 flex items-center gap-16">
        <Link href="/dashboard" className="text-lg font-medium text-white">
          Dashboard
        </Link>
        <Link href="#" className="text-lg font-medium text-white">
          My Licenses
        </Link>
        <Link href="#" className="text-lg font-medium text-white">
          Find an Instructor
        </Link>
      </div>
      <div className="ml-auto flex sm:pl-8">
        <UserButton />
      </div>
    </>
  );

  return (
    <header
      className={`flex min-h-max w-full bg-slate-900 md:min-h-[auto] ${
        isBurgerMenuOpen ? "flex-col" : ""
      }`}
    >
      {/* Navbar for bigger screens */}
      <div className="hidden w-full items-center px-4 sm:pl-8 md:flex md:pl-12 lg:pl-16">
        <Link href="/dashboard" className="flex items-center p-2">
          <Image
            src={RSALogo}
            width={60}
            height={60}
            alt="Link to home page"
            unoptimized
          ></Image>
        </Link>
        <NavbarLinks />
      </div>

      {/* Mobile menu icon */}
      <div
        className="relative flex items-center p-2 md:hidden"
        onClick={toggleBurgerMenu}
      >
        <BurgerIcon />
      </div>

      {isBurgerMenuOpen && (
        <div>
          <NavbarLinks />
        </div>
      )}
    </header>
  );
}
