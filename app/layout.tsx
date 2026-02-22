import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lvstudio.com";

export const metadata: Metadata = {
  title: "LV Studio | Fotografija i videografija",
  description:
    "LV Studio — kreativne vizualne usluge: fotografija, videografija i produkcija. Profesionalni sadržaj za brendove i događaje.",
  keywords: [
    "LV Studio",
    "fotografija",
    "videografija",
    "produkcija",
    "kreativne usluge",
    "vizualni sadržaj",
  ],
  authors: [{ name: "LV Studio" }],
  creator: "LV Studio",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "LV Studio",
    title: "LV Studio | Fotografija i videografija",
    description:
      "LV Studio — kreativne vizualne usluge: fotografija, videografija i produkcija.",
    images: [{ url: "/logo.png", alt: "LV Studio" }],
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "LV Studio | Fotografija i videografija",
    description: "LV Studio — kreativne vizualne usluge: fotografija, videografija i produkcija.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
