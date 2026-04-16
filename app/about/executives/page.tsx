import type { Metadata } from "next";
import AboutSubNav from "../SubNav";

export const metadata: Metadata = {
  title: "임원진",
  openGraph: {
    title: "임원진 | KMSS",
    description: "한국엄마학자협회 임원진 소개",
    url: "https://www.koreanmotherscholar.org/about/executives",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org/about/executives",
  },
};

const executives = [
  { role: "회장", name: "선애경", nickname: "두잇맘", org: "고려대학교 공학교육혁신센터 (교육행정학 및 고등교육학)", position: "연구교수" },
  { role: "부회장", name: "이원경", nickname: "Wony", org: "Ludwig-Maximilians-Universität (심리학과)", position: "박사과정" },
  { role: "감사", name: "Rey Jeong", nickname: "레이J", org: "캘리포니아 주립대학교 새크라멘토 (미술학부)", position: "조교수" },
  { role: "감사", name: "진선미", nickname: "가인맘", org: "Indiana University Bloomington (고등교육전공)", position: "박사수료" },
  { role: "서기", name: "박주영", nickname: "제이씬", org: "이화여자대학교 임상바이오헬스대학원 (임상영양학전공)", position: "석사과정" },
  { role: "서기", name: "송수연", nickname: "리즈", org: "경기 신천고등학교 (역사교육전공)", position: "박사수료" },
  { role: "이사", name: "김소이", nickname: "세츄츄", org: "충남대학교 (직업교육전공)", position: "박사수료" },
  { role: "이사", name: "김예슬", nickname: "푸리맘", org: "서울과학기술대학교 (안전공학과)", position: "석사과정" },
  { role: "이사", name: "김혜린", nickname: "해달맘", org: "서울특별시청 (고려대학교 보건대학원)", position: "석사졸업" },
  { role: "이사", name: "신혜성", nickname: "세요맘", org: "청운대학교 (교육공학전공)", position: "교수" },
  { role: "이사", name: "이승주", nickname: "노니", org: "서울대학교 (보건정책관리학)", position: "박사수료" },
  { role: "이사", name: "이정은", nickname: "온맘", org: "이화여자대학교 (평생교육전공)", position: "박사과정" },
  { role: "이사", name: "이한슬기", nickname: "키키", org: "서울대학교 간호대학 (간호학 전공)", position: "박사수료" },
  { role: "이사", name: "임나래", nickname: "모리", org: "큐레이터 (미학, 예술학)", position: "석사졸업" },
  { role: "이사", name: "임재은", nickname: "라비에", org: "세종여자고등학교 체육교사 (체육교육)", position: "박사수료" },
  { role: "이사", name: "정지은", nickname: "소라블리", org: "강남대학교 교육학과 (심리학 박사)", position: "강사" },
];

const roleBadgeColor: Record<string, string> = {
  회장: "bg-kmss-berry text-white",
  부회장: "bg-kmss-navy text-white",
  감사: "bg-kmss-blue text-white",
  서기: "bg-kmss-mauve text-white",
  이사: "bg-gray-100 text-gray-700",
};

export default function ExecutivesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">About KMSS</p>
          <h1 className="text-3xl font-bold text-kmss-navy">임원진</h1>
        </div>
      </section>

      {/* Sub navigation */}
      <AboutSubNav current="/about/executives" />

      {/* 임원진 */}
      <section className="bg-kmss-berry-light py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-kmss-navy mb-2">초대 임원진</h2>
          <div className="w-12 h-1 bg-kmss-navy rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {executives.map((ex) => (
              <div
                key={ex.name}
                className="bg-white rounded-xl p-4 border border-pink-100 shadow-sm flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${roleBadgeColor[ex.role] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {ex.role}
                  </span>
                  {ex.role === "회장" && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                      창립자
                    </span>
                  )}
                  <span className="text-xs text-gray-400">{ex.nickname}</span>
                </div>
                <p className="font-semibold text-kmss-navy">{ex.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{ex.org}</p>
                <p className="text-xs text-kmss-berry font-medium">{ex.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
