'use client';

import Link from "next/link";
import { Card } from "~/components/ui/card";

export default function TestPage() {


    const tests = [
        {
            name: "Gallery",
            href: "/test/gallery",
            id: "gallery-test"
        },
        {
            name: "News", 
            href: "/test/news",
            id: "news-test"
        },
        {
            name: "UI Components",
            href: "/test/ui",
            id: "ui-test"
        }
    ]

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 space-y-8">
            <Card className="max-w-3xl mx-auto text-center p-8 backdrop-blur-sm bg-white/10 border border-white/20">
                <h1 className="text-4xl font-bold text-white/90 mb-4 tracking-tight">
                    Welcome to Our Testing Page
                </h1>
                <p className="text-lg text-white/70">
                    This is where we experiment with and showcase our UI components and features.
                </p>
            </Card>
            
            <Card className="max-w-3xl mx-auto text-center p-8 backdrop-blur-sm bg-white/10 border border-white/20">
                <h2 className="text-3xl font-bold text-white/90 mb-6 tracking-tight">
                    Available Tests
                </h2>
                <div className="flex justify-center gap-4">
                    {tests.map((test) => (
                        <Link 
                            key={test.name}
                            href={test.href} 
                            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                        >
                            {test.name}
                        </Link>
                    ))}
                </div>
            </Card>
        </div>
    );
}
