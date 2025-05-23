"use client";

import { Button } from "~/components/ui/button";
import Link from "next/link";

import Footer from "~/components/ui/footer";

import Image from 'next/image';
import { Card } from "~/components/ui/card";
import { IconArrowLeft, IconBrandPatreon } from "@tabler/icons-react";

export default function Component() {
    return (
        <main className="min-h-screen flex flex-col pt-20 support-image">
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
            <div className="flex-grow flex p-4 items-center justify-center">
                <Card className="w-full max-w-4xl bg-neutral-950/50 border text-white border-neutral-700/50 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <h1 className="text-2xl font-bold">Claiming Your Rank</h1>
                                <div className="flex space-x-2">
                                <Link href="https://patreon.com/tmwgg">
                                    <Button size="sm" className="w-full flex items-center">
                                        <IconBrandPatreon className="w-4 h-4 mr-2" />
                                        Patreon
                                    </Button>
                                </Link>
                                <Link href="/shop">
                                    <Button size="sm" className="w-full flex items-center">
                                        <IconArrowLeft className="w-4 h-4 mr-2" />
                                        Go back
                                    </Button>
                                </Link>
                                </div>
                            </div>
                                <div className="text-sm text-muted-foreground space-y-4">
                                    <p>
                                        Welcome to our support guide! This article will help you link your Discord account with Patreon and claim your rank on our servers.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Linking Your Discord Account with Patreon</h2>
                                <p>
                                    To link your Discord account with Patreon, follow these steps:
                                </p>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>
                                        Go to <Link href="https://patreon.com/tmwgg" className="text-blue-500 hover:underline font-semibold hover:text-blue-700 transition duration-300 ease-in-out">Patreon</Link> and log in to your account.
                                    </li>
                                    <li>
                                        Click on <span className="font-bold">Settings</span> from the left side menu.
                                    </li>
                                    <li>
                                        Click on <span className="font-bold">More</span> and then <Link href="https://www.patreon.com/settings/apps" className="text-blue-500 hover:underline font-semibold hover:text-blue-700 transition duration-300 ease-in-out">Connected Apps</Link> from the menu bar.
                                    </li>
                                    <li>
                                        Click on Discord and then click the <span className="font-bold">Connect</span> button to connect your Discord account with Patreon.
                                        <Image 
                                            src="https://i.imgur.com/lZZLu7K.png" 
                                            className="rounded-xl my-4" 
                                            alt="Patreon Discord" 
                                            width={500} 
                                            height={500}
                                        />
                                    </li>
                                    <li>
                                        Enter the email address or phone number you use to log in with Discord and your password, then click the <span className="font-bold">Login</span> button.
                                    </li>
                                    <li>
                                        Click the <span className="font-bold">Authorize</span> button.
                                    </li>
                                    <li>
                                        You&apos;ve successfully linked Discord to Patreon! You may need to refresh the page.
                                    </li>
                                </ol>


                                <h2 className="text-xl font-semibold">Claiming Your Rank on Our Servers</h2>
                                <p>
                                    After linking your Discord account with Patreon, follow these steps to claim your rank on our servers:
                                </p>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>
                                        Join our <Link href="https://discord.gg/tmwgg" className="text-blue-500 hover:underline font-semibold hover:text-blue-700 transition duration-300 ease-in-out">Discord</Link> server.
                                    </li>
                                    <li>
                                        Head over to the <span className="bg-neutral-800 text-white rounded-md px-1 py-0.3 mx-0.5">🔗・claim-your-rank</span> channel.
                                    </li>
                                    <li>
                                        Click the <span className="font-bold">&quot;Claim Rank&quot; button</span>.
                                    </li>
                                    <li>
                                        If this is your first time claiming your rank, you will need to enter your Minecraft username.
                                    </li>
                                    <li>
                                        <span className="italic">Note: Once we release a new server, you&apos;ll need to click the button again for that server. You can claim the rank on as many servers as you want.</span>
                                    </li>
                                </ol>
                                <h2 className="text-xl font-semibold">Something went wrong?</h2>

                                <p>
                                    If any issues occur, visit <Link href="https://support.patreon.com/hc/en-us/articles/212052266-Getting-Discord-access" className="text-blue-500 hover:underline font-semibold hover:text-blue-700 transition duration-300 ease-in-out">this page</Link>. Or contact @2lay on Discord for assistance, we only provide support on Discord not via Patreon messages.
                                </p>
                                <p className="text-right">
                                    Last edited: 2024-09-26 by <a className="font-bold">2lay</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </main>
    );
}
