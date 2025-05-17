import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const galleryRouter = createTRPCRouter({
    getBuilds: publicProcedure
        .query(async () => {
            const builds = await db.query.gallery.findMany({
                orderBy: (gallery, { desc }) => [desc(gallery.createdAt)]
            });

            return {
                builds: builds.map(build => ({
                    id: build.id.toString(),
                    imageUrl: build.image,
                    title: build.title,
                    username: build.username,
                    description: build.description,
                    server: build.server
                }))
            };
        }),
});
