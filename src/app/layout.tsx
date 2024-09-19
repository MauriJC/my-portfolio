import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SidebarContainer } from "@/components/ui/SideBar-Container";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mauricio's portfolio",
  description: "Next js portfolio",
  icons: {
    icon: '/circle-arrow-right.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarContainer>
          {children}
        </SidebarContainer>
      </body>
    </html>
  );
}
