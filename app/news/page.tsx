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
    date: "2026.02.23",
    title: "2026년 2월 무료특강 — 따뜻한 만남 \"엄마의 도전\"",
    desc: "강사: 채윤정 교수 (동국대학교) | 일시: 2026년 2월 23일(월) 저녁 9시 KST | ZOOM 온라인 | 참가비: 무료\n\n\"엄마의 도전은 언제라도 늦지 않습니다.\" 자녀의 성장기와 함께 지나온 석·박사 과정, 마흔에 다시 학생이 된 엄마 연구자로서 전하고 싶은 메시지.",
    tag: "특강" as const,
  },
  {
    category: "특강 및 행사",
    date: "2026.02.11",
    title: "2026년 2월 정규특강 AI 패키지 2강 — 대학수업에서 의미 있는 AI의 활용법",
    desc: "강사: 선애경 (두잇맘, 고려대학교 연구교수) | 일시: 2026년 2월 11일(수) 저녁 9시 KST | ZOOM 온라인 | 참가비: 10,000원 (2강 통합, 1강만 수강해도 동일)\n\n진정한 학습을 일으키는 AI 활용법, 대학 수업에서의 AI 적용 사례, AI 활용 자기점검표 등을 다룹니다.",
    tag: "특강" as const,
  },
  {
    category: "특강 및 행사",
    date: "2026.02.09",
    title: "2026년 2월 정규특강 AI 패키지 1강 — AI를 활용한 효율적인 연구법",
    desc: "강사: @phd.shin | 일시: 2026년 2월 9일(월) 저녁 9시 KST | ZOOM 온라인 | 참가비: 10,000원 (2강 통합, 1강만 수강해도 동일)\n\n연구 주제 선정부터 논문 작성까지, AI를 활용해 연구를 더욱 효율적으로 하는 방법을 공유합니다.",
    tag: "특강" as const,
  },
  {
    category: "특강 및 행사",
    date: "2025.08.29",
    title: "2025년 8월 무료특강 — AI 활용 교수법",
    desc: "강사: 임태형 교수 (전주교육대학교) | 일시: 2025년 8월 29일(금) | ZOOM 온라인 | 참가비: 무료\n\n엄마학자들을 위한 AI 활용 교수법 초청 특강. 117명이 신청한 KMSS의 첫 무료특강입니다.",
    tag: "특강" as const,
  },
  {
    category: "특강 및 행사",
    date: "2025.08.25",
    title: "2025년 8월 정규특강 3강 — 양육과 병행하는 전략적 논문 작성법",
    desc: "강사: 윤선희 대표 ((주)드림셀파, 경영학 박사 / 홍익대학교) | 일시: 2025년 8월 25일(월) 오전 10시 KST | ZOOM 온라인 | 참가비: 5,000원 (3강 시리즈 통합, 수강 수 무관)\n\n양육과 병행하는 전략적 논문 작성법, 논문에 AI를 활용하는 방법, 학술지 투고 전략, 엄마학자로서의 경험을 나눕니다.",
    tag: "특강" as const,
  },
  {
    category: "특강 및 행사",
    date: "2025.08.18",
    title: "2025년 8월 정규특강 2강 — 학계에서 자기홍보의 젠더 갭",
    desc: "강사: 이진아 교수 (University of Illinois Urbana-Champaign 사회학과 조교수, 사회학 박사 / University of Arizona) | 일시: 2025년 8월 18일(월) 오전 10시 KST | ZOOM 온라인 | 참가비: 5,000원 (3강 시리즈 통합, 수강 수 무관)\n\n학계에서 자기홍보(Self-promotion)의 젠더 갭, 이론적 명성에서의 불평등 연구를 발표합니다.",
    tag: "특강" as const,
  },
  {
    category: "특강 및 행사",
    date: "2025.08.11",
    title: "2025년 8월 정규특강 1강 — 이공계 논문 작성 & 조직에서 일하는 엄마학자의 삶",
    desc: "강사: 정재숙 박사 (독일 Universität Bayreuth 데이터 큐레이터, 컴퓨터공학 박사 / Utrecht University) | 일시: 2025년 8월 11일(월) 저녁 9시 KST | ZOOM 온라인 | 참가비: 5,000원 (3강 시리즈 통합, 수강 수 무관)\n\n이공계·학제간 융합 연구 논문 작성 경험, 논문 리뷰어로서의 관점, 조직에서 일하는 엄마학자의 경험을 공유합니다.",
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
