import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="h-screen w-screen sm:flex sm:items-center sm:justify-center sm:bg-slate-400">
      <div className="sm:flex sm:h-[85%] sm:w-4/6 sm:justify-center sm:overflow-hidden sm:rounded-xl">
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-4 sm:h-full sm:rounded-lg sm:bg-white">
          <Image
            src="/rsa-logo.png"
            width={100}
            height={100}
            alt="RSA logo"
            unoptimized
          ></Image>
          <h1 className="hidden text-center sm:flex sm:text-3xl sm:font-bold">
            Start tracking your EDT lessons, today.
          </h1>
          <div className="flex h-1/6 w-9/12 flex-col justify-center gap-4 sm:h-[8%] sm:flex-row">
            <SignUpButton redirectUrl="/dashboard">
              <button
                type="button"
                className="text-md flex h-full w-full items-center justify-center whitespace-nowrap rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:h-full md:w-4/5"
              >
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton redirectUrl="/dashboard">
              <button
                type="button"
                className="text-md flex h-full w-full items-center justify-center whitespace-nowrap rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:h-full md:w-4/5"
              >
                Login
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </main>
  );
}
