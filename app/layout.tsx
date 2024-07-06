import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyHeaderComponent from "@/app/compo/myheader";
import FooterComponent from "@/app/compo/footer";
import { Roboto } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})
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
      <body className={roboto.className}>
     <MyHeaderComponent/>
      {children}
     <FooterComponent/>
      </body>

    </html>
  );
}
