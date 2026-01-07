import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { buildPersonSchema, buildSoftwareSchema } from "@/lib/structured-data";
import { profile } from "@/lib/profile";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achraflachgar.me"),
  title: "Achraf Lachgar | Junior AI Engineer",
  description:
    "Junior AI Engineer specializing in generative AI, RAG systems, LLM fine-tuning, and full-stack AI application development.",
  keywords: [
    "AI engineer",
    "LLM",
    "RAG",
    "fine-tuning",
    "Next.js",
    "FastAPI",
    "Generative AI",
    "Pinecone",
    "ChromaDB",
  ],
  openGraph: {
    title: "Achraf Lachgar | Junior AI Engineer",
    description:
      "Building AI-powered applications with RAG, fine-tuning, and full-stack integration.",
    url: "https://achraflachgar.me",
    siteName: "Achraf Lachgar Portfolio",
    images: [
      {
        url: "https://achraflachgar.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Achraf Lachgar — Junior AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achraf Lachgar | Junior AI Engineer",
    description:
      "AI-powered applications with RAG, fine-tuning, and full-stack integration.",
    images: ["https://achraflachgar.me/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = JSON.stringify(buildPersonSchema(profile));
  const softwareSchema = JSON.stringify(buildSoftwareSchema(profile.projects));

  return (
    <html lang="en">
      <head>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personSchema }}
        />
        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: softwareSchema }}
        />
      </head>
      <body className={`${grotesk.variable} ${mono.variable} antialiased relative`}> 
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(124,123,255,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(126,247,214,0.12),transparent_30%)]" />
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(135deg,rgba(9,12,23,0.9),rgba(4,6,12,0.95))]" />
        {children}
      </body>
    </html>
  );
}
