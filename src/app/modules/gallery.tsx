"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface PlayerBuild {
    id: string;
    imageUrl: string;
    title: string;
    username: string;
    description: string;
    server: string;
}

const playerBuilds: PlayerBuild[] = [
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

export default function Gallery() {
    const [selectedBuild, setSelectedBuild] = useState<PlayerBuild | undefined>(playerBuilds[0] ?? undefined);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (autoPlay) {
            interval = setInterval(() => {
                setIsChanging(true);
                setTimeout(() => {
                    setSelectedBuild((currentBuild: PlayerBuild | undefined) => {
                        if (!currentBuild) return currentBuild; // Fallback to prevent undefined
                        const currentIndex = playerBuilds.findIndex(build => build.id === currentBuild.id);
                        const nextIndex = (currentIndex + 1) % playerBuilds.length;
                        const nextBuild = playerBuilds[nextIndex];
                        if (!nextBuild) return currentBuild; // Fallback to prevent undefined
                        return nextBuild;
                    });
                    setIsChanging(false);
                }, 200);
            }, 2800);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [autoPlay]);

    const handleBuildSelect = (build: PlayerBuild) => {
        setAutoPlay(false);
        setIsChanging(true);
        setTimeout(() => {
            setSelectedBuild(build);
            setIsChanging(false);
        }, 200);
    };

    const handlePrevSlide = () => {
        setAutoPlay(false);
        setIsChanging(true);
        setTimeout(() => {
            setSelectedBuild((currentBuild: PlayerBuild | undefined) => {
                if (!currentBuild) return currentBuild; // Fallback to prevent undefined
                const currentIndex = playerBuilds.findIndex(build => build.id === currentBuild.id);
                const prevIndex = currentIndex === 0 ? playerBuilds.length - 1 : currentIndex - 1;
                const prevBuild = playerBuilds[prevIndex];
                if (!prevBuild) return currentBuild; // Fallback to prevent undefined
                return prevBuild;
            });
            setIsChanging(false);
        }, 200);
    };

    const handleNextSlide = () => {
        setAutoPlay(false);
        setIsChanging(true);
        setTimeout(() => {
            setSelectedBuild((currentBuild: PlayerBuild | undefined) => {
                if (!currentBuild) return currentBuild; // Fallback to prevent undefined
                const currentIndex = playerBuilds.findIndex(build => build.id === currentBuild.id);
                const nextIndex = (currentIndex + 1) % playerBuilds.length;
                const nextBuild = playerBuilds[nextIndex];
                if (!nextBuild) return currentBuild; // Fallback to prevent undefined
                return nextBuild;
            });
            setIsChanging(false);
        }, 200);
    };

    if (!playerBuilds.length) {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight mb-4">
                    Player Showcase Gallery
                </h2>
                <p className="text-lg text-white/70">No player builds available to showcase yet.</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                    Player Showcase Gallery
                </h2>
                <p className="text-lg text-white/70 mt-2">
                    Check out these amazing builds from our talented community members
                </p>
                <Button color="primary" className="mt-6">
                    <Link href="/gallery/submit">
                        Want to be there? Submit your base!
                    </Link>
                </Button>
            </div>

            <div className="space-y-6">
                {/* Featured Build */}
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60">
                    <Image
                        src={selectedBuild?.imageUrl ?? ""}
                        alt={selectedBuild?.title ?? ""}
                        fill
                        className="object-cover transition-opacity duration-500"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Navigation Arrows */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                        <Button
                            size="sm"
                            onClick={handlePrevSlide}
                            className="bg-black/70 hover:bg-black/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/10"
                        >
                            <IconChevronLeft className="h-6 w-6 text-white" />
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleNextSlide}
                            className="bg-black/70 hover:bg-black/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/10"
                        >
                            <IconChevronRight className="h-6 w-6 text-white" />
                        </Button>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className={`space-y-3 transition-all duration-200 ${isChanging ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                            <div className="flex items-center gap-3">
                                <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white/90">
                                    {selectedBuild?.username}
                                </span>
                                <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white/90">
                                    {selectedBuild?.server}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-white">{selectedBuild?.title}</h3>
                            <p className="text-lg text-white/80 max-w-3xl">
                                {selectedBuild?.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {playerBuilds.map((build) => (
                        <button
                            key={build.id}
                            onClick={() => handleBuildSelect(build)}
                            className={`group relative h-40 rounded-xl overflow-hidden transition-all duration-300 ${selectedBuild?.id === build.id
                                    ? "ring-1 ring-white/70 scale-[0.98]"
                                    : "hover:ring-1 hover:ring-white/30 hover:scale-[1.02]"
                                }`}
                        >
                            <Image
                                src={build.imageUrl}
                                alt={build.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className={`absolute inset-0 transition-colors duration-300 ${selectedBuild?.id === build.id
                                    ? "bg-black/40"
                                    : "bg-black/20 group-hover:bg-black/30"
                                }`} />
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-sm font-medium text-white/90 truncate">{build.title}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
