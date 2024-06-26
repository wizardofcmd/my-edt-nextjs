"use client";

import Image from "next/image";
import RSALogo from "@/public/rsa-logo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";

export default function Navbar() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const NavbarLinks = () => (
    <>
      <div className="flex flex-col gap-4 pl-3 md:ml-16 md:flex-row md:items-center md:gap-16">
        <Link href="#" className="text-2xl font-medium text-white md:text-lg">
          My Lessons
        </Link>
        <Link href="#" className="text-2xl font-medium text-white md:text-lg">
          My Licenses
        </Link>
        <Link href="#" className="text-2xl font-medium text-white md:text-lg">
          Find an Instructor
        </Link>
      </div>
      <div className="flex py-4 pl-3 md:ml-auto md:pl-8">
        <UserButton
          appearance={{
            elements: {
              userButtonBox: {
                flexDirection: "row-reverse",
              },
            },
            variables: {
              // To make this fit with the other 1.5rem nav links
              fontSize: "1.7144rem",
              // bg-slate-800 to match <main>
              colorBackground: "rgb(30 41 59)",
            },
            baseTheme: dark,
          }}
          showName={isBurgerMenuOpen ? true : false}
        />
      </div>
    </>
  );

  return (
    <header
      className={`flex h-[1/8] w-full bg-slate-900 ${
        isBurgerMenuOpen ? "flex-col" : ""
      }`}
    >
      {/* Navbar for bigger screens */}
      <nav className="hidden w-full items-center px-4 sm:pl-8 md:flex md:pl-12 lg:pl-16">
        <Link href="/" className="flex items-center p-2">
          <Image
            src={RSALogo}
            width={60}
            height={60}
            alt="Link to home page"
            unoptimized
          ></Image>
        </Link>
        <NavbarLinks />
      </nav>

      {/* Mobile menu icon */}
      <div
        className="relative flex items-center p-2 md:hidden"
        onClick={toggleBurgerMenu}
      >
        <BurgerIcon />
      </div>

      {isBurgerMenuOpen && (
        <nav className="flex flex-col">
          <NavbarLinks />
        </nav>
      )}
    </header>
  );
}
