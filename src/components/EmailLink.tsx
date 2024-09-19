'use client'
import { Mail } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailLink = () => {
    const [isLabelVisible, setIsLabelVisible] = useState(false);

    const email = 'xaviermauricio33@gmail.com'; // Reemplaza con tu correo electrónico

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        alert('Email copied to clipboard');
    };

    return (
        <div className="relative">
            <button

                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                    e.preventDefault();
                    setIsLabelVisible(!isLabelVisible);
                }}
            >
                <Mail className="h-8 w-8" />
                <span className="mt-1">Email</span>
            </button>
            {isLabelVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute top-full mt-2 p-4 bg-gray-900 border border-gray-300 rounded shadow-lg"
                >
                    <p>{email}</p>
                    <button
                        onClick={handleCopyEmail}
                        className="mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-950"
                    >
                        Copy
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default EmailLink;
