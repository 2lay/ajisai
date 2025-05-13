'use client';

import { Button } from "~/components/ui/button";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-semibold text-gray-900">
                            Logo
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-gray-600 hover:text-gray-900">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                            <Button size="sm" color="primary">
                                Sign In
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
