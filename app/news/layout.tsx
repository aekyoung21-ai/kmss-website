import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소식",
  description:
    "한국엄마학자협회(KMSS)의 공지사항, 특강 및 행사, 보도자료를 확인하세요.",
  openGraph: {
    title: "소식 | KMSS",
    description: "한국엄마학자협회의 공지사항, 특강 및 행사, 보도자료.",
    url: "https://www.koreanmotherscholar.org/news",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org/news",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
