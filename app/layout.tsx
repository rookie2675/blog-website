import type { Metadata } from "next";
import "./globals.css";
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
            <body style={{ display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
            </body>
        </html >
    );
}
