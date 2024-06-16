import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyHeaderComponent from "@/app/compo/myheader";
import FooterComponent from "@/app/compo/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Litman : Global Thought Leader",
  description: "Global Thought Leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <MyHeaderComponent/>
      {children}
     <FooterComponent/>
      </body>

    </html>
  );
}
