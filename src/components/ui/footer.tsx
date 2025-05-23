import Image from "next/image";
import Link from "next/link";
import { IconBrandDiscord, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer({ className }: { className?: string }) {
    return (
        <div className={className}>
        <div className={`relative`}>
            {/* Main Background Image */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
                <Image
                    src="https://i.imgur.com/gozjSRl.jpeg"
                    alt="Main footer background"
                    fill
                    className="object-cover blur-[10px]"
                    priority
                />
                <Image
                    src="https://i.imgur.com/gozjSRl.jpeg"
                    alt="Main footer background"
                    fill
                    className="object-cover blur-[10px]"
                    priority
                />
            </div>

            <footer className="z-12 bg-neutral-950/80 border-t border-neutral-800 rounded-t-3xl relative">
                {/* Background Image */}


                <div className="max-w-6xl mx-auto px-4 py-12 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo & Description */}
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="https://github.com/tmwdotgg.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-lg"
                                    priority
                                />
                                <span className="text-xl font-bold text-white">TMW.gg</span>
                            </Link>
                            <p className="mt-4 text-sm text-white/70">
                                Join us for the best modded Minecraft experience with our curated collection of modpacks. Be part of our growing community of players who love to build, explore and create!
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link href="/servers" className="text-sm text-white/70 hover:text-white transition-colors">
                                        Servers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Shop" className="text-sm text-white/70 hover:text-white transition-colors">
                                        Shop
                                    </Link>
                                </li>
                                {/* 
                                <li>
                                    <Link href="/rules" className="text-sm text-white/70 hover:text-white transition-colors">
                                        Rules
                                    </Link>
                                </li>
                                */}
                                <li>
                                    <Link href="/credits" className="text-sm text-white/70 hover:text-white transition-colors">
                                        Credits
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Community</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <a
                                        href="https://discord.gg/tmwgg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                        <IconBrandDiscord className="w-4 h-4" />
                                        Discord
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/tmwdotgg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                        <IconBrandGithub className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/tmwdotgg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                                    >
                                        <IconBrandTwitter className="w-4 h-4" />
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-neutral-800">
                        <p className="text-center text-sm text-white/60">
                            © TMW.gg powered 2022 - {new Date().getFullYear()}. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
}
