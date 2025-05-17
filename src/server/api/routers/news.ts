import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const newsRouter = createTRPCRouter({
    getRecent: publicProcedure
        .query(async () => {
            const newsItems = await db.query.news.findMany({
                limit: 3,
                orderBy: (news, { desc }) => [desc(news.createdAt)]
            });

            if (!newsItems) {
                return {
                    newsItems: []
                };
            }

            const mappedItems = newsItems.map(item => ({
                category: item.category,
                categoryColor: item.categoryColor,
                title: item.title,
                description: item.description,
                image: item.image,
                imageAlt: item.imageAlt,
                author: item.author,
                authorAvatar: item.authorAvatar,
                date: item.createdAt.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }),
                link: `/news/${item.slug}`,
                isViewMore: item.isViewMore ?? false
            }));

            const viewMoreItem = {
                category: "Want to see more?",
                categoryColor: "primary",
                title: "Check out our News page",
                description: "Head over to our news page to stay up to date with all the latest updates and announcements from TMW.gg!",
                image: "https://i.imgur.com/OP3ohVV.png",
                imageAlt: "News page preview",
                author: "TMW.gg",
                authorAvatar: "https://github.com/tmwdotgg.png",
                date: "News Page",
                link: "/news",
                isViewMore: true
            };

            return {
                newsItems: [...mappedItems, viewMoreItem]
            };
        }),
});
