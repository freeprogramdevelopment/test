import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lvstudio.com";

export const metadata: Metadata = {
  title: "LV Studio | Fotografija, video, tehničko crtanje i 3D print",
  description:
    "LV Studio — fotografija, video, tehničko crtanje i 3D print. Profesionalne vizualne usluge za brendove, proizvode i projekte.",
  keywords: [
    "LV Studio",
    "fotografija",
    "videografija",
    "tehničko crtanje",
    "3D print",
    "CAD crteži",
    "prototipovi",
    "produkcija",
    "vizualne usluge",
  ],
  authors: [{ name: "LV Studio" }],
  creator: "LV Studio",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "LV Studio",
    title: "LV Studio | Fotografija, video, tehničko crtanje i 3D print",
    description:
      "LV Studio — fotografija, video, tehničko crtanje i 3D print. Profesionalne vizualne usluge za brendove, proizvode i projekte.",
    images: [{ url: `${siteUrl}/logo.png`, alt: "LV Studio" }],
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LV Studio | Fotografija, video, tehničko crtanje i 3D print",
    description:
      "LV Studio — fotografija, video, tehničko crtanje i 3D print. Profesionalne vizualne usluge za brendove, proizvode i projekte.",
    images: [`${siteUrl}/logo.png`],
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
    <html lang="hr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
