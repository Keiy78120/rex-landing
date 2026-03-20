import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REX — The First Agentic PC",
  description: "REX is building the first truly agentic personal computer. AI-native from silicon to soul.",
  keywords: ["agentic PC", "AI computer", "REX", "autonomous computing", "AI-native"],
  openGraph: {
    title: "REX — The First Agentic PC",
    description: "AI-native from silicon to soul. The future of personal computing.",
    url: "https://rex-ai.vercel.app",
    siteName: "REX",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "REX — The First Agentic PC",
    description: "AI-native from silicon to soul.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
