import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import MyHeaderComponent from "@/app/compo/myheader";
import FooterComponent from "@/app/compo/footer";
import Template from "@/app/template";

const open_Sans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "MikeVersity | Mike Litman - Business Growth Mentor & Thought Leader",
    template: "%s | MikeVersity"
  },
  description: "Mike Litman's MikeVersity helps entrepreneurs achieve breakthrough success through proven business strategies, mindset training, and personal development.",
  keywords: [
    "Mike Litman",
    "MikeVersity",
    "business growth",
    "entrepreneur success",
    "mindset training",
    "personal development",
    "business mentor",
    "thought leadership"
  ],
  authors: [{ name: "Mike Litman", url: "https://mikeversity.com" }],
  creator: "Mike Litman",
  publisher: "MikeVersity",
  metadataBase: new URL("https://mikeversity.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MikeVersity | Transform Your Business and Mindset",
    description: "Join Mike Litman's MikeVersity to access world-class business training and personal growth strategies.",
    url: "https://mikeversity.com",
    siteName: "MikeVersity",
    images: [
      {
        url: "https://mikeversity.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MikeVersity by Mike Litman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MikeVersity | Mike Litman - Business Growth Mentor",
    description: "Proven strategies for business success and personal growth from Mike Litman",
    images: ["https://mikeversity.com/images/twitter-card.jpg"],
    creator: "@mikelitman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${open_Sans.className} bg-black text-gray-900 antialiased`}>
      <MyHeaderComponent/>

      <main id="main-content">
        <Template>
          {children}
        </Template>
      </main>

      <FooterComponent/>

      {/* Structured data for better SEO */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MikeVersity",
              "url": "https://mikeversity.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mikeversity.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
      />
      </body>
      </html>
  );
}
