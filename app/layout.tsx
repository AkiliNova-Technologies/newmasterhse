import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "NovaCore Consulting | Business Strategy, Operations & Digital Transformation",
  description:
    "NovaCore Consulting helps African businesses scale through strategy, operational excellence, and digital transformation. Practical execution. Measurable results.",
  authors: [{ name: "AkiliNova Technologies" }],
  openGraph: {
    title: "Business & Digital Transformation Consulting | NovaCore",
    description:
      "We help organizations clarify strategy, optimize operations, and execute digital transformation across Africa.",
    url: "https://novacore-agency.netlify.app",
    siteName: "NovaCore Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NovaCore Consulting – Business & Digital Transformation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaCore Consulting",
    description:
      "Strategy, operations, and digital transformation for ambitious African businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
