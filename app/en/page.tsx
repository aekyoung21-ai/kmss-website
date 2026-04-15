import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Korean MotherScholar Society (KMSS)",
  description:
    "KMSS is a solidarity space for Korean academic mothers — sharing experiences, supporting each other, and sustaining scholarship alongside family life.",
};

const executivesEn = [
  { role: "President", name: "Aekyoung Sun", org: "Korea University, Engineering Education Innovation Center", position: "Research Professor" },
  { role: "Vice President", name: "Ownkyeong Lee", org: "Ludwig-Maximilians-Universität, Psychology", position: "PhD Candidate" },
  { role: "Auditor", name: "Rey Jeong", org: "California State University, Sacramento (Studio Art)", position: "Assistant Professor" },
  { role: "Auditor", name: "Sunmi Jin", org: "Indiana University Bloomington (Higher Education)", position: "PhD ABD" },
];

export default function EnPage() {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="relative bg-kmss-navy text-white overflow-hidden">
        {/* Watermark symbol */}
        <div className="absolute right-0 top-0 h-full flex items-center pr-4 opacity-[0.15] pointer-events-none select-none">
          <Image
            src="/kmss-symbol-cropped.png"
            alt=""
            width={599}
            height={747}
            className="h-64 md:h-80 w-auto"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <p className="text-kmss-blue text-xs uppercase tracking-widest mb-4">
            Korean MotherScholar Society
          </p>
          <Image
            src="/kmss-wordmark.png"
            alt="KMSS"
            width={610}
            height={221}
            className="w-28 h-auto mb-4 brightness-0 invert opacity-90"
          />
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5 max-w-xl">
            Where scholarship <br className="hidden md:block" />
            and motherhood meet.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
            A space of solidarity where academic mothers in Korea share their journeys,
            support each other, and sustain both scholarship and family life.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-kmss-berry mb-2">Why "MotherScholar"?</h2>
        <div className="w-12 h-1 bg-kmss-berry rounded mb-8" />
        <div className="max-w-3xl space-y-5 text-gray-700 leading-relaxed">
          <p>
            In Korean society, the responsibility of caregiving remains disproportionately
            concentrated on "mothers." For women pursuing academic careers, "becoming a mother"
            brings multifaceted challenges —{" "}
            <strong className="text-kmss-navy">
              constraints on research time, the distribution of energy, and constant tension
              between academic and social expectations.
            </strong>
          </p>
          <p>
            The{" "}
            <strong className="text-kmss-berry">Korean MotherScholar Society (KMSS)</strong> is a
            space of solidarity where we share these unique experiences, offer each other genuine
            comfort and support, and together seek sustainable ways to harmonize our scholarly
            passions with family life.
          </p>
          <p>
            Under the name "MotherScholar," we transform personal experiences into collective
            wisdom and explore{" "}
            <strong className="text-kmss-navy">
              new possibilities of connection rather than isolation.
            </strong>{" "}
            While we envision expanded solidarity with diverse caregivers in the future, we
            currently focus on the challenges and possibilities facing those who hold the dual
            identity of scholar and mother.
          </p>
          <p>
            KMSS is a community where colleagues walking the path of scholarship as mothers share
            their journeys and grow together. Our experiences are special — and through solidarity,
            the moments that were once difficult in isolation become meaningful together.
          </p>
        </div>
      </section>

      {/* Key Officers */}
      <section className="bg-kmss-berry-light py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold text-kmss-navy mb-8">Founding Officers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {executivesEn.map((ex) => (
              <div key={ex.name} className="bg-white rounded-xl p-4 border border-pink-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <p className="text-xs font-semibold text-kmss-berry">{ex.role}</p>
                  {ex.role === "President" && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                      Founder
                    </span>
                  )}
                </div>
                <p className="font-semibold text-kmss-navy">{ex.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{ex.org}</p>
                <p className="text-xs text-gray-400 mt-0.5">{ex.position}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            KMSS was founded with 16 inaugural officers representing universities and research
            institutions across Korea and internationally.
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-xl font-bold text-kmss-navy mb-6">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://instagram.com/k_motherscholar_society"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-kmss-berry-light rounded-xl p-5 border border-pink-100 hover:shadow-md transition-shadow"
          >
            <span className="text-2xl mb-2">📷</span>
            <p className="font-medium text-kmss-navy text-sm">Follow on Instagram</p>
            <p className="text-xs text-gray-500 mt-1">@k_motherscholar_society</p>
          </a>
          <a
            href="https://open.kakao.com/o/gQf8kxHg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-2xl mb-2">💬</span>
            <p className="font-medium text-kmss-navy text-sm">Join KakaoTalk</p>
            <p className="text-xs text-gray-500 mt-1">Open chat community</p>
          </a>
          <a
            href="mailto:koreanmotherscholar@gmail.com"
            className="flex flex-col items-center text-center bg-kmss-berry-light rounded-xl p-5 border border-pink-100 hover:shadow-md transition-shadow"
          >
            <span className="text-2xl mb-2">✉️</span>
            <p className="font-medium text-kmss-navy text-sm">Contact Us</p>
            <p className="text-xs text-gray-500 mt-1">koreanmotherscholar@gmail.com</p>
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          To join, DM us on Instagram to receive a participation code, then enter the KakaoTalk open chat.
        </p>
      </section>

      {/* Back to Korean */}
      <div className="text-center pb-10">
        <Link href="/" className="text-sm text-kmss-navy hover:underline">
          ← 한국어 홈페이지로
        </Link>
      </div>
    </div>
  );
}
