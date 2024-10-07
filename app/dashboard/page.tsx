"use server";

import { auth } from "@clerk/nextjs/server";

import DashboardItems from "@/components/Dashboard/DashboardItems";
import { getBwLessons, getUser } from "@/db";

export default async function Dashboard() {
  const { userId } = auth();

  // Clerk User ID
  if (userId) {
    const user = await getUser(userId);

    console.log("server - user:", user);

    if (user) {
      const lessons = await getBwLessons(user.id);
      console.log("server - lessons:", lessons);
    }
  }

  return <DashboardItems />;
}
