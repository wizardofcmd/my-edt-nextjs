"use server";

import DashboardItems from "@/components/Dashboard/DashboardItems";
import UserTest from "@/components/Dashboard/UserTest";

export default async function Dashboard() {
  return (
    <>
      <UserTest />
      <DashboardItems />
    </>
  );
}
