import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admision",
    description: "Portal de admision",
};

export default function AdmisionLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}