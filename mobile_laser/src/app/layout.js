import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./utils/animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//scaling
export const metadata = {
  title: "Your App Name",
  description: "App description",
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    minimumScale: 0.8,
    maximumScale: 1.5,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=0.8, maximum-scale=1.5, user-scalable=no"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

