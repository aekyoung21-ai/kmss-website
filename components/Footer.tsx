import Link from "next/link";

const siteLinks = [
  { href: "/about", label: "협회소개" },
  { href: "/news", label: "협회소식" },
  { href: "/archive", label: "아카이브" },
  { href: "/join", label: "참여하기" },
  { href: "/en", label: "English" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* 사이트맵 — 가로 배치 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* 페이지 링크 */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">사이트맵</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-kmss-berry transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연결하기 */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">연결하기</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <a
                  href="https://instagram.com/k_motherscholar_society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-kmss-berry transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:koreanmotherscholar@gmail.com"
                  className="text-sm text-gray-600 hover:text-kmss-berry transition-colors"
                >
                  koreanmotherscholar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="border-t border-gray-100 mt-8 pt-6 text-center text-xs text-gray-400">
          © 2025 한국엄마학자협회 (Korean MotherScholar Society). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
