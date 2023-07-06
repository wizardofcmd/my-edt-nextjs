import Image from "next/image";
import Link from "next/link";

export default function SignUpModal() {
  return (
    <div className="sm:flex sm:h-[85%] sm:w-4/6 sm:justify-center sm:overflow-hidden sm:rounded-xl">
      <div
        id="edt-greeting-section"
        className="hidden lg:flex lg:h-full lg:w-[45%] lg:items-center lg:rounded-l-lg lg:rounded-bl-lg lg:bg-[#2b3575] lg:px-8"
      >
        <h1 className="text-5xl font-medium text-white">
          This is a recreation of the {`RSA's`} My EDT Portal.
        </h1>
      </div>
      <div className="flex flex-col h-screen sm:h-full items-center justify-center gap-4 p-4 sm:w-full sm:max-w-max sm:rounded-lg sm:bg-white lg:rounded-none lg:rounded-r-lg lg:rounded-br-lg">
        <Image
          src="/rsa-logo.png"
          width={100}
          height={100}
          alt="RSA logo"
        ></Image>
        <h2 className="hidden text-center lg:flex lg:text-3xl lg:font-bold">
          Sign up to begin tracking your EDT lessons.
        </h2>
        <form className="flex flex-wrap justify-center gap-4">
          <div className="flex gap-4">
            <label
              htmlFor="first-name-input"
              className="w-[100px] text-xl font-semibold"
            >
              First Name
            </label>
            <input name="first-name-input" type="text" className="border" />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="last-name-input"
              className="w-[100px] text-xl font-semibold"
            >
              Last Name
            </label>
            <input name="last-name-input" type="text" className="border" />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="email-address-input"
              className="w-[100px] text-xl font-semibold"
            >
              Email
            </label>
            <input name="email-address-input" type="text" className="border" />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="password-input"
              className="w-[100px] text-xl font-semibold"
            >
              Password
            </label>
            <input name="password-input" type="password" className="border" />
          </div>
          <div className="flex w-[50%] flex-col gap-2 self-center">
            <button
              type="submit"
              className="mt-2 rounded-md border bg-green-600 p-1 font-bold text-white hover:bg-green-700"
            >
              Sign up
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link href="#" className="font-semibold text-[#0563C1]">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
