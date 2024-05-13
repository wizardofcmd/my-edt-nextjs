"use client";

import LatestLessons from "@/components/Dashboard/LatestLessons";
import RSANews from "@/components/Dashboard/RSANews";
import PersonalCalendar from "@/components/Dashboard/PersonalCalendar";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    return (
      <div className="h-full w-full">
        <h1 className="font-bold text-white md:text-4xl">
          {`Welcome, ${user.fullName}.`}
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="w-3/5">
            <LatestLessons />
          </div>
          <div className="w-2/5">
            <RSANews />
            <div className="min-w-max">
              <PersonalCalendar />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
