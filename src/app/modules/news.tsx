"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

interface NewsItem {
    image: string;
    imageAlt: string;
    category: string;
    categoryColor: string;
    title: string;
    description: string;
    author: string;
    authorAvatar: string;
    date: string;
    link: string;
    isViewMore: boolean;
}

// Cache key for local storage
const NEWS_CACHE_KEY = 'news_data';

export default function News() {
    const { data: newsData } = api.news.getRecent.useQuery();
    const [cachedNews, setCachedNews] = useState<NewsItem[]>([]);

    // Load cached data on mount and update when new data arrives
    useEffect(() => {
        // Try to load from cache first
        const cached = localStorage.getItem(NEWS_CACHE_KEY);
        if (cached) {
            const parsedCache = JSON.parse(cached) as NewsItem[];
            // Only use cache if no new data
            if (!newsData?.newsItems) {
                setCachedNews(parsedCache);
            }
        }

        // Always prioritize new data when available
        if (newsData?.newsItems) {
            setCachedNews(newsData.newsItems as unknown as NewsItem[]);
            localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(newsData.newsItems));
        }
    }, [newsData]);

    const newsItems = cachedNews;

    let newsLoaded = false;
    if (newsItems.length > 0) {
        newsLoaded = true;
    }

    // State for current news slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // --- News Slider Functionality ---
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        const newIntervalId = setInterval(() => {
            setCurrentSlide((
                prev,
            ) => (prev === newsItems.length - 1 ? 0 : prev + 1));
        }, 5000);
        setIntervalId(newIntervalId);
    };

    const nextSlide = () => {
        setCurrentSlide((
            prev,
        ) => (prev === newsItems.length - 1 ? 0 : prev + 1));
        startInterval();
    };

    const prevSlide = () => {
        setCurrentSlide((
            prev,
        ) => (prev === 0 ? newsItems.length - 1 : prev - 1));
        startInterval();
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        startInterval();
    };

    // Auto-advance slides effect
    useEffect(() => {
        if (newsItems.length > 0) {
            startInterval();
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [newsItems.length]);

    return (
        <>
            {/* Latest News Section */}
            <div className="mt-24 mb-16 ">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                        Latest News
                    </h2>
                    <p className="text-lg text-white/70 mt-2">
                        Stay updated with the latest announcements and server
                        updates
                    </p>
                </div>

                {/* News Slider */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300">
                        {/* Slideshow container */}
                        <div className="relative h-[330px]">
                            {/* Loading placeholder */}
                            {newsItems.length === 0 && (
                                <div className="absolute inset-0 flex flex-col md:flex-row">
                                    <div className="w-full md:w-1/2 relative bg-neutral-700/50 animate-pulse">
                                        {/* Image placeholder */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/50 to-neutral-800/50" />
                                    </div>
                                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                        <div className="overflow-y-auto max-h-[320px] pr-2 space-y-4">
                                            {/* Category placeholder */}
                                            <div className="w-24 h-6 bg-neutral-700/50 rounded-full animate-pulse" />

                                            {/* Title placeholder */}
                                            <div className="w-3/4 h-8 bg-neutral-700/50 rounded animate-pulse" />

                                            {/* Description placeholder */}
                                            <div className="space-y-2">
                                                <div className="w-full h-4 bg-neutral-700/50 rounded animate-pulse" />
                                                <div className="w-5/6 h-4 bg-neutral-700/50 rounded animate-pulse" />
                                                <div className="w-4/6 h-4 bg-neutral-700/50 rounded animate-pulse" />
                                            </div>
                                        </div>

                                        <div className="flex items-center mt-4 pt-4 border-t border-neutral-700/60">
                                            {/* Avatar placeholder */}
                                            <div className="w-10 h-10 rounded-full bg-neutral-700/50 animate-pulse mr-3" />

                                            {/* Author info placeholder */}
                                            <div className="space-y-2">
                                                <div className="w-32 h-4 bg-neutral-700/50 rounded animate-pulse" />
                                                <div className="w-24 h-3 bg-neutral-700/50 rounded animate-pulse" />
                                            </div>

                                            {/* Button placeholder */}
                                            <div className="ml-auto w-24 h-8 bg-neutral-700/50 rounded animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Actual content (hidden while loading) */}
                            {newsItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${
                                        currentSlide === index
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    <div className="w-full md:w-1/2 relative">
                                        <Image
                                            src={item.image ?? ''}
                                            alt={item.imageAlt ?? ''}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                        <div className="overflow-y-auto max-h-[300px] pr-2">
                                            <span
                                                className={`inline-block px-3 py-1 text-xs font-medium bg-${item.categoryColor}-500/20 text-${item.categoryColor}-300 rounded-full mb-4`}
                                            >
                                                {item.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/80 mb-6">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center mt-4 pt-4 border-t border-neutral-700/60">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                                <Image
                                                    src={item.authorAvatar ?? ''}
                                                    alt={`${item.author} avatar`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    {item.author}
                                                </p>
                                                <p className="text-white/60 text-sm">
                                                    {item.date}
                                                </p>
                                            </div>
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className={`ml-auto bg-${item.categoryColor}-500/20 hover:bg-${item.categoryColor}-500/30 text-${item.categoryColor}-300 border border-${item.categoryColor}-500/40`}
                                            >
                                                <Link
                                                    href={item.link}
                                                    className="flex items-center"
                                                >
                                                    {item.isViewMore
                                                        ? "View All News"
                                                        : "Read More"}
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slideshow controls with navigation arrows */}
                    <div
                        className={`animate-fade-in duration-500 ${
                            newsLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div
                            className={`mt-6 flex items-center justify-center gap-3`}
                        >
                            <button
                                onClick={prevSlide}
                                className="rounded-full flex items-center justify-center text-white/90 hover:bg-black/20 z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
                                aria-label="Previous slide"
                            >
                                <IconChevronLeft
                                    size={16}
                                    className="text-white/90"
                                />
                            </button>

                            {newsItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`relative w-12 h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                                        currentSlide === index
                                            ? "scale-110 h-2"
                                            : ""
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-white/20 hover:bg-white/30 transform transition-all duration-300 ease-in-out ${
                                            currentSlide === index
                                                ? "bg-white/40"
                                                : ""
                                        }`}
                                    />
                                    {currentSlide === index && (
                                        <div
                                            className="absolute inset-0 bg-white/70"
                                            style={{
                                                animation:
                                                    "slideProgress 5s linear forwards",
                                                transformOrigin: "left",
                                            }}
                                        />
                                    )}
                                    <style jsx>
                                        {`
                      @keyframes slideProgress {
                        from {
                          transform: scaleX(0);
                        }
                        to {
                          transform: scaleX(1);
                        }
                      }
                      @keyframes fadeIn {
                        from {
                          opacity: 0;
                        }
                        to {
                          opacity: 1;
                        }
                      }
                      .animate-fade-in {
                        animation: fadeIn 0.5s ease-in forwards;
                      }
                    `}
                                    </style>
                                </button>
                            ))}

                            <button
                                onClick={nextSlide}
                                className="rounded-full flex items-center justify-center text-white/90 hover:bg-black/20 z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
                                aria-label="Next slide"
                            >
                                <IconChevronRight
                                    size={16}
                                    className="text-white/90"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
