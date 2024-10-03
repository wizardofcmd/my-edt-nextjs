"use server";

import { getUsers } from "@/db/index";

export default async function UserTest() {
  const users = await getUsers();

  console.log("users", users);

  return users.map((user) => <div>{user.id}</div>);
}
