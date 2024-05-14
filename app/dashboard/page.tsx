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
      <div className="flex h-full w-full flex-col">
        <h1 className="hidden font-bold text-white md:flex md:pb-2 md:text-4xl lg:flex-initial">
          {`Welcome, ${user.fullName}.`}
        </h1>
        <div className="flex flex-1 flex-col gap-4 md:w-full lg:flex-row">
          <div className="w-full flex-1 lg:w-3/5">
            <LatestLessons className={`h-full`} />
          </div>
          <div className="flex h-full w-full flex-1 flex-col gap-4 lg:w-2/5">
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
