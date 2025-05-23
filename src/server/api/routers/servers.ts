import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { servers } from "~/server/db/schema"; // Import the servers schema

export const serversRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const servers = await db.query.servers.findMany();
    return servers;
  }),
}); 
