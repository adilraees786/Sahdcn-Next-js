import { Button } from "@/components/ui/button";
import "../globals.css";
import Link from "next/link";
export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={"flex min-h-screen"}>
                   
                    <div className={"w-[100%]"}>{children}</div>
                </div>
            </body>
        </html>
    );
}