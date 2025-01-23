import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

// Apply the Poppins and Roboto fonts
const geistSans = Poppins({
  subsets: ["latin"],
  weight: "100",
});

const geistMono = Roboto({
  subsets: ["latin"], weight:["400","500",]
});

export const metadata: Metadata = {
  title: "Macro-One stop solution for rides, parcels and deliveries",
  description: "Want to go green choose Macro for your everyday routine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} max-w-screen overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
