import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technovateglobal.com"),

  title: {
    default: "Technovate Global Solutions Ltd | Technology, Solar & Technical Services",
    template: "%s | Technovate Global Solutions Ltd",
  },

  description:
    "Technovate Global Solutions Ltd provides software development, AI and data solutions, solar and electrical services, procurement, technical equipment supply, machinery, and business solutions in Nigeria.",

  keywords: [
    "Technovate Global Solutions",
    "Technovate Global Solutions Ltd",
    "software development Nigeria",
    "AI solutions Nigeria",
    "data science Nigeria",
    "solar installation Nigeria",
    "electrical services Nigeria",
    "procurement Nigeria",
    "technical equipment supply",
    "industrial machinery supply",
    "business solutions Nigeria",
    "Lokoja technology company",
    "Kogi State technology company",
  ],

  authors: [
    {
      name: "Technovate Global Solutions Ltd",
    },
  ],

  creator: "Technovate Global Solutions Ltd",
  publisher: "Technovate Global Solutions Ltd",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://technovateglobal.com",
    siteName: "Technovate Global Solutions Ltd",
    title:
      "Technovate Global Solutions Ltd | Technology, Solar & Technical Services",
    description:
      "Technology, AI, data science, solar, electrical, procurement, technical equipment supply, and business solutions in Nigeria.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Technovate Global Solutions Ltd | Technology, Solar & Technical Services",
    description:
      "Technology, AI, data science, solar, electrical, procurement, and technical solutions in Nigeria.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
