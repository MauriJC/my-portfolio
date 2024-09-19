"use client"

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};

export default Typewriter;
