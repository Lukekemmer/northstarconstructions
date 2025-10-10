import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  // display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  // display: "swap",
});

export const metadata: Metadata = {
  title: "North Star Constructions",
  description: "Building strength below and above ground",
  icons: {
    icon: "/logo_icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/splash_image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
