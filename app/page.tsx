import Image from "next/image";
import SignUpModal from "./components/SignUpModal";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-fuchsia-300 sm:flex sm:items-center sm:justify-center sm:bg-emerald-400">
      <SignUpModal />
    </main>
  );
}
