import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768;
        }
        return false; // Or a default you prefer for SSR
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            // Cleanup function
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return isMobile;
};
