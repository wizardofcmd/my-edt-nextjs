"use client";

import { redirect } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import LoginRegisterModal from "./components/Home/LoginRegisterModal";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();

  if (isSignedIn) redirect("/dashboard");
  if (isLoaded) return <LoginRegisterModal />;
}
