import Image from "next/image";
import LoginModal from "./components/LoginModal";

export default function Home() {
  return (
    <main className="bg-fuchsia-300 sm:flex sm:h-screen sm:w-screen sm:items-center sm:justify-center sm:bg-emerald-400">
      <LoginModal />
    </main>
  );
}
