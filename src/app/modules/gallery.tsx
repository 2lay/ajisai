"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { api } from "~/trpc/react";

interface PlayerBuild {
    id: string;
    imageUrl: string;
    title: string;
    username: string;
    description: string;
    server: string;
}

// Cache key for local storage
const GALLERY_CACHE_KEY = 'gallery_data';

export default function Gallery() {
    const { data: galleryData } = api.gallery.getBuilds.useQuery();
    const [cachedBuilds, setCachedBuilds] = useState<PlayerBuild[]>([]);
    const [selectedBuild, setSelectedBuild] = useState<PlayerBuild | null>(null);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isChanging, setIsChanging] = useState(false);

    // Load cached data on mount and update when new data arrives
    useEffect(() => {
        // Try to load from cache first
        const cached = localStorage.getItem(GALLERY_CACHE_KEY);
        if (cached) {
            const parsedCache = JSON.parse(cached) as PlayerBuild[];
            // Only use cache if no new data
            if (!galleryData?.builds) {
                setCachedBuilds(parsedCache);
            }
        }

        // Always prioritize new data when available
        if (galleryData?.builds) {
            setCachedBuilds(galleryData.builds as unknown as PlayerBuild[]);
            localStorage.setItem(GALLERY_CACHE_KEY, JSON.stringify(galleryData.builds));
            // Update selected build if it exists in new data
            if (selectedBuild) {
                const updatedBuild = galleryData.builds.find(b => b.id === selectedBuild.id);
                if (updatedBuild && (
                    updatedBuild.imageUrl !== selectedBuild.imageUrl ||
                    updatedBuild.title !== selectedBuild.title ||
                    updatedBuild.description !== selectedBuild.description ||
                    updatedBuild.username !== selectedBuild.username ||
                    updatedBuild.server !== selectedBuild.server
                )) {
                    setSelectedBuild(updatedBuild as unknown as PlayerBuild);
                }
            }
        }
    }, [galleryData, selectedBuild]);

    // Use cached builds instead of directly using galleryData
    const playerBuilds = cachedBuilds;

    // Set initial selected build when data loads
    useEffect(() => {
        if (playerBuilds.length > 0 && !selectedBuild) {
            setSelectedBuild(playerBuilds[0] ?? null);
        }
    }, [playerBuilds, selectedBuild]);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (autoPlay && playerBuilds.length > 0) {
            interval = setInterval(() => {
                const currentIndex = selectedBuild 
                    ? playerBuilds.findIndex(build => build.id === selectedBuild.id)
                    : -1;
                const nextIndex = (currentIndex + 1) % playerBuilds.length;
                const nextBuild = playerBuilds[nextIndex];

                setIsChanging(true);
                setTimeout(() => {
                    setSelectedBuild(nextBuild ?? null);
                    setIsChanging(false);
                }, 200);
            }, 2800);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [autoPlay, selectedBuild, playerBuilds]);

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
            setSelectedBuild((currentBuild) => {
                if (!currentBuild) return playerBuilds[0] ?? null;
                const currentIndex = playerBuilds.findIndex(build => build.id === currentBuild.id);
                const prevIndex = currentIndex === 0 ? playerBuilds.length - 1 : currentIndex - 1;
                const prevBuild = playerBuilds[prevIndex];
                return prevBuild ?? currentBuild;
            });
            setIsChanging(false);
        }, 200);
    };

    const handleNextSlide = () => {
        setAutoPlay(false);
        setIsChanging(true);
        setTimeout(() => {
            setSelectedBuild((currentBuild) => {
                if (!currentBuild) return playerBuilds[0] ?? null;
                const currentIndex = playerBuilds.findIndex(build => build.id === currentBuild.id);
                const nextIndex = (currentIndex + 1) % playerBuilds.length;
                const nextBuild = playerBuilds[nextIndex];
                return nextBuild ?? currentBuild;
            });
            setIsChanging(false);
        }, 200);
    };

    

    return (
        <div className="max-w-6xl mx-auto ">
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

            <GalleryImages selectedBuild={selectedBuild} setSelectedBuild={setSelectedBuild} handlePrevSlide={handlePrevSlide} handleNextSlide={handleNextSlide} isChanging={isChanging} handleBuildSelect={handleBuildSelect} />

        </div>
    );
}

function GalleryImages({ selectedBuild, setSelectedBuild, handlePrevSlide, handleNextSlide, isChanging, handleBuildSelect }: { selectedBuild: PlayerBuild | null, setSelectedBuild: (build: PlayerBuild | null) => void, handlePrevSlide: () => void, handleNextSlide: () => void, isChanging: boolean, handleBuildSelect: (build: PlayerBuild) => void }) {
    const { data: galleryData } = api.gallery.getBuilds.useQuery();
    const [cachedBuilds, setCachedBuilds] = useState<PlayerBuild[]>([]);

    // Load cached data on mount and update when new data arrives
    useEffect(() => {
        const cached = localStorage.getItem(GALLERY_CACHE_KEY);
        if (cached) {
            const parsedCache = JSON.parse(cached) as PlayerBuild[];
            // Only use cache if no new data
            if (!galleryData?.builds) {
                setCachedBuilds(parsedCache);
            }
        }

        if (galleryData?.builds) {
            setCachedBuilds(galleryData.builds as unknown as PlayerBuild[]);
            localStorage.setItem(GALLERY_CACHE_KEY, JSON.stringify(galleryData.builds));
        }
    }, [galleryData]);

    const playerBuilds = cachedBuilds;

    if (!playerBuilds.length) {
        return (
            <div className="space-y-4 md:space-y-6">
                <div className="relative h-[300px] md:h-[500px] w-full rounded-xl md:rounded-2xl overflow-hidden bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60">
                    <div className="w-full h-full relative bg-neutral-700/50 animate-pulse">
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/50 to-neutral-800/50" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                        <div className="overflow-y-auto space-y-3 md:space-y-4">
                            <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                <div className="w-20 md:w-24 h-5 md:h-6 bg-neutral-700/50 rounded-full animate-pulse" />
                                <div className="w-20 md:w-24 h-5 md:h-6 bg-neutral-700/50 rounded-full animate-pulse" />
                            </div>
                            <div className="w-3/4 h-6 md:h-8 bg-neutral-700/50 rounded animate-pulse" />
                            <div className="space-y-1.5 md:space-y-2">
                                <div className="w-full h-3 md:h-4 bg-neutral-700/50 rounded animate-pulse" />
                                <div className="w-5/6 h-3 md:h-4 bg-neutral-700/50 rounded animate-pulse" />
                                <div className="w-4/6 h-3 md:h-4 bg-neutral-700/50 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="relative h-32 md:h-40 rounded-lg md:rounded-xl overflow-hidden bg-neutral-800/50">
                            <div className="w-full h-full relative bg-neutral-700/50 animate-pulse">
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/50 to-neutral-800/50" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="space-y-4 md:space-y-6">
        {/* Featured Build */}
        <div className="relative h-[300px] md:h-[500px] w-full rounded-xl md:rounded-2xl overflow-hidden bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60">
            {selectedBuild && (
                <Image
                    src={selectedBuild.imageUrl}
                    alt={selectedBuild.title}
                    fill
                    className={`object-cover transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    priority
                    key={selectedBuild.id + selectedBuild.imageUrl}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4">
                <Button
                    size="sm"
                    onClick={handlePrevSlide}
                    className="bg-black/70 hover:bg-black/80 backdrop-blur-sm rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-white/10"
                >
                    <IconChevronLeft className="h-6 w-6 md:h-6 md:w-6 text-white scale-[3] md:scale-100" />
                </Button>
                <Button
                    size="sm"
                    onClick={handleNextSlide}
                    className="bg-black/70 hover:bg-black/80 backdrop-blur-sm rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-white/10"
                >
                    <IconChevronRight className="h-6 w-6 md:h-6 md:w-6 text-white scale-[3] md:scale-100" />
                </Button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <div className={`space-y-2 md:space-y-3 transition-all duration-200 ${isChanging ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <span className="bg-white/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium text-white/90">
                            {selectedBuild?.username}
                        </span>
                        <span className="bg-white/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium text-white/90">
                            {selectedBuild?.server}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-white">{selectedBuild?.title}</h3>
                    <p className="text-sm md:text-lg text-white/80 max-w-3xl line-clamp-3 md:line-clamp-none">
                        {selectedBuild?.description}
                    </p>
                </div>
            </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
            {playerBuilds.map((build) => (
                <button
                    key={build.id}
                    onClick={() => handleBuildSelect(build)}
                    className={`group relative h-32 md:h-40 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${selectedBuild?.id === build.id
                            ? "ring-1 ring-white/70 scale-[0.98]"
                            : "hover:ring-1 hover:ring-white/30 hover:scale-[1.02]"
                        }`}
                >
                    <Image
                        src={build.imageUrl}
                        alt={build.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        key={build.id + build.imageUrl}
                    />
                    <div className={`absolute inset-0 transition-colors duration-300 ${selectedBuild?.id === build.id
                            ? "bg-black/40"
                            : "bg-black/20 group-hover:bg-black/30"
                        }`} />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-xs md:text-sm font-medium text-white/90 truncate">{build.title}</p>
                    </div>
                </button>
            ))}
        </div>
    </div>
    );
}
