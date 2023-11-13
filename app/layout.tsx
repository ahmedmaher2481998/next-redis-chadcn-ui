import { Button } from "@/components/ui/button";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maher Books",
  description: "A Library By Ahmed maher ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full shadow-md flex items-center justify-center bg-slate-100">
          <div className="max-w-2xl p-2  w-full flex justify-between">
            <div className="font-light text-2xl">Maher Books</div>
            <Link href="/create">
              <Button variant={"default"}>Add Book</Button>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
