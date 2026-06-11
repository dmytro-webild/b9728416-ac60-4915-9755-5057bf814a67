import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Apex Advertising Group - Elevating Luxury Brands',
  description: 'Apex Advertising Group specializes in crafting bespoke marketing and advertising campaigns for luxury businesses, driving unparalleled results and brand elevation.',
  keywords: ["luxury advertising, advertising agency, marketing campaigns, brand development, digital marketing, premium marketing"],
  openGraph: {
    "title": "Apex Advertising Group - Elevating Luxury Brands",
    "description": "Apex Advertising Group specializes in crafting bespoke marketing and advertising campaigns for luxury businesses, driving unparalleled results and brand elevation.",
    "url": "https://www.apexadvertising.com",
    "siteName": "Apex Advertising Group",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/workplace-with-laptop_23-2147651756.jpg",
        "alt": "Luxury modern office interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Apex Advertising Group - Elevating Luxury Brands",
    "description": "Apex Advertising Group specializes in crafting bespoke marketing and advertising campaigns for luxury businesses, driving unparalleled results and brand elevation.",
    "images": [
      "http://img.b2bpic.net/free-photo/workplace-with-laptop_23-2147651756.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
