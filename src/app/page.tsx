"use client";

import { IconBrandDiscord } from "@tabler/icons-react";
import { IconServer } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
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
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl shadow-lg transition-all duration-300"
            >
              <Link href="/servers" className="flex items-center text-white hover:text-white">
                <IconServer size={22} className="mr-2" />
                Browse Servers
              </Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="backdrop-blur-sm bg-indigo-500/80 hover:bg-indigo-500/90 border border-indigo-400/30 rounded-xl shadow-lg transition-all duration-300"
            >
              <Link href="/discord" className="flex items-center text-white hover:text-white">
                <IconBrandDiscord size={22} className="mr-2" />
                Join Discord
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-800/40 backdrop-blur-sm rounded-lg shadow-md p-6 space-y-4"
          >
            <div className="h-48 bg-neutral-700/40 rounded-md animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-neutral-700/40 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-neutral-700/40 rounded animate-pulse w-1/2" />
            </div>
            <div className="flex justify-between items-center">
              <div className="h-8 w-24 bg-neutral-700/40 rounded animate-pulse" />
              <div className="h-8 w-8 bg-neutral-700/40 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
