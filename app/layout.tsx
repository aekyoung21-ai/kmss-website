import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.koreanmotherscholar.org"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "한국엄마학자협회 | KMSS",
    template: "%s | KMSS",
  },
  description:
    "연대의 힘으로 서로를 지지하며, 학문과 육아를 아우르는 지속가능한 여정. Korean MotherScholar Society.",
  openGraph: {
    title: "한국엄마학자협회 | KMSS",
    description: "연대의 힘으로 서로를 지지하며, 학문과 육아를 아우르는 지속가능한 여정. Korean MotherScholar Society.",
    siteName: "한국엄마학자협회 KMSS",
    url: "https://www.koreanmotherscholar.org",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "한국엄마학자협회 | KMSS",
    description: "연대의 힘으로 서로를 지지하며, 학문과 육아를 아우르는 지속가능한 여정.",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org",
  },
  verification: {
    google: "1IrEbaPikg-8Ef2n2F9v05JQ24hurq6uEAdH1maHWs4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
