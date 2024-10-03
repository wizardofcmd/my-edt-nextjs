"use server";

import { auth, currentUser } from "@clerk/nextjs/server";

import DashboardItems from "@/components/Dashboard/DashboardItems";
import { getUser } from "@/db";

export default async function Dashboard() {
  const { userId } = auth();

  if (userId) {
    const user = await getUser(userId);

    console.log("server - user:", user);
  }

  return <DashboardItems />;
}
