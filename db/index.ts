import "@/db/envConfig";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { eq } from "drizzle-orm";
export const db = drizzle(sql, { schema });

export const getUser = async (userId: string) => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.clerk_user_id, userId),
  });

  return user;
};
