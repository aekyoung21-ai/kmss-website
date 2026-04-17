"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["전체", "공지사항", "특강 및 행사", "보도자료"] as const;
type Tab = (typeof tabs)[number];

type NewsItem = {
  category: string;
  date: string;
  title: string;
  tag: "공지" | "특강" | "행사" | "보도";
  speaker?: string;
  datetime?: string;
  location?: string;
  fee?: string;
  contact?: string;
  logos?: { src: string; alt: string; scale?: number }[];
  detail: string;
  detailEn?: string;
  titleEn?: string;
  highlights?: string[];
  highlightsEn?: string[];
};

function renderWithHighlights(text: string, highlights?: string[]) {
  if (!highlights || highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp("(" + escaped.join("|") + ")", "g");
  return text.split(pattern).map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="font-semibold text-kmss-berry">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const newsItems: NewsItem[] = [
  /* [테스트중 — 배포 보류]
  {
    category: "공지사항",
    date: "2026.04",
    title: "[강의자 모집] 한국엄마학자협회 × 독일 aeiou family — 해외 한국계 아이들을 위한 5월 온라인 강의",
    titleEn: "[Call for Lecturers] KMSS × aeiou family — Online Lectures for Children of Korean Heritage this May",
    tag: "공지",
    datetime: "2026년 5월 중 (강의자 일정 및 각 대륙 시차를 고려하여 조율)",
    location: "ZOOM 온라인",
    contact: "협회 부회장 Wony 개인톡 또는 aeioufamily@outlook.de",
    logos: [
      { src: "/kmss-logo-vertical.png", alt: "한국엄마학자협회 (KMSS)", scale: 1.5 },
      { src: "/aeiou-family.png", alt: "aeiou family e.V." },
    ],
    detail: `"5월 가정의 달, 한국엄마학자협회 엄마학자들이 전 세계 한국계 아이들과 온라인에서 만납니다."

해외에서 자라는 아이들에게 한국어로 다양한 주제의 강의를 선물해주실 엄마학자를 모집합니다!

어린이·청소년을 대상으로 온라인 강의를 진행해주실 분들의 많은 관심 부탁드립니다.

• 주제: 엄마학자 본인의 전공 분야 내에서 자유롭게 선정해주세요. (어린이·청소년 눈높이에 맞춰주시면 더욱 좋습니다)
• 강의 시간: 강의 30분 + 질의응답 10분
• 일정: 강의자 일정과 각 대륙의 시차를 고려하여 조율

이 프로그램은 한국엄마학자협회와 독일 비영리 단체 aeiou family가 함께 준비하는 프로젝트입니다. 강의에 참여해주시는 엄마학자께는 한국엄마학자협회에서 기프티콘을, aeiou family에서 작은 선물을 준비해 드릴 예정입니다.

aeiou family e.V.는 독일에 공식 등록된 비영리 단체로, 다중언어·다문화 환경의 가정과 유산 언어(Heritage Language) 전수 기관을 위한 프로그램과 자료를 제공합니다. 전 세계에서 한국어와 한국 문화를 배경으로 자라는 가정을 위해 다중언어 발달 및 교육 관련 부모·양육자 세미나, 아이들을 위한 한국어 스토리타임 등을 운영하고 있습니다. https://aeioufamily.org

프로그램 참여에 관심 있으신 분은 협회 부회장 @Wony/심리학/박사과정/17,23에게 개인톡을 보내주시거나 aeioufamily@outlook.de 로 연락 부탁드립니다.

"한국엄마학자협회는 엄마학자를 비롯해 학문의 길을 걷는 모든 분들과 함께합니다."`,
    detailEn: `Be part of our journey to support children of Korean heritage around the world!

We are looking for dedicated, volunteer Korean mother scholars to give online lectures to children and teenagers.

This is a new project in which, during the month of May, academics from the Korean MotherScholar Society (KMSS) will deliver lectures to children of Korean heritage worldwide, co-hosted by the KMSS and a non-profit organization, aeiou family.

aeiou family e.V. is an officially registered in Germany that offers programs and resources for families in multilingual and multicultural environments, as well as for institutions specializing in teaching heritage languages. Specifically, for families growing up with the Korean language and culture, seminars on multilingual development and education for parents/caregivers, along with Korean storytime sessions for children, are offered. More information can be found at aeioufamily.org.

For Interested:

• Topics: Open to any subject related to your field of study
• Lecture Duration: 30 minutes, followed by a 10-minute Q&A session
• Schedule: To be determined based on the lecturers' available schedule and time differences

Please support children growing up outside Korea by offering them the opportunity to attend lectures on various topics in Korean!

Participating volunteer mother scholars will receive Kakaotalk gifticons from the KMSS, and the aeiou family will also prepare small gifts.

If you are interested in joining, feel free to contact Wony, the vice president of the KMSS, in the KakaoTalk group chat or via email at aeioufamily@outlook.de.

"KMSS stands with mother scholars and all who walk the path of scholarship."`,
    highlights: [
      "해외에서 자라는 아이들에게 한국어로 다양한 주제의 강의를 선물해주실 엄마학자를 모집합니다!",
      "강의 30분 + 질의응답 10분",
      "기프티콘",
      "작은 선물",
      "@Wony/심리학/박사과정/17,23",
      "aeioufamily@outlook.de",
    ],
    highlightsEn: [
      "Be part of our journey to support children of Korean heritage around the world!",
      "30 minutes, followed by a 10-minute Q&A session",
      "Kakaotalk gifticons",
      "small gifts",
      "Wony, the vice president of the KMSS",
      "aeioufamily@outlook.de",
    ],
  },
  */
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
    speaker: "신박사님 (@phd.shin)",
    datetime: "2026년 2월 9일(월) 저녁 9시 KST · ZOOM 온라인",
    fee: "10,000원 (2강 통합)",
    detail: "연구 주제 선정부터 논문 작성까지, AI를 활용해 연구를 더욱 효율적으로 하는 방법을 공유합니다.",
  },
  {
    category: "특강 및 행사",
    date: "2025.12.20",
    title: "한국엄마학자협회(KMSS) 2025 연말모임",
    tag: "행사",
    datetime: "2025년 12월 20일(토) 밤 10시 KST",
    location: "Zoom 비대면 온라인",
    detail: "올 한 해 각자의 자리에서 치열하게 달려온 회원님들과 따뜻한 격려의 시간을 나누고자 연말 온라인 모임을 준비했습니다.\n\n[준비 및 참고사항]\n- 온라인으로 진행되는 만큼, 각자 마시고 싶은 음료를 편안하게 준비해 주세요.\n- 올해 자신이나 자녀(들)에게 의미 있었던 물건을 하나씩 챙겨와 주세요. 함께 그 의미를 나누어보고자 합니다.",
  },
  {
    category: "특강 및 행사",
    date: "2025.08.29",
    title: "2025년 8월 무료특강 — AI 활용 교수법",
    tag: "특강",
    speaker: "임태형 교수 (전주교육대학교)",
    datetime: "2025년 8월 29일(금) · ZOOM 온라인",
    fee: "무료",
    detail: "엄마학자들을 위한 AI 활용 교수법 초청 특강으로, KMSS의 첫 무료특강입니다.",
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
    category: "공지사항",
    date: "2025.06",
    title: "한국엄마학자협회(KMSS) 창립총회 개최",
    tag: "공지",
    datetime: "2025년 6월 23일(월) 오후 10시 30분",
    location: "Zoom 온라인",
    detail: "참석: 발기인 28명\n\n결정 사항\n- 정관 및 운영규정 의결 (시행일 2025. 6. 23.)\n- 초대 임원진 선출 (회장·부회장·감사·서기·이사, 총 16인)\n- 2025/26 사업계획안 승인",
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
  행사: "bg-amber-100 text-amber-700",
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
          <h1 className="text-3xl font-bold text-kmss-navy">협회소식</h1>
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
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 cursor-pointer min-h-[5.5rem]"
                >
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${tagStyle[item.tag]}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <p className="font-semibold text-kmss-navy leading-snug">{item.title}</p>
                    {isLecture
                      ? <p className="text-sm text-gray-500">{item.speaker}</p>
                      : item.datetime && <p className="text-sm text-gray-500">{item.datetime.split("(")[0]}</p>
                    }
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
                    {item.logos && item.logos.length > 0 && (
                      <div className="flex items-center justify-center gap-6 sm:gap-10 py-4 mb-2">
                        {item.logos.map((logo, i) => (
                          <div key={logo.src} className="flex items-center gap-6 sm:gap-10">
                            {i > 0 && <span className="text-gray-300 text-xl font-light">×</span>}
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={200}
                              height={200}
                              className="h-20 sm:h-24 w-auto object-contain"
                              style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {item.datetime && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 shrink-0">일시</span>
                        <span className="text-gray-700">{item.datetime}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 shrink-0">장소</span>
                        <span className="text-gray-700">{item.location}</span>
                      </div>
                    )}
                    {item.fee && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 shrink-0">참가비</span>
                        <span className="text-gray-700">{item.fee}</span>
                      </div>
                    )}
                    {item.contact && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 shrink-0">문의</span>
                        <span className="text-gray-700">{item.contact}</span>
                      </div>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed pt-1 whitespace-pre-line">
                      {renderWithHighlights(item.detail, item.highlights)}
                    </p>
                    {item.detailEn && (
                      <>
                        <div className="flex items-center gap-3 pt-4 mt-2">
                          <div className="h-px flex-1 bg-gray-200" />
                          <span className="text-xs font-semibold uppercase tracking-widest text-kmss-berry">English</span>
                          <div className="h-px flex-1 bg-gray-200" />
                        </div>
                        {item.titleEn && (
                          <p className="font-semibold text-kmss-navy leading-snug pt-1">{item.titleEn}</p>
                        )}
                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                          {renderWithHighlights(item.detailEn, item.highlightsEn)}
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          협회소식을 업데이트하는 중입니다. 인스타그램{" "}
          <a
            href="https://instagram.com/k_motherscholar_society"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kmss-berry underline"
          >
            @k_motherscholar_society
          </a>
          에서 최신 협회소식을 먼저 만나보세요.
        </p>
      </section>
    </>
  );
}
