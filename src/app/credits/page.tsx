"use client";

import { IconBrandDiscord, IconShoppingCart, IconExternalLink, IconHeart } from "@tabler/icons-react";
import { IconServer } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import Footer from "~/components/ui/footer";

export default function Home() {

    const credits = [
        {
            creator: "stahis",
            description: "3D render of Minecraft diamonds",
            source: "https://wallpapers.com/wallpapers/piled-minecraft-diamonds-clpr2cz2tuxlyjxs.html",
            category: "Artwork"
        },
        {
            creator: "scratchist", 
            description: "Screenshot showcasing 200+ players simultaneously connected to a modded Minecraft server",
            source: "https://www.reddit.com/r/Minecraft/comments/1360111/what_200_concurrent_modded_minecraft_players/",
            category: "Screenshots"
        },
        {
            creator: "Sampsoy",
            description: "The majority of stunning base showcase images featured throughout the website",
            source: "hhttps://www.reddit.com/user/Sampsoy/submitted/?sort=top",
            category: "Screenshots"
        },
        {
            creator: "Mojang AB & Microsoft Corporation",
            description: "The Minecraft brand and assets", 
            source: "https://www.minecraft.net/en-us/credits",
            category: "Official Assets"
        },
    ];

    return (
        <div className="mt-25 flex flex-col">
            <div className="fixed inset-0 -z-10">
                <Image
                    src="https://preview.redd.it/neo-caelestia-gt-nh-endgame-base-tour-v0-2kxqgniwpxla1.png?width=1080&crop=smart&auto=webp&s=e43c39b020a03c820c13901b140108f064361207"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
            </div>
            <div className="flex-grow flex items-center justify-center p-4">
                <Card variant="translucent" className="w-full md:w-3/4 lg:w-1/2 p-6 md:p-8 backdrop-blur-md">
                    <div className="flex flex-col items-center mb-8">
                        <IconHeart className="w-12 h-12 text-red-400 mb-4 animate-pulse" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                            Credits & Attributions
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 mb-4 text-center max-w-2xl">
                            We&apos;re grateful to these amazing creators who&apos;ve contributed to making our website beautiful. If you identify any attribution errors or wish to request removal, please reach out to us at <span className="text-primary-400">credits@tmw.gg</span>.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {credits.sort((a, b) => a.creator.localeCompare(b.creator)).map((credit) => (
                            <div 
                                key={credit.creator} 
                                className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="space-y-2">
                                        <span className="text-xs font-medium text-primary-400/80 uppercase tracking-wider">
                                            {credit.category}
                                        </span>
                                        <p className="text-sm md:text-base text-gray-300">{credit.description}</p>
                                        <p className="text-white font-medium">By: <span className="text-primary-300">{credit.creator}</span></p>
                                    </div>
                                    <Button
                                        color="primary"
                                        className="w-full md:w-auto whitespace-nowrap group"
                                        onClick={() => window.open(credit.source, '_blank')}
                                    >
                                        <span className="flex items-center gap-2">
                                            View Source
                                            <IconExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="mt-20">
                <Footer className="rounded-t-3xl bg-neutral-900/80 backdrop-blur-sm" />
            </div>
        </div>
    );
}
