"use client";

import { useState } from "react";

const tabs = ["전체", "공지사항", "특강 및 행사", "보도자료"] as const;
type Tab = (typeof tabs)[number];

const newsItems = [
  {
    category: "공지사항",
    date: "2025.06",
    title: "한국엄마학자협회(KMSS) 창립총회 개최",
    desc: "2025년 6월 창립총회를 온라인으로 개최하였습니다. 초대 임원진 16명과 함께 협회의 새로운 시작을 알렸습니다.",
    tag: "공지" as const,
  },
  {
    category: "특강 및 행사",
    date: "2025",
    title: "특강 및 행사 소식",
    desc: "KMSS의 특강 및 행사 소식을 준비 중입니다. 곧 업데이트될 예정입니다.",
    tag: "특강" as const,
  },
  {
    category: "보도자료",
    date: "2025",
    title: "보도자료",
    desc: "언론 보도 및 인터뷰 자료를 준비 중입니다.",
    tag: "보도" as const,
  },
];

const tagStyle: Record<string, string> = {
  공지: "bg-kmss-berry/10 text-kmss-berry",
  특강: "bg-kmss-navy/10 text-kmss-navy",
  보도: "bg-kmss-blue/20 text-kmss-navy",
};

const categoryByTab: Record<Tab, string | null> = {
  "전체": null,
  "공지사항": "공지사항",
  "특강 및 행사": "특강 및 행사",
  "보도자료": "보도자료",
};

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("전체");

  const filtered =
    categoryByTab[activeTab] === null
      ? newsItems
      : newsItems.filter((item) => item.category === categoryByTab[activeTab]);

  return (
    <>
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">News & Updates</p>
          <h1 className="text-3xl font-bold text-kmss-navy">소식</h1>
        </div>
      </section>

      {/* 탭 바 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-kmss-berry text-kmss-berry"
                    : "border-transparent text-gray-500 hover:text-kmss-berry"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* 카드 목록 */}
        <div className="flex flex-col gap-4">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagStyle[item.tag]}`}>
                  {item.tag}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-semibold text-kmss-navy">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          소식을 업데이트하는 중입니다. 인스타그램{" "}
          <a
            href="https://instagram.com/k_motherscholar_society"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kmss-berry underline"
          >
            @k_motherscholar_society
          </a>
          에서 최신 소식을 먼저 만나보세요.
        </p>
      </section>
    </>
  );
}
