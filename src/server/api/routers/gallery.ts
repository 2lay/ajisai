import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const galleryRouter = createTRPCRouter({
    getBuilds: publicProcedure
        .query(async () => {
            const builds = [
                {
                    id: "1",
                    imageUrl: "https://i.imgur.com/RobUP60.png",
                    title: "Snowy Mountain Village",
                    username: "MinecraftMaster42", 
                    description: "A cozy village built high in the mountains to escape the cold winter.",
                    server: "Winterfell SMP"
                },
                {
                    id: "2",
                    imageUrl: "https://i.imgur.com/AOHvFJn.png",
                    title: "Medieval Cathedral",
                    username: "ArchitectGamer",
                    description: "A grand cathedral inspired by Gothic architecture, built entirely in survival mode.",
                    server: "Medievalcraft"
                },
                {
                    id: "3",
                    imageUrl: "https://i.imgur.com/MfWB6Bp.png",
                    title: "Underground Crystal Cave",
                    username: "CaveExplorer99",
                    description: "Discovered this amazing crystal formation deep underground and transformed it into a base.",
                    server: "Geologic Wonders"
                },
                {
                    id: "4",
                    imageUrl: "https://i.imgur.com/cio5jT1.png",
                    title: "Steampunk Airship Harbor",
                    username: "SteamPunkBuilder",
                    description: "A steampunk-themed harbor with fully detailed airships that can be explored.",
                    server: "Industrial Revolution"
                }
            ];

            return {
                builds
            };
        }),
});
