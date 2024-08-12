import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import MyHeaderComponent from "@/app/compo/myheader";
import FooterComponent from "@/app/compo/footer";
import Template from "@/app/template";

// const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
    weight: ['500'],
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

    <body className={ubuntu.className}>
    <MyHeaderComponent/>
    <Template>
        {children}
    </Template>
    <FooterComponent/>
    </body>

    </html>
  );
}
