"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    return (
      <h1 className="text-4xl font-bold text-white">
        {`Welcome, ${user.fullName}.`}
      </h1>
    );
  }

  return null;
}
