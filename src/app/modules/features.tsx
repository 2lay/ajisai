"use client";

import {
    IconBrandDiscord,
    IconShoppingCart,
    IconServer,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { useIsMobile } from "~/hooks/useIsMobile";

export default function Home() {
    // Use custom hook for mobile detection
    const isMobile = useIsMobile();

    // --- Data Definitions ---
    const features = [
        {
            title: "Discord Community",
            description:
                "Join thousands of players in our vibrant Discord community. Get help, share builds, and connect with friends.",
            image: "https://i.imgur.com/Lf2pyCW.png",
            mobileImage: "https://i.imgur.com/QdaSplI.png",
            imageAlt: "Discord community preview",
            badge: {
                text: "1K+ MEMBERS",
                color: "bg-indigo-400",
            },
            icon: IconBrandDiscord,
            iconColor: "text-indigo-300",
            benefits: ["24/7 Support", "Welcoming Community", "Important Announcements"],
            button: {
                text: "Join us on Discord",
                href: "/discord",
                icon: IconBrandDiscord,
                className:
                    "bg-indigo-400/20 hover:bg-indigo-400/30 text-indigo-200 hover:text-indigo-100 border-2 border-indigo-400/40 hover:border-indigo-300",
            },
            layout: "left",
            colors: {
                text: "text-indigo-900 dark:text-indigo-100",
                dot: "bg-indigo-300",
            },
        },
        {
            title: "Premium Perks",
            description:
                "Enhance your gameplay with premium perks and exclusive in-game features to stand out from the crowd.",
            image: "https://i.imgur.com/knTubhD.jpeg",
            mobileImage: "https://i.imgur.com/knTubhD.png",
            imageAlt: "Shop features preview",
            badge: {
                text: "EXCLUSIVE PERKS",
                color: "bg-blue-400",
            },
            icon: IconShoppingCart,
            iconColor: "text-blue-400",
            benefits: ["More Homes", "Reduced Cooldowns", "Force Load Chunks"],
            button: {
                text: "View Store",
                href: "/shop",
                icon: IconShoppingCart,
                className:
                    "bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 border-2 border-blue-500/40 hover:border-blue-400",
            },
            layout: "right",
            colors: {
                text: "text-blue-900 dark:text-blue-200",
                dot: "bg-blue-400",
            },
        },
        {
            title: "Minecraft Servers",
            description:
                "Explore our collection of modded servers. From tech to vanilla+, find your perfect playground.",
            image:
                "https://preview.redd.it/what-200-concurrent-modded-minecraft-players-looks-like-v0-1h6zsye38bkb1.png?width=1080&crop=smart&auto=webp&s=3f5908ea32d4868384ac1ddf535860a342a67e6b",
            mobileImage:
                "https://preview.redd.it/what-200-concurrent-modded-minecraft-players-looks-like-v0-1h6zsye38bkb1.png?width=1080&crop=smart&auto=webp&s=3f5908ea32d4868384ac1ddf535860a342a67e6b",
            imageAlt: "Minecraft servers preview",
            badge: {
                text: "4 ACTIVE SERVERS",
                color: "bg-primary-400",
            },
            icon: IconServer,
            iconColor: "text-primary-400",
            benefits: ["High-End Hardware", "Lag-Free Experience", "24/7 Uptime"],
            button: {
                text: "Explore Servers",
                href: "/servers",
                icon: IconServer,
                className:
                    "bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 hover:text-primary-200 border-2 border-primary-500/40 hover:border-primary-400",
            },
            layout: "left",
            colors: {
                text: "text-primary-900 dark:text-primary-200",
                dot: "bg-primary-400",
            },
        },
    ];

    return (
        <>
            {/* Features Section */}
    
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center mb-16 ">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white/90 tracking-tight">
                    What we offer
                </h2>
                <p className="text-lg text-neutral-900 dark:text-white/70 mt-2">
                    Discover our collection of unique modded Minecraft experiences.
                </p>
            </div>

            {/* Features List */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/60 hover:border-neutral-400 dark:hover:border-neutral-600/80 transition-colors duration-300"
                    >
                        <div
                            className={`relative flex flex-col md:flex-row ${feature.layout === "right" ? "md:flex-row-reverse" : ""
                                } items-center gap-6 p-6 md:p-8`}
                        >
                            <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
                                <Image
                                    src={isMobile ? feature.mobileImage : feature.image}
                                    alt={feature.imageAlt}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div
                                    className={`absolute top-2 right-2 ${feature.badge.color} px-2 py-1 rounded-md text-xs font-medium`}
                                >
                                    {feature.badge.text}
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <div>
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                        <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-neutral-800 dark:text-white/80 mb-4">{feature.description}</p>

                                    <div
                                        className={`flex flex-wrap justify-center md:justify-start items-center gap-4 ${feature.colors.text} mb-5`}
                                    >
                                        {feature.benefits.map((benefit, benefitIndex) => (
                                            <div key={benefitIndex} className="flex items-center gap-2">
                                                <div className={`w-2 h-2 ${feature.colors.dot} rounded-full`}></div>
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-start">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className={`transition-all duration-300 font-medium ${feature.button.className}`}
                                    >
                                        <Link
                                            href={feature.button.href}
                                            className="flex items-center gap-3"
                                        >
                                            <feature.button.icon size={20} />
                                            {feature.button.text}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
