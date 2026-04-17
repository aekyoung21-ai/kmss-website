"use client";

import { useState } from "react";

const tabs = ["뉴스레터", "관련 연구"] as const;
type Tab = (typeof tabs)[number];

const papers = [
  {
    title: "Rise of a Collective Motherscholar Movement in South Korea: Anonymity, Agency, and Academic Change",
    authors: "Sunmi Jin, Aekyoung Sun, Ownkyeong Lee",
    venue: "IAMAS 2026 (International Association for Motherhood Studies)",
    date: "2026.06",
    type: "Conference paper",
    forthcoming: true,
  },
];

export default function ArchivePage() {
  const [activeTab, setActiveTab] = useState<Tab>("뉴스레터");

  return (
    <>
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">Archive</p>
          <h1 className="text-3xl font-bold text-kmss-navy">아카이브</h1>
        </div>
      </section>

      {/* 탭 바 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium border-b-2 cursor-pointer transition-colors ${
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
        {/* 뉴스레터 탭 */}
        {activeTab === "뉴스레터" && (
          <div>
            <h2 className="text-lg font-semibold text-kmss-navy mb-6">뉴스레터</h2>
            <div className="flex flex-col gap-4">
              <a
                href="/newsletter/vol01.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-kmss-berry/10 text-kmss-berry">
                    Vol. 01
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                    Preview
                  </span>
                  <span className="text-xs text-gray-400">2026.06</span>
                </div>
                <h3 className="font-semibold text-kmss-navy leading-snug mb-1">
                  창간호 — 엄마학자들에게 띄우는 첫 편지
                </h3>
                <p className="text-sm text-gray-500">
                  연구와 양육의 여정에서 건네는 우리의 이야기 (프리뷰 버전)
                </p>
              </a>
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              창간호 발행 준비 중입니다.
            </p>
          </div>
        )}

        {/* 관련 연구 탭 */}
        {activeTab === "관련 연구" && (
          <div>
            <h2 className="text-lg font-semibold text-kmss-navy mb-6">관련 연구</h2>
            <div className="flex flex-col gap-4">
              {papers.map((paper) => (
                <div
                  key={paper.title}
                  className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-kmss-blue/20 text-kmss-navy">
                      {paper.type}
                    </span>
                    {paper.forthcoming && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                        Forthcoming
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{paper.date}</span>
                  </div>
                  <h3 className="font-semibold text-kmss-navy leading-snug mb-1">{paper.title}</h3>
                  <p className="text-sm text-gray-500">{paper.authors}</p>
                  <p className="text-xs text-gray-400 mt-1">{paper.venue}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              관련 연구 자료를 업데이트하는 중입니다.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
