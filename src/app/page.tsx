"use client";

import {
  IconBrandDiscord,
  IconChevronLeft,
  IconChevronRight,
  IconShoppingCart,
  IconServer,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export default function Home() {
  // State for current news slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // --- News Slider Functionality ---
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    setIntervalId(newIntervalId);
  };


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
    startInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
    startInterval();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startInterval();
  };


  // Auto-advance slides effect
  useEffect(() => {
    startInterval();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // --- Mobile Detection Effect ---
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        text: "text-indigo-100",
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
        text: "text-blue-200",
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
        text: "text-primary-200",
        dot: "bg-primary-400",
      },
    },
  ];

  const { data: newsData } = api.news.getAll.useQuery();
  const newsItems = newsData?.newsItems ?? [];

  let newsLoaded = false;
  if (newsItems.length > 0) {
    newsLoaded = true;
  }

  // --- Render ---
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tighter">
              TMW.gg
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl mx-auto font-light leading-relaxed">
              Experience Modded Minecraft like never before with our carefully
              curated selection of modpacks and servers
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
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-neutral-900 py-16 border-t border-neutral-800 rounded-t-4xl">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
              What we offer
            </h2>
            <p className="text-lg text-white/70 mt-2">
              Discover our collection of unique modded Minecraft experiences.
            </p>
          </div>

          {/* Features List */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300"
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
                        <h3 className="text-2xl font-bold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-white/80 mb-4">{feature.description}</p>

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

          {/* Latest News Section */}
          <div className="mt-24 mb-16 ">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
                Latest News
              </h2>
              <p className="text-lg text-white/70 mt-2">
                Stay updated with the latest announcements and server updates
              </p>
            </div>

            {/* News Slider */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300">
                {/* Slideshow container */}
                <div className="relative h-[300px]">
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
                      className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <div className="w-full md:w-1/2 relative">
                        <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
                      </div>
                      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                        <div className="overflow-y-auto max-h-[320px] pr-2">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium bg-${item.categoryColor}-500/20 text-${item.categoryColor}-300 rounded-full mb-4`}
                          >
                            {item.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-white/80 mb-6">{item.description}</p>
                        </div>

                        <div className="flex items-center mt-4 pt-4 border-t border-neutral-700/60">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src={item.authorAvatar}
                              alt={`${item.author} avatar`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-white font-medium">{item.author}</p>
                            <p className="text-white/60 text-sm">{item.date}</p>
                          </div>
                          <Button
                            variant="default"
                            size="sm"
                            className={`ml-auto bg-${item.categoryColor}-500/20 hover:bg-${item.categoryColor}-500/30 text-${item.categoryColor}-300 border border-${item.categoryColor}-500/40`}
                          >
                            <Link href={item.link} className="flex items-center">
                              {item.isViewMore ? "View All News" : "Read More"}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slideshow controls with navigation arrows */}
                <div className={`animate-fade-in duration-500 ${newsLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`mt-6 flex items-center justify-center gap-3`}>
                    <button
                      onClick={prevSlide}
                      className="rounded-full flex items-center justify-center text-white/90 hover:bg-black/20 z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
                      aria-label="Previous slide"
                    >
                      <IconChevronLeft size={16} className="text-white/90" />
                    </button>

                    {newsItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative w-12 h-1.5 rounded-full overflow-hidden transition-all duration-300 ${currentSlide === index ? "scale-110 h-2" : ""
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div
                          className={`absolute inset-0 bg-white/20 hover:bg-white/30 transform transition-all duration-300 ease-in-out ${currentSlide === index ? "bg-white/40" : ""
                            }`}
                        />
                        {currentSlide === index && (
                          <div
                            className="absolute inset-0 bg-white/70"
                            style={{
                              animation: "slideProgress 5s linear forwards",
                              transformOrigin: "left",
                            }}
                          />
                        )}
                        <style jsx>{`
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
                    `}</style>
                      </button>

                    ))}

                    <button
                      onClick={nextSlide}
                      className="rounded-full flex items-center justify-center text-white/90 hover:bg-black/20 z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
                      aria-label="Next slide"
                    >
                      <IconChevronRight size={16} className="text-white/90" />
                    </button>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
