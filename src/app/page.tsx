"use client";

import {
    IconArrowRight,
    IconBrandDiscord,
    IconChevronDown,
    IconClock,
    IconServer,
    IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import News from "./modules/news";
import Features from "./modules/features";
import Gallery from "./modules/gallery";
import Footer from "~/components/ui/footer";


const staff = [
    {
        name: "Gamer12209",
        role: "Administrator",
        image: "https://mc-heads.net/avatar/Gamer12209",
        description: "A dedicated administrator focused on community support",
        color: "text-[#ff6d6d]",
    },
    {
        name: "Ellie",
        role: "Owner",
        image: "https://mc-heads.net/avatar/2lay",
        description: "Leading the team and keeping the servers running smoothly since 2022",
        color: "text-[#ff6d6d]",
    },
    {
        name: "Aestoris",
        role: "Administrator",
        image: "https://mc-heads.net/avatar/Aestoris",
        description: "A dedicated administrator focused on server optimization and community support",
        color: "text-[#ff6d6d]",
    },


];
export default function Home() {
    return (
        <>
            {/* Hero Section */}
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

            {/* Main Content */}
            <div>
                {/* Hero Text and Buttons */}
                <div className="flex flex-col w-full min-h-screen">
                    <div className="relative w-full flex-1 flex flex-col items-center justify-center p-4 space-y-8">
                        <h1 className="z-100 text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 tracking-tight pb-2">
                            TMW.gg
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl mx-auto font-light leading-relaxed">
                            Join our vibrant community and discover the ultimate modded 
                            Minecraft experience with our servers.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Button
                                variant="default"
                                size="lg"
                                className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
                            >
                                <Link
                                    href="/servers"
                                    className="flex items-center text-white hover:text-white"
                                >
                                    <IconServer size={22} className="mr-2" />
                                    Browse Servers
                                </Link>
                            </Button>
                            <Button
                                variant="default"
                                size="lg"
                                className="backdrop-blur-sm bg-indigo-500/80 hover:bg-indigo-500/90 border border-indigo-400/30 rounded-xl transition-all duration-300"
                            >
                                <Link
                                    href="/discord"
                                    className="flex items-center text-white hover:text-white"
                                >
                                    <IconBrandDiscord size={22} className="mr-2" />
                                    Join Discord
                                </Link>
                            </Button>
                        </div>
                        <div className="absolute bottom-16 animate-bounce">
                            <IconChevronDown size={32} className="text-white/70" />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-neutral-900 py-16 border-t border-neutral-800 rounded-t-4xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}

                    {/* Features List */}
                    <div className="max-w-6xl mx-auto ">
                        <Features />
                    </div>

                    {/* Latest News Section */}
                    <div className="mt-24">
                        <News />
                    </div>

                    {/* Player Gallery Section */}
                    <div className="mt-24">
                        <Gallery />
                    </div>

                    {/* Server Stats Section */}
                    <div className="mt-24">
                        <div className="max-w-6xl mx-auto ">
                            <div className="flex flex-col items-center justify-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                                    Server Statistics
                                </h2>
                                <p className="text-lg text-white/70 mt-2">
                                    See how our community is growing
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-all duration-300 p-8 rounded-2xl">
                                    <div className="flex items-center justify-between">
                                        <div className="bg-primary-500/20 p-3 rounded-lg">
                                            <IconUsers className="w-8 h-8 text-primary-400" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-4xl font-bold text-white">1,000+</span>
                                            <span className="text-sm text-white/60">Discord Users</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-all duration-300 p-8 rounded-2xl">
                                    <div className="flex items-center justify-between">
                                        <div className="bg-indigo-500/20 p-3 rounded-lg">
                                            <IconServer className="w-8 h-8 text-indigo-400" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-4xl font-bold text-white">8</span>
                                            <span className="text-sm text-white/60">Active Servers</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-all duration-300 p-8 rounded-2xl">
                                    <div className="flex items-center justify-between">
                                        <div className="bg-blue-500/20 p-3 rounded-lg">
                                            <IconClock className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-4xl font-bold text-white">99.9%</span>
                                            <span className="text-sm text-white/60">Server Uptime</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Staff Team Section */}
                    <div className="mt-24">
                        <div className="flex flex-col items-center justify-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                                Meet Our Staff
                            </h2>
                            <p className="text-lg text-white/70 mt-2 text-center">
                                The team that keeps everything running smoothly
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                            {staff.map((staff, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300 p-8 text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-700/50 border-4 border-primary-400/40 overflow-hidden hover:border-primary-400/60 transition-colors">
                                        <Image
                                            src={staff.image}
                                            alt={`${staff.name}'s Minecraft Skin`}
                                            width={128}
                                            height={128}
                                            className="w-full h-full object-cover transform hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{staff.name}</h3>
                                    <p className={`text-lg font-medium ${staff.color}`}>{staff.role}</p>
                                    <p className="mt-4 text-white/70">{staff.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ready to Join Section */}
                    <div className="mt-24 mb-10">
                        <div className="flex flex-row items-stretch justify-between rounded-2xl bg-neutral-800/50 border border-neutral-700/60 overflow-hidden max-w-6xl mx-auto">
                            <div className="hidden md:block h-full relative w-1/2">
                                <div className="absolute inset-y-0 left-1/2 w-1/2 bg-gradient-to-l from-neutral-800 to-transparent z-10"></div>
                                <Image
                                    src="https://i.imgur.com/ZWZN57I.jpeg"
                                    alt="Minecraft Landscape"
                                    width={620}
                                    height={620}
                                    className="w-full h-full object-cover"
                                    style={{ minHeight: '100%' }}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-center md:w-1/2 p-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                    Ready to Jump In?
                                </h2>
                                <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto">
                                    Join our vibrant Minecraft community today and start your adventure.
                                </p>
                                <div className="mt-8">
                                    <Button
                                        link="/servers"
                                        color="primary"
                                    >
                                        <span className="flex items-center gap-2">
                                            Join Our Server Now
                                            <IconArrowRight />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-neutral-900 ">
                <Footer/>
            </div>
        </>
    );
}
