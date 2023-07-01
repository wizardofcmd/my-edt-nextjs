import Image from "next/image";

export default function SignUpModal() {
  return (
    <div className="flex overflow-hidden bg-white sm:h-[85%] sm:w-4/6 sm:rounded-xl">
      <div
        id="edt-greeting-section"
        className="flex items-center px-4 sm:h-full sm:w-[45%] sm:bg-teal-600"
      >
        <h1 className="text-5xl">
          This is a recreation of the {`RSA's`} My EDT Portal.
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 py-4 sm:w-[55%] sm:bg-purple-700">
        <Image
          src="/rsa-logo.png"
          width={100}
          height={100}
          alt="RSA logo"
        ></Image>
        <h2 className="text-3xl">
          Sign up to begin tracking your EDT lessons.
        </h2>
        <form className="mt-40 flex flex-col gap-4 sm:h-full sm:w-full">
          <div>
            <label htmlFor="first-name-input" className="bg-white">
              First Name
            </label>
            <input id="first-name-input" type="text" />
          </div>
          <div>
            <label htmlFor="last-name-input" className="bg-white">
              Last Name
            </label>
            <input id="last-name-input" type="text" />
          </div>
          <div>
            <label htmlFor="email-address-input" className="bg-white">
              Email
            </label>
            <input id="email-address-input" type="text" />
          </div>
          <div>
            <label htmlFor="email-address-input" className="bg-white">
              Password
            </label>
            <input id="email-address-input" type="text" />
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
