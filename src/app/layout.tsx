import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "B & B Concept Designs | Miami's Premier General Contractor",
    template: "%s | B & B Concept Designs",
  },
  description:
    "B & B Concept Designs is Miami's premier general contractor specializing in commercial painting, waterproofing, restoration, interior design & renovation. Over 45 years of experience. CGC#1530584.",
  metadataBase: new URL("https://bbconceptdesigns.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "B & B Concept Designs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
