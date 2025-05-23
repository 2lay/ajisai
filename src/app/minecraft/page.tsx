"use client";

import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/footer";

// Data structure for server information
const servers = [
    {
        icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
        version: "1.18.2",
        title: "Modpack A",
        players: 120,
        ip: "127.0.0.1",
        status: "Online", // Added status
        downloadLink: "#", // Placeholder link
    },
    {
        icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
        version: "1.19.4",
        title: "Modpack B",
        players: 85,
        ip: "lol.tmw.gg",
        status: "Offline", // Added status
        downloadLink: "#", // Placeholder link
    },
    {
        icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
        version: "1.20.1",
        title: "Modpack C",
        players: 210,
        ip: "play.tmw.gg",
        status: "Maintenance", // Added status
        downloadLink: "#", // Placeholder link
    },
        {
        icon: "https://i.imgur.com/wH0rHw3.png", // Placeholder image
        version: "1.20.1",
        title: "Modpack C",
        players: 210,
        ip: "play.tmw.gg",
        status: "Maintenance", // Added status
        downloadLink: "#", // Placeholder link
    },
];

export default function MinecraftServers() {
    return (
        <>

            {/* Hero Section */}
            <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/ZWZN57I.jpeg)' }}>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Minecraft Servers
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-neutral-900 py-20 border-t border-neutral-800 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Introductory Text - Enhanced Design (Not a Card) */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Server List
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Discover our collection of modded servers, each crafted for different playstyles. Whether you're looking for tech, magic, or exploration, find the perfect server to call home.
                        </p>
                    </div>

                    {/* Players Online Counter */}
                    <div className="text-right text-white/70 text-lg mb-10 mt-10">
                        0 players online {/* This will likely need to be dynamic */}
                    </div>

                    {/* Server List */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        {servers.map((server, index) => (
                            <div key={index} className="bg-neutral-800/50 p-4 sm:p-6 rounded-lg border border-neutral-700/60 flex flex-col lg:flex-row items-start lg:items-center justify-between shadow-md hover:bg-neutral-700/60 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out w-full">
                                {/* Server Info (Icon, Title, Version, IP) */}
                                <div className="flex items-start gap-4 sm:gap-6 mb-4 lg:mb-0 w-full lg:w-auto flex-row">
                                    <Image
                                        src={server.icon}
                                        alt={`${server.title} Icon`}
                                        width={72}
                                        height={72}
                                        className="rounded-md flex-shrink-0"
                                    />
                                    <div className="flex flex-col items-start justify-center">
                                        <h3 className="text-2xl font-semibold text-white/90 mb-2">{server.title}</h3>
                                        <p className="text-lg text-white/70">Version: {server.version}</p>
                                        <p className="text-lg text-white/70">IP: {server.ip}</p>
                                    </div>
                                </div>

                                {/* Status and Download actions */}
                                <div className="flex flex-col items-end gap-3 w-full lg:w-auto">
                                    {/* Status Indicator */}
                                    <span className={`px-4 py-2 text-sm font-semibold rounded-full text-center mb-3 w-full lg:w-auto
                                        ${server.status === 'Online' ? 'bg-green-500/20 text-green-400' :
                                          server.status === 'Offline' ? 'bg-red-500/20 text-red-400' :
                                          'bg-yellow-500/20 text-yellow-400'}
                                    `}>
                                        {server.status === 'Online' ? `Online (${server.players}/?)` : server.status}
                                    </span>

                                    {/* Download Button */}
                                    {server.downloadLink && (
                                        <Button variant="default" size="md" className="w-full lg:w-auto backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 flex-shrink-0 text-lg">
                                            <Link href={server.downloadLink} className="flex items-center justify-center text-white hover:text-white">
                                                <IconDownload size={18} className="mr-2" />
                                                Download
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Suggestion Card */}
                        <div className={`bg-neutral-800/50 p-8 rounded-lg border border-neutral-700/60 flex flex-col items-center text-center justify-center shadow-md hover:bg-neutral-700/60 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                            ${servers.length % 2 === 0 ? 'md:col-span-2' : ''}
                        `}>
                            <h3 className="text-2xl font-semibold text-white/90 mb-4">Isn&apos;t your server here?</h3>
                            <p className="text-lg text-white/70 mb-5">
                                Suggest it to us on Discord!
                            </p>
                             <Button variant="default" size="md" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300">
                                <Link href="#" className="flex items-center text-white hover:text-white text-lg">
                                     {/* Assuming you have a Discord icon, replace with correct import and usage */}
                                     {/* Example: <IconBrandDiscord size={18} className="mr-1" /> */}
                                     Join our Discord
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Join Discord Section - Wrapped in Card */}
                    <div className={`mt-16 p-8 rounded-lg border shadow-md text-center mx-auto
                        bg-neutral-800/50 border-neutral-700/60 hover:bg-neutral-700/60 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                    `}>
                        <h3 className="text-3xl font-bold text-white/90 mb-4">Join Our Community on Discord</h3>
                        <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
                            Connect with other players, get updates, suggest new servers, and get help! Click the button below to join our Discord server and become part of the TMW community.
                        </p>
                        {/* Placeholder for Discord Image */}
                        {/* Replace the src attribute with the actual path or URL of your Discord image */}
                        <div className="mb-8">
                            <img src="/placeholder-discord-image.png" alt="Discord Community Image" className="mx-auto rounded-lg shadow-lg" style={{ maxWidth: '400px' }} />
                        </div>
                        <Button variant="default" size="lg" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 text-xl">
                            <Link href="#" className="flex items-center justify-center text-white hover:text-white">
                                {/* Assuming you have a Discord icon, replace with correct import and usage */}
                                {/* Example: <IconBrandDiscord size={24} className="mr-2" /> */}
                                Join our Discord
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-900">
                <Footer/>
            </div>
        </>
    );
}
