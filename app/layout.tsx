import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import MyHeaderComponent from "@/app/compo/myheader";
import FooterComponent from "@/app/compo/footer";
import Template from "@/app/template";

// const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({
    weight: ['400'],
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

    <body className={open_Sans.className}>
    <MyHeaderComponent/>
    <Template>
        {children}
    </Template>
    <FooterComponent/>
    </body>

    </html>
  );
}
