import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    title: "연대와 지지",
    desc: "고립이 아닌 연결 — 엄마학자들이 서로의 경험을 나누고 실질적인 위로와 지지를 제공합니다.",
  },
  {
    title: "학문과 육아의 조화",
    desc: "연구 시간의 제약, 에너지 분배 — 서로가 공감하는 도전을 함께 헤쳐나갑니다.",
  },
  {
    title: "국내외 네트워크",
    desc: "국내를 넘어 해외로 — 국내외 학계 및 커뮤니티와 연결되는 글로벌 단체입니다.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — refined official */}
      <section className="hero-section relative overflow-hidden border-b border-pink-100/60">
        {/* Ambient glows */}
        <div className="hero-glow hero-glow-berry" aria-hidden />
        <div className="hero-glow hero-glow-navy" aria-hidden />

        <div className="relative max-w-2xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">

          {/* Symbol */}
          <Image
            src="/kmss-symbol-cropped.png"
            alt="KMSS 심볼"
            width={599}
            height={747}
            className="hero-reveal hero-symbol w-28 h-auto mb-7"
            priority
            style={{ animationDelay: "0ms" }}
          />

          {/* KMSS wordmark */}
          <Image
            src="/kmss-wordmark.png"
            alt="KMSS"
            width={610}
            height={221}
            className="hero-reveal w-40 h-auto mb-4"
            style={{ animationDelay: "140ms" }}
          />

          {/* Korean title */}
          <h1
            className="hero-reveal text-[2.15rem] md:text-[2.75rem] font-medium text-kmss-navy mb-2 tracking-[-0.02em]"
            style={{ animationDelay: "260ms" }}
          >
            한국엄마학자협회
          </h1>

          {/* English subtitle */}
          <p
            className="hero-reveal text-[0.72rem] font-semibold tracking-[0.32em] text-kmss-mauve uppercase mb-10"
            style={{ animationDelay: "380ms" }}
          >
            Korean MotherScholar Society
          </p>

          {/* Slogan with ornament rules */}
          <div
            className="hero-reveal hero-slogan flex flex-col items-center gap-1.5 mb-12"
            style={{ animationDelay: "500ms" }}
          >
            <div className="hero-ornament" aria-hidden>
              <span className="hero-rule" />
              <span className="hero-diamond">◆</span>
              <span className="hero-rule" />
            </div>
            <p className="text-[1.05rem] md:text-[1.125rem] text-gray-600 leading-relaxed mt-3">
              연대의 힘으로 서로를 지지하며,
            </p>
            <p className="text-[1.05rem] md:text-[1.125rem] text-gray-600 leading-relaxed">
              학문과 육아를 아우르는 지속가능한 여정
            </p>
          </div>

          {/* CTAs */}
          <div
            className="hero-reveal flex flex-wrap gap-4 justify-center"
            style={{ animationDelay: "620ms" }}
          >
            <Link
              href="/about"
              className="hero-cta-primary bg-kmss-berry text-white px-9 py-3.5 rounded-full text-base font-semibold transition-all"
            >
              협회 소개
            </Link>
            <Link
              href="/join"
              className="hero-cta-secondary border border-kmss-navy/25 text-kmss-navy px-9 py-3.5 rounded-full text-base font-semibold transition-all"
            >
              함께하기
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights — navy for contrast */}
      <section className="bg-kmss-navy">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 120} className="highlight-card p-8 md:p-10">
                <span className="highlight-accent" aria-hidden />
                <h3 className="font-bold text-white mb-3 text-lg">{h.title}</h3>
                <p className="text-base text-blue-200 leading-relaxed">{h.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-kmss-berry-light border-y border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start gap-12">
          <Reveal delay={0} className="flex-1">
            <p className="text-kmss-berry text-sm font-semibold uppercase tracking-widest mb-3">
              설립 취지
            </p>
            <h2 className="about-title text-3xl font-bold text-kmss-navy mb-5">
              우리의 이야기
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-7 max-w-lg">
              한국엄마학자협회(KMSS)는 학문과 육아를 병행하는 여성들이 서로의 경험을 나누고
              지지하기 위해 만들어진 연대의 공간입니다. &lsquo;학자이자 엄마&rsquo;라는 정체성이 마주하는
              도전을 고립이 아닌 연결로 함께 헤쳐나가는 것을 목적으로 합니다.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-base text-kmss-berry font-semibold hover:underline underline-offset-4"
            >
              설립 취지 전문 읽기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={180} className="w-full md:w-96 bg-white rounded-2xl p-7 border border-pink-100 shadow-sm">
            <p className="text-sm font-bold text-kmss-navy uppercase tracking-wide mb-5">
              참여 방법
            </p>
            <ol className="flex flex-col gap-5 text-base text-gray-700">
              <li className="flex gap-4 items-start">
                <span className="step-badge">01</span>
                <span>
                  인스타그램 <span className="font-semibold text-kmss-navy">@k_motherscholar_society</span> 팔로우 후 DM으로 참여 코드 요청
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="step-badge">02</span>
                <span>카카오 오픈채팅방 링크로 입장</span>
              </li>
            </ol>
            <Link
              href="/join"
              className="mt-6 block text-center bg-kmss-navy text-white py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
            >
              지금 참여하기
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
