'use client';

import React, { useEffect, useRef } from 'react';
import twemoji from '@twemoji/api';

const twemojiConfig = {
    folder: 'svg',
    ext: '.svg',
    base: 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/',
    className: 'emoji',
};

interface TwemojiProviderProps {
    children: React.ReactNode;
    className?: string;
}

export const TwemojiProvider: React.FC<TwemojiProviderProps> = ({
    children,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const parseEmojis = () => {
            if (containerRef.current) {
                twemoji.parse(containerRef.current, twemojiConfig);
                // Remove the hiding class after parsing
                containerRef.current.classList.remove('twemoji-loading');
            }
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    parseEmojis();
                }
            });
        });

        parseEmojis();

        if (containerRef.current) {
            observer.observe(containerRef.current, {
                childList: true,
                subtree: true,
                characterData: true,
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`twemoji-loading ${className}`}>
            {children}
        </div>
    );
}; 
