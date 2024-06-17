import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "template2",
    description: "template2",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="bumblebee">
            <body className="h-screen flex flex-col">
                <Navbar />
                <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
