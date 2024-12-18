import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Blog Website",
    description: "Blog Website using Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
