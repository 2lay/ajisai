'use client';

import { Button } from "~/components/ui/button";
import Link from "next/link";
import { IconArrowLeft, IconBrandDiscord, IconShoppingCart, IconServer, IconHome, IconPackage } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 ease-in-out opacity-0 border-b border-transparent ${
            isLoaded ? 'opacity-100' : ''
        } ${
            isScrolled 
                ? 'bg-neutral-800/40 backdrop-blur-sm shadow-lg translate-y-0 border-white/10' 
                : 'bg-transparent translate-y-2'
        }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-semibold text-gray-900">
                            <img 
                                src="https://media.discordapp.net/attachments/1359535761074163765/1359535939529212176/tmw_logo.png?ex=6824a902&is=68235782&hm=f5edb8acd811b530ca76684f84be2c9c79bbb2dc380942fdeab7d7df806f7adb&=&format=webp&quality=lossless&width=3480&height=1433"
                                alt="TMW Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <Link 
                                href="/" 
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconHome size={20} />
                                <span>Home</span>
                            </Link>
                            <Link 
                                href="/servers" 
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/servers' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconServer size={20} />
                                <span>Servers</span>
                            </Link>
                            <Link 
                                href="/dev" 
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/dev' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconPackage size={20} />
                                <span>Modpacks</span>
                            </Link>
                            
                            <Link 
                                href="/shop" 
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/shop' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconShoppingCart size={20} />
                                <span>Shop</span>
                            </Link>
                            <Link 
                                href="/discord" 
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/discord' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconBrandDiscord size={20} />
                                <span>Discord</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
