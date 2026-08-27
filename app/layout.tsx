import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "NewMaster Health and Safety | Workplace Health, Safety & Wellbeing Solutions",
    template: "%s | NewMaster Health and Safety",
  },

  description: SITE_DESCRIPTION,

  authors: [{ name: "NewMaster Health and Safety" }],

  openGraph: {
    title: `NewMaster Health and Safety | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "NewMaster Health and Safety",
    images: [
      {
        url: "/images/about-handshake.jpg",
        width: 1200,
        height: 630,
        alt: "NewMaster Health and Safety professionals supporting safer African workplaces",
      },
    ],
    locale: "en_UG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NewMaster Health and Safety",
    description: SITE_DESCRIPTION,
    images: ["/images/about-handshake.jpg"],
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
