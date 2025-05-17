import { IconUsers } from "@tabler/icons-react";

import { IconClock } from "@tabler/icons-react";

import { IconServer } from "@tabler/icons-react";

export default function Stats() {
    return (
        <>
            <div className="mt-24 mb-16">
                <div className="max-w-6xl mx-auto px-4">
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
        </>
    )
}
