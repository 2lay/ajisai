"use client";

import { IconBrandDiscord, IconShoppingCart } from "@tabler/icons-react";
import { IconServer } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default function Home() {

    const credits = [
        {
            creator: "stahis",
            description: "3D render of Minecraft diamonds",
            source: "https://wallpapers.com/wallpapers/piled-minecraft-diamonds-clpr2cz2tuxlyjxs.html",
        },
        {
            creator: "scratchist",
            description: "Screenshot showcasing 200+ players simultaneously connected to a modded Minecraft server",
            source: "https://www.reddit.com/r/Minecraft/comments/1360111/what_200_concurrent_modded_minecraft_players/",
        },
        {
            creator: "Sampsoy",
            description: "The majority of stunning base showcase images featured throughout the website",
            source: "hhttps://www.reddit.com/user/Sampsoy/submitted/?sort=top",
        },
        {
            creator: "Mojang AB & Microsoft Corporation",
            description: "The Minecraft brand and assets",
            source: "https://www.minecraft.net/en-us/credits",
        },
    ];
    return (
        <>
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
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <Card variant="translucent" className="w-full md:w-3/4 lg:w-1/2 p-4 md:p-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">Credits & Attributions</h2>
                    <p className="text-xs md:text-sm text-gray-300 mb-4 text-center">This page acknowledges the creators and contributors whose work appears on our website. If you identify any attribution errors or wish to request removal, please reach out to us at credits@tmw.gg.</p>
                    <div className="space-y-4">
                        {credits.sort((a, b) => a.creator.localeCompare(b.creator)).map((credit) => (
                            <div key={credit.creator} className="p-4 rounded-lg bg-neutral-800/50">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                    <div className="space-y-1">
                                        <p className="text-sm text-gray-300">{credit.description}</p>
                                        <p className="text-white font-medium">Creator: {credit.creator}</p>
                                    </div>
                                    <Button
                                        color="primary"
                                        className="w-full md:w-auto whitespace-nowrap"
                                        onClick={() => window.open(credit.source, '_blank')}
                                    >
                                        View Source
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    );
}
