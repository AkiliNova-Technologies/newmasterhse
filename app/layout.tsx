import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.newmasterhse.com"),

  title: {
    default:
      "NewMaster Occupational Health & Safety | Integrated Workplace Health, Safety & Wellbeing Solutions",
    template: "%s | NewMaster Occupational Health & Safety",
  },

  description:
    "NewMaster Occupational Health & Safety provides integrated occupational health, workplace safety, environmental, training, compliance, wellbeing, and consulting solutions for safer, healthier, and more productive workplaces across Africa.",

  authors: [
    {
      name: "NewMaster Occupational Health & Safety",
    },
  ],

  openGraph: {
    title:
      "NewMaster Occupational Health & Safety | Safer Workplaces. Healthier People. Stronger Organizations.",

    description:
      "Integrated occupational health, safety, environmental, training, compliance, wellbeing, consulting, and digital solutions for modern workplaces across Africa.",

    url: "https://dev.newmasterhse.com",

    siteName: "NewMaster Occupational Health & Safety",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NewMaster Occupational Health & Safety – Safer Workplaces. Healthier People. Stronger Organizations.",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NewMaster Occupational Health & Safety",

    description:
      "Integrated occupational health, safety, environmental, and wellbeing solutions for safer, healthier workplaces.",

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
