'use client';
import React, { ReactNode, useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from './SideBar';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Code, GraduationCap, BriefcaseBusiness, FileText } from 'lucide-react';


export const SidebarContainer = ({
    children,
}: {
    children: ReactNode;
}) => {
    const links = [
        {
            label: 'Home',
            href: '/',
            icon: <IconHome className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: 'Projects',
            href: '/projects',
            icon: (
                <Code className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: 'Education',
            href: '/education',
            icon: (
                <GraduationCap className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: 'Experience',
            href: '/experience',
            icon: (
                <BriefcaseBusiness className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: 'Download CV',
            href: '/static/Mauricio Javier Chaile CV.pdf',
            icon: (
                <FileText className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div
            className={
                cn(
                    'mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md md:flex-row',
                    'h-screen',
                )
            }
        >
            <Sidebar open={open} setOpen={setOpen} >
                <SidebarBody className="justify-between gap-10" >
                    <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden" >
                        {open ? <Logo /> : <LogoIcon />}

                        <div className="mt-8 flex flex-col gap-2" >
                            {
                                links.map((link, idx) => (
                                    <SidebarLink rel={link.rel ? link.rel : null} target={link.target ? link.target : null} key={idx} link={link} />
                                ))
                            }

                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>

            < div className="w-full overflow-auto p-5 md:min-w-[100%]" > {children} </div>
        </div>
    );
};

export const Logo = () => (
    <Link
        href="/"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="whitespace-pre font-medium text-black dark:text-white"
        >
            <code>My portfolio</code>
        </motion.span>
    </Link>
);

export const LogoIcon = () => (
    <Link
        href="#"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >

    </Link>
);
