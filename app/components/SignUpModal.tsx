import Image from "next/image";

export default function SignUpModal() {
  return (
    <div className="sm:flex sm:h-[85%] sm:w-4/6 sm:justify-center sm:overflow-hidden sm:rounded-xl">
      <div
        id="edt-greeting-section"
        className="hidden lg:flex lg:h-full lg:w-[45%] lg:items-center lg:bg-teal-600 lg:px-8"
      >
        <h1 className="text-5xl">
          This is a recreation of the {`RSA's`} My EDT Portal.
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 p-4 sm:w-[55%] sm:max-w-max sm:bg-purple-700">
        <Image
          src="/rsa-logo.png"
          width={100}
          height={100}
          alt="RSA logo"
        ></Image>
        <h2 className="text-3xl font-bold">
          Sign up to begin tracking your EDT lessons.
        </h2>
        <form className="flex flex-col gap-4 sm:h-full sm:w-full">
          <div className="flex flex-col">
            <label
              htmlFor="first-name-input"
              className="w-max bg-white text-xl font-semibold"
            >
              First Name
            </label>
            <input name="first-name-input" type="text" className="w-52" />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="last-name-input"
              className="w-max bg-white text-xl font-semibold"
            >
              Last Name
            </label>
            <input name="last-name-input" type="text" className="w-52" />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email-address-input"
              className="w-max bg-white text-xl font-semibold"
            >
              Email
            </label>
            <input name="email-address-input" type="text" className="w-72" />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password-input"
              className="w-max bg-white text-xl font-semibold"
            >
              Password
            </label>
            <input name="password-input" type="password" className="w-72" />
          </div>
          <div className="self-center">
            <button type="submit" className="bg-white ">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
