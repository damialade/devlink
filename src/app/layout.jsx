import { Jost } from "next/font/google";
import "./styles/globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "DevLink",
  description: "A fully-functional link-sharing app for developers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />

        <meta name="theme-color" content="#ffffff" />
      </head>
      {/* <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
       
      </head> */}
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
