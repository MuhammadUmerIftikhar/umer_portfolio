import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Umer Iftikhar | Unity Game Developer",
  description:
    "Top Rated Unity Expert with 6+ years of experience building high-performance Mobile, PC & WebGL games. Specializing in Photon Multiplayer, Firebase, PlayFab, and scalable game architecture. 100% Job Success on Upwork.",
  keywords: [
    "Unity Developer",
    "Unity Game Developer",
    "Mobile Game Developer",
    "Photon Multiplayer",
    "WebGL Game Development",
    "C# Developer",
    "Firebase Unity",
    "PlayFab",
    "Muhammad Umer Iftikhar",
    "Top Rated Upwork",
  ],
  authors: [{ name: "Muhammad Umer Iftikhar" }],
  openGraph: {
    title: "Muhammad Umer Iftikhar | Unity Game Developer",
    description:
      "Top Rated Unity Expert - Mobile, PC & WebGL games, Photon Multiplayer, 100% Job Success on Upwork.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#06060a]">{children}</body>
    </html>
  );
}
