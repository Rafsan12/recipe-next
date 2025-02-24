import { Geist, Geist_Mono } from "next/font/google";
import FooterPage from "./Footer/page";
import "./globals.css";
import HeaderPage from "./Header/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LWS Kitchen - Food Blog and Recipes",
  description: "LWS Kitchen - Food Blog and Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-white">
          <HeaderPage />

          {children}

          <FooterPage />
        </div>
      </body>
    </html>
  );
}
