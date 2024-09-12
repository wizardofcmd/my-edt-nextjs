import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    first_name: text("first_name").notNull(),
    surname: text("surname").notNull(),
    email: text("email").notNull(),
    image: text("image"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

export const licenses = pgTable("licenses", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id),
  type: text("type").notNull(),
  full_license: boolean("full_license").default(false).notNull(),
});

export const bwLessons = pgTable("bwLessons", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => users.id),
  lesson_1: boolean("lesson_1").default(false).notNull(),
  lesson_2: boolean("lesson_2").default(false).notNull(),
  lesson_3: boolean("lesson_3").default(false).notNull(),
  lesson_4: boolean("lesson_4").default(false).notNull(),
  lesson_5: boolean("lesson_5").default(false).notNull(),
  lesson_6: boolean("lesson_6").default(false).notNull(),
  lesson_7: boolean("lesson_7").default(false).notNull(),
  lesson_8: boolean("lesson_8").default(false).notNull(),
  lesson_9: boolean("lesson_9").default(false).notNull(),
  lesson_10: boolean("lesson_10").default(false).notNull(),
  lesson_11: boolean("lesson_11").default(false).notNull(),
  lesson_12: boolean("lesson_12").default(false).notNull(),
});
