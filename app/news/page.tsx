"use client";

import { useState } from "react";

const tabs = ["전체", "공지사항", "특강 및 행사", "보도자료"] as const;
type Tab = (typeof tabs)[number];

type NewsItem = {
  category: string;
  date: string;
  title: string;
  tag: "공지" | "특강" | "보도";
  speaker?: string;
  datetime?: string;
  fee?: string;
  detail: string;
};

const newsItems: NewsItem[] = [
  {
    category: "공지사항",
    date: "2025.06",
    title: "한국엄마학자협회(KMSS) 창립총회 개최",
    tag: "공지",
    detail: "2025년 6월 창립총회를 온라인으로 개최하였습니다. 초대 임원진 16명과 함께 협회의 새로운 시작을 알렸습니다.",
  },
  {
    category: "특강 및 행사",
    date: "2026.02.23",
    title: "2026년 2월 무료특강 — 따뜻한 만남 \"엄마의 도전\"",
    tag: "특강",
    speaker: "채윤정 교수 (동국대학교)",
    datetime: "2026년 2월 23일(월) 저녁 9시 KST · ZOOM 온라인",
    fee: "무료",
    detail: "\"엄마의 도전은 언제라도 늦지 않습니다.\" 자녀의 성장기와 함께 지나온 석·박사 과정, 마흔에 다시 학생이 된 엄마 연구자로서 전하고 싶은 메시지를 나눕니다.",
  },
  {
    category: "특강 및 행사",
    date: "2026.02.11",
    title: "2026년 2월 정규특강 AI 패키지 2강 — 대학수업에서 의미 있는 AI의 활용법",
    tag: "특강",
    speaker: "선애경 (두잇맘, 고려대학교 연구교수)",
    datetime: "2026년 2월 11일(수) 저녁 9시 KST · ZOOM 온라인",
    fee: "10,000원 (2강 통합)",
    detail: "진정한 학습을 일으키는 AI 활용법, 대학 수업에서의 AI 적용 사례, AI 활용 자기점검표 등을 다룹니다.",
  },
  {
    category: "특강 및 행사",
    date: "2026.02.09",
    title: "2026년 2월 정규특강 AI 패키지 1강 — AI를 활용한 효율적인 연구법",
    tag: "특강",
    speaker: "@phd.shin",
    datetime: "2026년 2월 9일(월) 저녁 9시 KST · ZOOM 온라인",
    fee: "10,000원 (2강 통합)",
    detail: "연구 주제 선정부터 논문 작성까지, AI를 활용해 연구를 더욱 효율적으로 하는 방법을 공유합니다.",
  },
  {
    category: "특강 및 행사",
    date: "2025.08.29",
    title: "2025년 8월 무료특강 — AI 활용 교수법",
    tag: "특강",
    speaker: "임태형 교수 (전주교육대학교)",
    datetime: "2025년 8월 29일(금) · ZOOM 온라인",
    fee: "무료",
    detail: "엄마학자들을 위한 AI 활용 교수법 초청 특강으로, 117명이 신청한 KMSS의 첫 무료특강입니다.",
  },
  {
    category: "특강 및 행사",
    date: "2025.08.25",
    title: "2025년 8월 정규특강 3강 — 양육과 병행하는 전략적 논문 작성법",
    tag: "특강",
    speaker: "윤선희 대표 ((주)드림셀파, 경영학 박사 / 홍익대학교)",
    datetime: "2025년 8월 25일(월) 오전 10시 KST · ZOOM 온라인",
    fee: "5,000원 (3강 시리즈 통합)",
    detail: "양육과 병행하는 전략적 논문 작성법, 논문에 AI를 활용하는 방법, 학술지 투고 전략, 엄마학자로서의 경험을 나눕니다.",
  },
  {
    category: "특강 및 행사",
    date: "2025.08.18",
    title: "2025년 8월 정규특강 2강 — 학계에서 자기홍보의 젠더 갭",
    tag: "특강",
    speaker: "이진아 교수 (University of Illinois Urbana-Champaign, 사회학과 조교수)",
    datetime: "2025년 8월 18일(월) 오전 10시 KST · ZOOM 온라인",
    fee: "5,000원 (3강 시리즈 통합)",
    detail: "학계에서 자기홍보(Self-promotion)의 젠더 갭, 이론적 명성에서의 불평등 연구를 발표합니다.",
  },
  {
    category: "특강 및 행사",
    date: "2025.08.11",
    title: "2025년 8월 정규특강 1강 — 이공계 논문 작성 & 조직에서 일하는 엄마학자의 삶",
    tag: "특강",
    speaker: "정재숙 박사 (Universität Bayreuth 데이터 큐레이터, 컴퓨터공학 박사 / Utrecht University)",
    datetime: "2025년 8월 11일(월) 저녁 9시 KST · ZOOM 온라인",
    fee: "5,000원 (3강 시리즈 통합)",
    detail: "이공계·학제간 융합 연구 논문 작성 경험, 논문 리뷰어로서의 관점, 조직에서 일하는 엄마학자의 경험을 공유합니다.",
  },
  {
    category: "보도자료",
    date: "2025",
    title: "보도자료",
    tag: "보도",
    detail: "언론 보도 및 인터뷰 자료를 준비 중입니다.",
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
                onClick={() => { setActiveTab(tab); setExpandedIndex(null); }}
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
        <div className="flex flex-col gap-3">
          {filtered.map((item, idx) => {
            const isOpen = expandedIndex === idx;
            const isLecture = !!item.speaker;

            return (
              <div
                key={item.title}
                className={`bg-white rounded-xl border shadow-sm transition-shadow ${
                  isOpen ? "border-kmss-berry/40 shadow-md" : "border-gray-100 hover:shadow-md"
                }`}
              >
                {/* 항상 보이는 헤더 */}
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${tagStyle[item.tag]}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <p className="font-semibold text-kmss-navy leading-snug">{item.title}</p>
                    {isLecture && (
                      <p className="text-sm text-gray-500">{item.speaker}</p>
                    )}
                  </div>
                  {/* 펼치기 아이콘 */}
                  <svg
                    className={`w-4 h-4 text-gray-400 shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* 펼쳐지는 상세 */}
                {isOpen && (
                  <div className="px-5 pb-5 flex flex-col gap-3 border-t border-gray-100 pt-4">
                    {item.datetime && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 shrink-0">일시</span>
                        <span className="text-gray-700">{item.datetime}</span>
                      </div>
                    )}
                    {item.fee && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 shrink-0">참가비</span>
                        <span className="text-gray-700">{item.fee}</span>
                      </div>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed pt-1">{item.detail}</p>
                  </div>
                )}
              </div>
            );
          })}
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
