import "@/db/envConfig";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { bwLessons } from "./schema";
import * as schema from "./schema";
import { eq } from "drizzle-orm";
export const db = drizzle(sql, { schema });

export const getUser = async (clerkUserId: string) => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.clerk_user_id, clerkUserId),
  });

  return user;
};

export const getBwLessons = async (userId: number) => {
  const lessons = await db
    .select()
    .from(bwLessons)
    .where(eq(bwLessons.user_id, userId));

  return lessons;
};
