import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "../../Components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Hexleap Assignment",
  description: "This is my frontend assignment for Hexleap",
  icons: "/image.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
