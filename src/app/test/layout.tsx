'use client';

import { useState } from "react";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "~/components/ui/navbar/page";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function DevPage({ children }: { children: React.ReactNode }) {
    const [isLocalhost, setIsLocalhost] = useState(true);

    useEffect(() => {
        if (window.location.hostname !== 'localhost') {
            setIsLocalhost(false);
        }
    }, []);

    if (!isLocalhost) {
        return notFound();
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800">
                <div className="p-4 flex gap-x-4">
                    <Button 
                        color="primary"
                        size="lg"
                    >
                        <Link href="/">
                            Back to Index
                        </Link>
                    </Button>
                    <Button 
                        color="secondary"
                        size="lg"
                    >
                        <Link href="/test">
                            Back to Index Testing Page
                        </Link>
                    </Button>
                </div>
                {children}
            </div>
        </>
    );
}
