import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://suryansh-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suryansh Rathore | Full Stack & AI/ML Engineer",
    template: "%s | Suryansh Rathore",
  },
  description:
    "Enterprise-grade portfolio of Suryansh Rathore — Full Stack & Applied AI/ML Engineer building high-throughput distributed systems, intelligent recommendation platforms, and clinical healthcare AI.",
  keywords: [
    "Suryansh Rathore",
    "Full Stack Engineer",
    "AI/ML Engineer",
    "Machine Learning",
    "FastAPI",
    "Next.js",
    "TechMax",
    "FINDtech",
    "SERVE Healthcare",
    "Python",
    "Healthcare AI",
    "Distributed Systems",
  ],
  authors: [{ name: "Suryansh Rathore", url: "https://github.com/suryanshrathore964" }],
  creator: "Suryansh Rathore",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Suryansh Rathore | Full Stack & AI/ML Engineer",
    description:
      "Enterprise-grade portfolio of Suryansh Rathore. Specialized in high-throughput full stack applications, recommendation engines, and clinical healthcare AI.",
    siteName: "Suryansh Rathore Architecture Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Suryansh Rathore // Lead Systems & AI/ML Engineer",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansh Rathore | Full Stack & AI/ML Engineer",
    description:
      "Architecting high-throughput full stack applications, recommendation engines, and clinical healthcare AI systems.",
    creator: "@suryansh964",
    images: ["/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
