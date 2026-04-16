import type { Metadata } from "next";
import AboutSubNav from "./SubNav";

export const metadata: Metadata = {
  title: "설립취지",
  openGraph: {
    title: "설립취지 | KMSS",
    description: "왜 '엄마학자'이어야 하는가? 한국엄마학자협회 설립 취지와 임원진을 소개합니다.",
    url: "https://www.koreanmotherscholar.org/about",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">About KMSS</p>
          <h1 className="text-3xl font-bold text-kmss-navy">협회소개</h1>
        </div>
      </section>

      {/* Sub navigation */}
      <AboutSubNav current="/about" />

      {/* 설립 취지 */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-kmss-berry mb-2">왜 &lsquo;엄마학자&rsquo;이어야 하는가?</h2>
          <div className="w-12 h-1 bg-kmss-berry rounded mb-8" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-5">
            <p>
              한국 사회에서 돌봄의 책임은 여전히 &lsquo;엄마&rsquo;에게 불균형적으로 집중되어 있습니다.
              학문을 추구하는 여성들에게 &lsquo;엄마됨&rsquo;은{" "}
              <strong className="text-kmss-navy">
                연구 시간의 제약, 에너지 분배, 학계와 사회의 기대 사이의 갈등
              </strong>{" "}
              등 다양한 차원의 도전으로 이어집니다.
            </p>
            <p>
              <strong className="text-kmss-berry">한국엄마학자협회(KMSS)</strong>는 이러한 고유한
              경험을 공유하고, 서로에게 실질적인 위로와 지지를 제공하며, 함께 지속가능한 방식으로
              학문적 열정과 가족의 삶을 조화롭게 이어나가기 위한 연대의 공간입니다.
            </p>
            <p>
              현재 우리는 &lsquo;엄마학자&rsquo;라는 이름 아래 모여 개인적 경험을 집단적 지혜로 전환하고,{" "}
              <strong className="text-kmss-navy">고립이 아닌 연결의 새로운 가능성</strong>을
              모색하고 있습니다. 미래에는 다양한 돌봄 주체들과의 확장된 연대도 기대하지만, 현
              시점에서는 &lsquo;학자이자 엄마&rsquo;라는 특수한 정체성이 직면한 도전과 가능성에 집중하고자
              합니다.
            </p>
            <p>
              한국엄마학자협회(KMSS)는 엄마로서 학문의 길을 가고자 하는 동료들이 서로의 여정을
              나누고 함께 성장하는 공간입니다. 우리의 경험은 특별합니다. 그 특별함은 혼자이기에
              어려웠던 순간들을 서로의 연대 속에서 의미 있게 만들어갑니다. 그 중심에
              한국엄마학자협회가 함께하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
