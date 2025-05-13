"use client";

import { IconBrandDiscord, IconShoppingCart } from "@tabler/icons-react";
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
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
            >
              <Link href="/servers" className="flex items-center text-white hover:text-white">
                <IconServer size={22} className="mr-2" />
                Browse Servers
              </Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="backdrop-blur-sm bg-indigo-500/80 hover:bg-indigo-500/90 border border-indigo-400/30 rounded-xl transition-all duration-300"
            >
              <Link href="/discord" className="flex items-center text-white hover:text-white">
                <IconBrandDiscord size={22} className="mr-2" />
                Join Discord
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Discord Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300">
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://i.imgur.com/N3CvDN8.png"
                  alt="Discord community preview"
                  fill
                  className="object-cover object-right transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-indigo-400/90 px-2 py-1 rounded-md text-xs font-medium">
                  1K+ MEMBERS
                </div>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <IconBrandDiscord className="w-7 h-7 text-indigo-300" />
                    <h3 className="text-2xl font-bold text-white">Discord Community</h3>
                  </div>
                  <p className="text-lg text-white/80 mb-4">Join thousands of players in our vibrant Discord community. Get help, share builds, and connect with friends.</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-indigo-100 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                      <span>Welcoming Community</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                      <span>Important Announcements</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-indigo-400/20 hover:bg-indigo-400/30 text-indigo-200 hover:text-indigo-100 border-2 border-indigo-400/40 hover:border-indigo-300 transition-all duration-300 font-medium"
                  >
                    <Link href="/discord" className="flex items-center gap-3">
                      <IconBrandDiscord size={20} />
                      Join us on Discord
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300">
            <div className="relative flex flex-col md:flex-row-reverse items-center gap-6 p-6 md:p-8">
              <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://i.imgur.com/knTubhD.jpeg"
                  alt="Shop features preview"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-blue-400/90 px-2 py-1 rounded-md text-xs font-medium">
                  EXCLUSIVE PERKS
                </div>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <IconShoppingCart className="w-7 h-7 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">Premium Perks</h3>
                  </div>
                  <p className="text-lg text-white/80 mb-4">Enhance your gameplay with premium perks and exclusive in-game features to stand out from the crowd.</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-blue-200 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>More Homes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Reduced Cooldowns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Force Load Chunks</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 border-2 border-blue-500/40 hover:border-blue-400 transition-all duration-300 font-medium"
                  >
                    <Link href="/shop" className="flex items-center gap-3">
                      <IconShoppingCart size={20} />
                      View Store
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Servers Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 hover:border-neutral-600/80 transition-colors duration-300">
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://preview.redd.it/what-200-concurrent-modded-minecraft-players-looks-like-v0-1h6zsye38bkb1.png?width=1080&crop=smart&auto=webp&s=3f5908ea32d4868384ac1ddf535860a342a67e6b"
                  alt="Minecraft servers preview"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-primary-500/90 px-2 py-1 rounded-md text-xs font-medium">
                  4 ACTIVE SERVERS
                </div>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <IconServer className="w-7 h-7 text-primary-400" />
                    <h3 className="text-2xl font-bold text-white">Minecraft Servers</h3>
                  </div>
                  <p className="text-lg text-white/80 mb-4">Explore our collection of modded servers. From tech to vanilla+, find your perfect playground.</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-primary-200 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>High-End Hardware</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>Lag-Free Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>24/7 Uptime</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 hover:text-primary-200 border-2 border-primary-500/40 hover:border-primary-400 transition-all duration-300 font-medium"
                  >
                    <Link href="/servers" className="flex items-center gap-3">
                      <IconServer size={20} />
                      Explore Servers
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
