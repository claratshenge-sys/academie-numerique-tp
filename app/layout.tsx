import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Académie Numérique | Formation Informatique à Goma",
  description: "Formations pratiques en développement web, réseaux et IA à Goma.",
  authors: [{ name: "Clarisse Lodi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <GoogleAnalytics gaId="G-QH5KRZCMJN" />
      </body>
    </html>
  );
}