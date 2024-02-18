import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { inter } from "@/app/styles/fonts";

export const metadata: Metadata = {
    title: "Next Base",
    description: "Backend by next js",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
);
}