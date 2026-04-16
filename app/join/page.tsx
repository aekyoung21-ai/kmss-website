import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "참여하기",
  openGraph: {
    title: "참여하기 | KMSS",
    description: "엄마이자 학자라면 누구나 함께할 수 있습니다. 한국엄마학자협회 참여 방법 안내.",
    url: "https://www.koreanmotherscholar.org/join",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org/join",
  },
};

export default function JoinPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">Get Involved</p>
          <h1 className="text-3xl font-bold text-kmss-navy">참여하기</h1>
          <p className="text-gray-500 mt-2 text-base">
            엄마이자 학자라면 누구나 함께할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 참여 2단계 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-kmss-navy mb-2">참여 방법</h2>
        <p className="text-gray-500 text-base mb-10">
          별도 회원가입 없이 두 단계로 커뮤니티에 참여할 수 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Step 1 — Instagram */}
          <div className="flex flex-col bg-kmss-berry-light rounded-2xl p-10 border border-pink-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-kmss-berry text-white text-base flex items-center justify-center font-bold shrink-0">
                1
              </span>
              <h3 className="text-lg font-bold text-kmss-navy">인스타그램 DM</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              KMSS 공식 계정을 팔로우 후 DM으로 참여 코드를 요청해주세요.
            </p>
            <a
              href="https://instagram.com/k_motherscholar_society"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-kmss-berry text-white px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              팔로우 후 DM 보내기
            </a>
            <p className="text-sm text-gray-400 mt-2 text-center">@k_motherscholar_society</p>
          </div>

          {/* Step 2 — KakaoTalk */}
          <div className="flex flex-col bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-kmss-navy text-white text-base flex items-center justify-center font-bold shrink-0">
                2
              </span>
              <h3 className="text-lg font-bold text-kmss-navy">카카오 오픈채팅 입장</h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              받은 참여 코드를 입력하여 카카오 오픈채팅방에 입장해주세요.
            </p>
            <a
              href="https://open.kakao.com/o/gQf8kxHg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3A1D1D] px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.487 1.394 4.686 3.5 6.02L4.5 21l4.308-2.85C9.842 18.374 10.908 18.5 12 18.5c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
              </svg>
              카카오 오픈채팅 입장
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-lg font-bold text-kmss-navy mb-4">자주 묻는 질문</h3>
          <div className="flex flex-col gap-2">
            {[
              {
                q: "가입 조건이 있나요?",
                a: "엄마이자 학자(학생 포함)라면 누구나 참여할 수 있습니다. 박사과정, 석사과정, 교수, 연구자 등 학문의 길을 걷는 모든 엄마를 환영합니다.",
              },
              {
                q: "참여 비용이 있나요?",
                a: "현재 별도의 회비는 없습니다.",
              },
              {
                q: "해외에 거주 중인데 참여할 수 있나요?",
                a: "네, 국내외 거주 무관하게 참여 가능합니다. 현재 해외 대학에 재직/재학 중인 임원진도 있습니다.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="px-5 py-4 font-semibold text-kmss-navy text-base list-none flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                  {item.q}
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 py-4 text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-kmss-navy text-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-200 text-base mb-2">문의 사항이 있으신가요?</p>
          <h3 className="text-2xl font-bold mb-5">언제든지 연락주세요</h3>
          <a
            href="mailto:koreanmotherscholar@gmail.com"
            className="inline-flex items-center gap-2 bg-kmss-berry text-white px-7 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
          >
            koreanmotherscholar@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
