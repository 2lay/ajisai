"use client";

import { IconShoppingCart, IconBrandPatreon, IconHelpCircle } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/footer";

// Data structure for the table
const ranks = [
    { name: "Member", price: "Free", buttonLink: "#", color: "text-white" },
    { name: "Diamond", price: "$5", buttonLink: "#", color: "text-cyan-400" }, // Example color
    { name: "Ardite", price: "$15", buttonLink: "#", color: "text-orange-400" }, // Example color
    { name: "Vibrant", price: "$25", buttonLink: "#", color: "text-lime-400" }, // Example color
    { name: "Infinity", price: "$50", buttonLink: "#", color: "text-purple-400" }, // Example color
];

const features = [
    { name: "Claim Chunks", values: [100, 150, 300, 400, 999] },
    { name: "Force Loaded Chunks", values: [2, 6, 8, 16, 24] },
    { name: "Homes", values: [4, 8, 16, 32, 128] },
    { name: "Inactivity Till Chunk Unclaim", values: ["7 Days", "14 Days", "21 Days", "30 Days", "60 Days"] },
    { name: "Inactivity Till Chunk Unload", values: ["2 Days", "3 Days", "5 Days", "7 Days", "14 Days"] },
    { name: "TPA Cooldown", values: [90, 45, 15, 8, "Instant"] },
    { name: "Home Cooldown", values: [90, 45, 15, 8, "Instant"] },
    { name: "Commands", isHeader: true }, // Section header
    { name: "/hat", values: [false, true, true, true, true], isCommand: true },
    { name: "/cofh workbench", values: [false, true, true, true, true], isCommand: true },
    { name: "/cofh enderchest", values: [false, false, true, true, true], isCommand: true },
    { name: "/enderchest", values: [false, false, false, true, true], isCommand: true },
    // Add other commands or features as needed
];

export default function Store() {
    return (
        <>
        
            {/* Hero Section - can keep or modify */}
            <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/ZWZN57I.jpeg)' }}>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Shop
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-neutral-900 py-16 border-t border-neutral-800 px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-6xl mx-auto">
                    {/* Introductory Text and Buttons */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight mb-4">
                                Discover our perks!
                            </h2>
                            <p className="text-lg text-white/70 mb-4">
                                We&apos;re a non-profit server, and all of our profits go to the server.
                                Payments are securely processed by <a href="#" className="text-primary-400 hover:underline">Patreon</a> on a monthly basis.
                            </p>
                            <p className="text-md text-white/60">
                                For help with claiming your rank, please click the <span className="text-primary-400">Claim rank</span> button on the right.
                            </p>
                        </div>

                    </div>

                    {/* Rank Comparison Table/Grid */}
                    <div className="hidden sm:block">
                    <div className="overflow-x-auto rounded-lg border border-neutral-700/60">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-neutral-800/50">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-white/90 border-b border-neutral-700/60">Rank name</th>
                                    {ranks.map((rank, index) => (
                                        <th key={index} className={`px-4 py-3 text-center text-sm font-semibold ${rank.color} border-b border-neutral-700/60`}>
                                            {rank.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, fIndex) => (
                                    <tr key={fIndex} className={
                                        `
                                        ${feature.isHeader ? 'bg-neutral-800/70 font-semibold text-white/90' : ''}
                                        ${['Claim Chunks', 'Force Loaded Chunks', 'TPA Cooldown', 'Home Cooldown'].includes(feature.name) ? 'bg-neutral-800/50 font-semibold text-white/90' : ''}
                                        ${!feature.isHeader && !['Claim Chunks', 'Force Loaded Chunks', 'TPA Cooldown', 'Home Cooldown'].includes(feature.name) && fIndex % 2 === 0 ? 'bg-neutral-800/30' : ''}
                                        text-white/70 border-b border-neutral-700/60
                                        `
                                    }>
                                        <td className="px-4 py-3 text-left text-sm">{feature.name}</td>
                                        {ranks.map((rank, rIndex) => (
                                            <td key={rIndex} className="px-4 py-3 text-center text-sm">
                                                {feature.isHeader ? (
                                                    '' // No content for header row under rank columns
                                                ) : feature.isCommand ? (
                                                    // Display checkmark or cross for commands
                                                    feature.values[rIndex] ? '✅' : '❌'
                                                ) : (
                                                    // Display feature value
                                                    feature.values ? feature.values[rIndex] : ''
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                {/* Price Row */}
                                <tr className="bg-neutral-800/70 font-semibold text-white/90 border-b border-neutral-700/60">
                                    <td className="px-4 py-3 text-left text-sm">Price</td>
                                    {ranks.map((rank, index) => (
                                        <td key={index} className={`px-4 py-3 text-center text-sm ${rank.color}`}>
                                            {rank.price}
                                        </td>
                                    ))}
                                </tr>
                                    <tr className="bg-neutral-800/70 font-semibold text-white/90 border-b border-neutral-700/60">
                                    <td className="px-4 py-3 text-left text-sm">
                                        Purchase
                                    </td>
                                        {ranks.map((rank, index) => (
                                        <td key={index} className="px-4 py-3 text-left text-sm">
                                            <Button variant="default" size="sm" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300">
                                                <Link href="#" className={`flex items-center ${rank.color} hover:text-white justify-center`}>
                                                    Purchase {rank.name}
                                                </Link>
                                            </Button>
                                        </td>
                                        ))}
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                    </div>

                    {/* Mobile Rank Cards */}
                    <div className="block sm:hidden">
                        <div className="grid gap-6">
                            {ranks.map((rank, rIndex) => (
                                <div key={rIndex} className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700/60">
                                    <h3 className={`text-2xl font-bold mb-4 ${rank.color}`}>{rank.name}</h3>
                                    <p className="text-xl text-white/90 mb-6">{rank.price}</p>
                                    <ul className="space-y-3 mb-6">
                                        {features.map((feature, fIndex) => (
                                            !feature.isHeader && (
                                                <li key={fIndex} className="flex justify-between items-center text-white/70 text-sm">
                                                    <span>{feature.name}</span>
                                                    <span>
                                                        {feature.isCommand ? (
                                                            feature.values[rIndex] ? '✅' : '❌'
                                                        ) : (
                                                            feature.values ? feature.values[rIndex] : ''
                                                        )}
                                                    </span>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                    <Button variant="default" size="lg" className="w-full backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300">
                                         <Link href="#" className="flex items-center text-white hover:text-white justify-center">
                                             Purchase {rank.name}
                                         </Link>
                                     </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Claim Rank Section */}
            <div className="bg-neutral-900">
            <div className="bg-neutral-800 py-12 px-4 sm:px-6 lg:px-8 rounded-t-3xl border border-neutral-700/60">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Text and Buttons */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white/90 mb-4">Claim Your Purchased Rank!</h2>
                        <p className="text-lg text-white/70 mb-6">
                            Purchased your rank? Follow our guide to understand how to claim it on the server.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <Button variant="default" size="lg" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300">
                                <Link href="#" className="flex items-center text-white hover:text-white">
                                    <IconBrandPatreon size={22} className="mr-2" />
                                    Patreon
                                </Link>
                            </Button>
                            <Button variant="default" size="lg" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300">
                                <Link href="#" className="flex items-center text-white hover:text-white">
                                    <IconHelpCircle size={22} className="mr-2" />
                                    Claim rank Guide
                                </Link>
                            </Button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center">
                         {/* Replace with your image path and alt text */}
                        <Image
                            src="https://i.imgur.com/ZWZN57I.jpeg" // Use a relevant image or a placeholder
                            alt="Claim Rank Illustration"
                            width={400} // Adjust size as needed
                            height={250}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-neutral-900">
                <Footer/>
            </div>
        </>
    );
}
