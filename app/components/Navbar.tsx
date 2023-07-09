import Image from "next/image";
import RSALogo from "/public/rsa-logo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="flex h-16 bg-slate-900">
      {/* Navbar for bigger screens */}
      <div className="hidden w-full items-center px-4 sm:flex sm:pl-8 md:pl-12 lg:pl-16">
        <Link href="/dashboard" className="flex h-5/6 w-auto items-center">
          <Image
            className="h-full w-auto"
            src={RSALogo}
            alt="RSA logo"
            unoptimized
          ></Image>
        </Link>
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
      </div>

      {/* Mobile menu icon */}
      <div className="flex items-center px-4 sm:hidden">
        <button
          type="button"
          className="items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
