// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `ajisai_${name}`);

export const posts = createTable(
  "post",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    name: d.varchar({ length: 256 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const news = createTable("news", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  title: d.varchar({ length: 256 }),
  description: d.text(),
  image: d.varchar({ length: 256 }),
  imageAlt: d.varchar({ length: 256 }),
  author: d.varchar({ length: 256 }),
  authorAvatar: d.varchar({ length: 256 }),
  createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  category: d.varchar({ length: 256 }),
  categoryColor: d.varchar({ length: 256 }),
  slug: d.varchar({ length: 256 }),
  isViewMore: d.boolean().default(false),
}));

export const gallery = createTable("gallery", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  image: d.varchar({ length: 256 }),
  title: d.varchar({ length: 256 }),
  username: d.varchar({ length: 256 }), 
  description: d.text(),
  server: d.varchar({ length: 256 }),
  createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
}));

export const servers = createTable("servers", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar({ length: 256 }).notNull(),
  image: d.varchar({ length: 256 }),
  imageAlt: d.varchar({ length: 256 }),
  status: d.varchar({ length: 50 }).default("offline"),
  playerCount: d.integer().default(0),
  maxPlayers: d.integer().default(20),
  version: d.varchar({ length: 100 }).default("TMW_VERSION"),
  modpack: d.varchar({ length: 256 }).default("TMW_MODPACK"),
  ip: d.varchar({ length: 256 }).default("TMW_IP"),
  downloadLink: d.varchar({ length: 256 }).default("TMW_DOWNLOAD_LINK"),
  queryMethod: d.varchar({ length: 256 }).default("Velocity"),
  createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
}));
