import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center sm:bg-slate-400">
      <div className="flex h-full w-full items-center justify-center justify-items-center sm:h-2/3 sm:w-2/3">
        <div className="flex h-full w-full flex-col items-center p-4 sm:rounded-lg sm:bg-white">
          <div className="flex h-full flex-col justify-end pb-4 sm:items-center sm:justify-center">
            <Image
              src="/rsa-logo.png"
              width={100}
              height={100}
              alt="RSA logo"
              unoptimized
              className={"min-h-[100px] min-w-[100px]"}
            ></Image>
            <h1 className="hidden text-center sm:flex sm:text-3xl sm:font-bold">
              Start tracking your EDT lessons today.
            </h1>
          </div>
          <div className="flex h-full w-full flex-col gap-4 sm:flex-row">
            <SignInButton redirectUrl="/dashboard">
              <button
                type="button"
                className="flex h-1/5 w-full min-w-[100px] max-w-[450px] items-center justify-center self-center whitespace-nowrap rounded-md bg-indigo-600 px-3 py-6 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </SignInButton>
            <SignUpButton redirectUrl="/dashboard">
              <button
                type="button"
                className="flex h-1/5 w-full min-w-[100px] max-w-[450px] items-center justify-center self-center whitespace-nowrap rounded-md bg-indigo-600 px-3 py-6  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>
      </div>
    </main>
  );
}
