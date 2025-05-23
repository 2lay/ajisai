'use client';

import { Button } from "~/components/ui/button";
import Link from "next/link";
import { IconArrowLeft, IconBrandDiscord, IconShoppingCart, IconServer, IconHome, IconPackage, IconTrophy, IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    if (pathname.startsWith('/test')) {
        return null;
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 ease-in-out opacity-0 border-b border-transparent ${isLoaded ? 'opacity-100' : ''
            } ${isScrolled
                ? 'bg-neutral-800/40 backdrop-blur-sm shadow-lg translate-y-0 border-white/10'
                : 'bg-transparent translate-y-2'
            }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-semibold text-gray-900">
                            <img
                                src="https://www.tmw.gg/_next/image?url=%2Flogo.png&w=256&q=75"
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
                            {/*
                            <Link
                                href="/leaderboards"
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/servers' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconTrophy size={20} />
                                <span>Leaderboards</span>
                            </Link>
                           
                            <Link
                                href="/modpacks"
                                className={`text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-sm ${pathname === '/dev' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''}`}
                            >
                                <IconPackage size={20} />
                                <span>Modpacks</span>
                            </Link>
                             */}
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
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white/70 hover:text-white p-2 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[9999] md:hidden h-screen"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            {/* Mobile Menu Content */}
            <div className={`rounded-l-4xl fixed top-0 right-0 h-full w-80 z-[99999] h-screen bg-neutral-900 border-l border-neutral-700 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto md:hidden`}>
                <div className="flex justify-end p-6">
                    <button
                        className="text-white/70 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconX size={28} />
                    </button>
                </div>
                <div className="px-6 flex flex-col space-y-3 pb-8">
                    <Link
                        href="/"
                        className={`text-white/70 hover:text-white p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center gap-3 text-base font-medium ${pathname === '/' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[50ms]' : 'opacity-0 translate-y-2'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconHome size={24} />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/servers"
                        className={`text-white/70 hover:text-white p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center gap-3 text-base font-medium ${pathname === '/servers' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[100ms]' : 'opacity-0 translate-y-2'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconServer size={24} />
                        <span>Servers</span>
                    </Link>
                    {/*
                    <Link
                        href="/servers"
                        className={`text-white/70 hover:text-white p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center gap-3 text-base font-medium ${pathname === '/servers' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[150ms]' : 'opacity-0 translate-y-2'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconTrophy size={24} />
                        <span>Leaderboards</span>
                    </Link>

                    <Link
                        href="/dev"
                        className={`text-white/70 hover:text-white p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center gap-3 text-base font-medium ${pathname === '/dev' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 translate-y-2'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconPackage size={24} />
                        <span>Modpacks</span>
                    </Link>
                     */}
                    <Link
                        href="/shop"
                        className={`text-white/70 hover:text-white p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center gap-3 text-base font-medium ${pathname === '/shop' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[250ms]' : 'opacity-0 translate-y-2'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconShoppingCart size={24} />
                        <span>Shop</span>
                    </Link>
                    <Link
                        href="/discord"
                        className={`text-white/70 hover:text-white p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ease-in-out flex items-center gap-3 text-base font-medium ${pathname === '/discord' ? 'bg-white/10 hover:bg-white/10 hover:text-white text-white border border-white/10' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-y-0 delay-[300ms]' : 'opacity-0 translate-y-2'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IconBrandDiscord size={24} />
                        <span>Discord</span>
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-700">
                    <p className="text-white/40 text-sm text-center">
                        © TMW.gg powered 2022 - {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </nav>
    );
}
