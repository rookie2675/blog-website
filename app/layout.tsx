import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import { GeistSans } from "geist/font/sans";

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
