import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "아카이브",
  description:
    "한국엄마학자협회(KMSS) 뉴스레터 및 관련 연구 자료 아카이브입니다.",
  openGraph: {
    title: "아카이브 | KMSS",
    description: "한국엄마학자협회 뉴스레터 및 관련 연구 자료 아카이브.",
    url: "https://www.koreanmotherscholar.org/archive",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org/archive",
  },
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
