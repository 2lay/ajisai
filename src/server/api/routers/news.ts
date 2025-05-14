
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const newsRouter = createTRPCRouter({
    getRecent: publicProcedure
        .query(() => {
            return {
                newsItems: [
                    {
                        category: "Lorejjjm Ipsum",
                        categoryColor: "primary",
                        title: "Lorem Ipsum Dolor Sit Amet",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        image: "https://i.imgur.com/E9JPLRK.png",
                        imageAlt: "Lorem Ipsum",
                        author: "Lorem Ipsum",
                        authorAvatar: "https://github.com/tmwdotgg.png",
                        date: "January 1, 2024",
                        link: "/lorem-ipsum",
                    },
                    {
                        category: "Lorem Ipsum",
                        categoryColor: "primary",
                        title: "Lorem Ipsum Dolor Sit Amet",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        image: "https://i.imgur.com/IuChRaG.png",
                        imageAlt: "Lorem Ipsum",
                        author: "Lorem Ipsum",
                        authorAvatar: "https://github.com/tmwdotgg.png",
                        date: "January 1, 2024",
                        link: "/lorem-ipsum",
                    },
                    {
                        category: "Lorem Ipsum",
                        categoryColor: "primary",
                        title: "Lorem Ipsum Dolor Sit Amet",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        image: "https://i.imgur.com/i4E6Mk0.png",
                        imageAlt: "Lorem Ipsum",
                        author: "Lorem Ipsum",
                        authorAvatar: "https://github.com/tmwdotgg.png",
                        date: "January 1, 2024",
                        link: "/lorem-ipsum",
                    },
                    {
                        category: "Want to see more?",
                        categoryColor: "primary",
                        title: "Check out our News page",
                        description:
                            "Head over to our news page to stay up to date with all the latest updates and announcements from TMW.gg!",
                        image: "https://i.imgur.com/OP3ohVV.png",
                        imageAlt: "News page preview",
                        author: "TMW.gg",
                        authorAvatar: "https://github.com/tmwdotgg.png",
                        date: "News Page",
                        link: "/news",
                        isViewMore: true,
                    },
                ],
            };
        }),



});


