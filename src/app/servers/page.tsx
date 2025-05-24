"use client";

import { IconBrandDiscord, IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { type InferSelectModel } from "drizzle-orm"; // Import type inference utility

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import Footer from "~/components/ui/footer";
import { api } from "~/trpc/react"; // Import the server-side tRPC API
import { type servers as serversSchema } from "~/server/db/schema"; // Import the servers schema
import { ServerCardSkeleton } from "~/components/ui/skeleton"; // Import the skeleton component

type Server = InferSelectModel<typeof serversSchema>; // Infer the type of a server

// Data structure for server information
// const servers = [
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "1.18.2",
//         title: "Modpack A",
//         players: 120,
//         ip: "127.0.0.1",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "1.0.8",
//         title: "All the Mods 9",
//         players: 85,
//         ip: "atm9.TMW.gg",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "1.1.5",
//         title: "All the Mods 9 - To the Sky",
//         players: 210,
//         ip: "atm9tts.TMW.gg",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "0.9",
//         title: "All the Magic - Arcana",
//         players: 210,
//         ip: "atmarcana.TMW.gg",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "10.11.0",
//         title: "Create: Ultimate Selection",
//         players: 210,
//         ip: "createus.TMW.gg",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "B13.3",
//         title: "Techopolis 3",
//         players: 210,
//         ip: "techopolis3.TMW.gg",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },
//     {
//         icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
//         version: "1.20.3",
//         title: "Craftoria",
//         players: 210,
//         ip: "craftoria.TMW.gg",
//         status: "Online", // Added status
//         downloadLink: "#", // Placeholder link
//     },

// ];

export default function MinecraftServers() { // Made the component async

    const { data: servers, isLoading } = api.servers.getAll.useQuery();
    
    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
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
            {/* Main Content Area */}
            <Card variant="translucent" className="relative max-w-[1400px] mx-auto px-4 p-10 shadow-xl my-10 mt-28 rounded-xl bg-neutral-950/50 border border-neutral-700/50"> {/* Central Card Wrapper */}
                <div className="">
                    {/* Header with title and players counter */}
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl lg:text-2xl font-bold text-white">TMW.gg Server List</h1>
                        <div className="text-white/80 text-lg lg:text-base">
                            0 players online {/* This will likely need to be dynamic */}
                        </div>
                    </div>

                    {/* Server List */}
                    <div className="grid gap-10 lg:gap-6 lg:grid-cols-2">
                        {isLoading ? (
                            // Render 7 skeleton loaders
                            Array.from({ length: 7 }).map((_, index) => (
                                <ServerCardSkeleton key={index} />
                            ))
                        ) : servers?.length === 0 ? (
                            <div className="text-white text-center lg:col-span-2">No servers found.</div>
                        ) : (
                            servers?.map((server, index) => (
                                <Card key={index} variant="translucent" className="p-6 lg:p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 hover:transform hover:scale-[1.01] flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
                                    {/* Server Info (Icon, Title, Version, IP) */}
                                    <div className="flex items-start gap-4 sm:gap-6 lg:gap-4 mb-4 lg:mb-0 w-full lg:w-auto flex-row">
                                        <Image
                                            src={server.image ?? ""}
                                            alt={`${server.imageAlt ?? "Server Icon"}`}
                                            width={72}
                                            height={72}
                                            className="rounded-md flex-shrink-0"
                                        />
                                        <div className="flex flex-col items-start justify-center">
                                            <h3 className="text-2xl lg:text-xl font-semibold text-white mb-2">{server.name}</h3>
                                            <p className="text-lg lg:text-base text-white/80">Version: {server.version}</p>
                                            <p className="text-lg lg:text-base text-white/80">IP: {server.ip}</p>
                                        </div>
                                    </div>

                                    {/* Status and Download actions */}
                                    <div className="flex flex-col items-end gap-3 w-full lg:w-auto">
                                        {/* Status Indicator */}
                                        <span className={`px-4 py-2 text-sm lg:text-xs font-semibold rounded-full text-center mb-3 w-full lg:w-auto
                                            ${server.status === 'Online' ? 'bg-green-500/20 text-green-400' :
                                                server.status === 'Offline' ? 'bg-red-500/20 text-red-400' :
                                                    'bg-yellow-500/20 text-yellow-400'}
                                        `}>
                                            {server.status === 'Online' ? `Online (${server.playerCount}/${server.maxPlayers})` : server.status}
                                        </span>

                                        {/* Download Button */}
                                        {server.downloadLink && (
                                            <Button variant="default" size="md" className="w-full lg:w-auto backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 flex-shrink-0 text-lg lg:text-base">
                                                <Link href={server.downloadLink} className="flex items-center justify-center text-white hover:text-white">
                                                    <IconDownload size={18} className="mr-2" />
                                                    Download
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            ))
                        )}
                        {/* Suggestion Card */}
                        <Card variant="translucent" className={`p-6 lg:p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 hover:transform hover:scale-[1.01] flex flex-col lg:flex-row items-start lg:items-center justify-between w-full
                            ${servers && servers.length % 2 === 0 ? 'lg:col-span-2' : ''}
                        `}>
                            {/* Server Info (Icon, Title, Version, IP) */}
                            <div className="flex items-start gap-4 sm:gap-6 lg:gap-4 mb-4 lg:mb-0 w-full lg:w-auto flex-row">
                                <div className="w-18 h-18 bg-neutral-700/50 rounded-md flex items-center justify-center flex-shrink-0">
                                    <IconBrandDiscord size={36} className="text-white/70" />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h3 className="text-2xl lg:text-xl font-semibold text-white mb-2">Missing your favorite modpack?</h3>
                                    <p className="text-lg lg:text-base text-white/80">Can&apos;t find what you&apos;re looking for?</p>
                                    <p className="text-lg lg:text-base text-white/80">Suggest it on Discord!</p>
                                </div>
                            </div>

                            {/* Status and Download actions */}
                            <div className="flex flex-col items-end gap-3 w-full lg:w-auto">
                                {/* Status Indicator */}
                                <span className="px-4 py-2 text-sm lg:text-xs font-semibold rounded-full text-center mb-3 w-full lg:w-auto bg-blue-500/20 text-blue-400">
                                    Join us!
                                </span>

                                {/* Download Button */}
                                <Button variant="default" size="md" className="w-full lg:w-auto backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 flex-shrink-0 text-lg lg:text-base">
                                    <Link href="/discord" className="flex items-center justify-center text-white hover:text-white">
                                        <IconBrandDiscord size={18} className="mr-2" />
                                        Join Discord
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>

            <Footer className="mt-32 lg:mt-20" />

        </div>
    );
}
