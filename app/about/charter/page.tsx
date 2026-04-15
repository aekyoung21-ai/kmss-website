import type { Metadata } from "next";
import AboutSubNav from "../SubNav";

export const metadata: Metadata = {
  title: "정관 | 한국엄마학자협회 KMSS",
};

const chapters = [
  {
    title: "제1장 총칙",
    articles: [
      {
        id: "제1조",
        title: "명칭",
        content: "이 단체의 명칭은 '한국엄마학자협회'(영문명: Korean MotherScholar Society, 약칭: KMSS)라 한다.",
      },
      {
        id: "제2조",
        title: "목적",
        content:
          "본 협회는 학업과 돌봄을 병행하는 한국엄마학자들이 지속가능한 학문과 양육의 여정을 함께할 수 있도록 온·오프라인 동료지원 공동체를 구축하고, 상호 지지·연결·성장을 통해 회원들의 학문적 발전과 삶의 질 향상을 도모함을 목적으로 한다.",
      },
      {
        id: "제3조",
        title: "사업",
        content: "본 협회는 제2조의 목적을 달성하기 위하여 다음 각 호의 사업을 수행한다.",
        items: [
          "안전한 온·오프라인 교류 공간 제공 및 정서적 지지 네트워크 운영",
          "생애주기별 학업·경력·돌봄 정보와 전문지식 큐레이션, 상담 서비스 제공",
          "연구 협력 기회 발굴, 학제간 네트워크 형성, 학술행사·워크숍·강연 개최",
          "회원 역량 강화를 위한 교육 프로그램, 소규모 챌린지, 멘토링 및 코칭 운영",
          "엄마학자의 지식 탐구 및 사회적 기여 방식 연구",
          "장학금·연구 지원금 등 실질적 자원 조성 및 투명한 지원·심사 체계 구축",
          "대한민국내·외 유관 기관과의 협력 및 공동 프로젝트 수행",
          "기타 협회 목적 달성을 위해 필요한 사업",
        ],
      },
      {
        id: "제4조",
        title: "사무소의 소재지",
        content:
          "협회의 주사무소는 대한민국에 두며, 필요에 따라 대한민국 내·외에 지부를 둘 수 있다.",
      },
    ],
  },
  {
    title: "제2장 회원 및 임원",
    articles: [
      {
        id: "제5조",
        title: "회원의 자격",
        paragraphs: [
          {
            marker: "①",
            text: "협회의 회원은 설립 취지에 동의하고 소정의 가입신청서를 제출하여 운영위원회의 승인을 얻은 자로 한다.",
          },
          {
            marker: "②",
            text: "회원 자격은 다음 각 호를 충족하는 자로 한다.",
            items: [
              "양육과 학문을 병행했거나, 병행하고 있거나, 또는 병행하고자 하는 모든 한국엄마학자",
              "'한국'의 범위는 \"한국인 정체성을 가진 사람\" 또는 \"대한민국에서 거주하거나 학문 활동을 하는 자\"로 하며, 한국 국적이 아니더라도 대한민국에서 학문을 수행하는 엄마학자는 회원이 될 수 있다.",
              "'학자'라 함은 대학원 입학 예정·재학·졸업자 또는 졸업 후 연구원·강사·교수 등으로 학문 활동을 지속하는 자를 의미한다",
              "'엄마'라 함은 임신·출산 또는 입양을 통해 얻은 자녀를 양육하는 여성을 의미한다.",
            ],
            subItems: [
              { marker: "4‑1.", text: "'여성'이라 함은 생물학적 여성으로 태어났거나 스스로를 여성으로 정의하는 자를 포함한다." },
            ],
          },
        ],
      },
      {
        id: "제6조",
        title: "회원의 권리와 의무",
        paragraphs: [
          {
            marker: "①",
            text: "본 협회의 회원은 회비를 납부하고 다음 각 호의 권리와 의무를 갖는다.",
          },
          {
            marker: "②",
            text: "회원의 권리는 다음과 같다.",
            items: [
              "총회에 참석하여 표결할 권리",
              "임원의 선거권 및 피선거권",
              "협회가 주관하는 제3조의 각종 사업 및 프로그램에 참가할 권리",
              "협회가 발간·제공하는 간행물 및 정보 서비스를 제공받을 권리",
            ],
          },
          {
            marker: "③",
            text: "회원의 의무는 다음과 같다.",
            items: [
              "본 정관 및 관계 규정을 준수할 의무",
              "총회 및 운영위원회의 의결 사항을 준수할 의무",
              "소정의 회비를 납부할 의무",
              "협회 사업 수행에 필요한 자료 제공 등 제반 사업 수행에 협조할 의무",
              "연락처·소속·연구 분야 등 주요 변경 사항을 협회에 신고할 의무",
            ],
          },
        ],
      },
      {
        id: "제6조의2",
        title: "회비",
        paragraphs: [
          {
            marker: "①",
            text: "협회의 회비는 일반회비와 특별회비로 구분한다.",
            items: [
              "'일반회비'란 재화 공급 또는 용역 제공에 따른 대가관계 없이, 협회의 회비 규정에 따라 정기적으로 회원에게 부과하는 회비를 의미한다. 여기에는 경상경비의 부족액을 보충하기 위해 일반회비 징수 방식으로 추가로 부과되는 회비도 포함한다. 일반회비는 세금계산서 및 기부금 영수증 발행의 발급대상이 아니다.",
              "'특별회비'란 일반회비 이외 회원에게 받는 회비로, 기부금에 해당하므로 기부금 영수증 발행의 대상이다.",
            ],
          },
          {
            marker: "②",
            text: "회비의 종류, 금액, 납부 방법 및 감면·면제 등에 관한 세부 사항은 운영위원회 의결을 거쳐 별도의 규정으로 정한다.",
          },
        ],
      },
      {
        id: "제6조의3",
        title: "후원금",
        paragraphs: [
          {
            marker: "①",
            text: "'후원금'은 협회의 목적에 부합하는 사업을 진행하기 위해 회원 외의 단체 및 개인으로부터 받는 금액을 의미하며, 기부금 영수증 발행의 대상이다.",
          },
          {
            marker: "②",
            text: "운영위원회는 협회의 회비 규정에 따라 후원금을 수락할 수도, 거부할 수도 있다.",
          },
          {
            marker: "③",
            text: "후원자에게는 발언권 및 결정권이 없다.",
          },
        ],
      },
      {
        id: "제7조",
        title: "회원 자격의 종료",
        paragraphs: [
          {
            marker: "①",
            text: "회원 자격은 자연인의 경우 사망, 자발적 탈퇴 또는 협회 제명시 종료된다.",
            items: [
              "회원이 사망한 경우 회원 자격이 종료된다.",
              "회원은 본인의 의사에 따라 자유롭게 탈퇴할 수 있다.",
              "협회의 명예를 손상시키거나 목적 수행에 지장을 초래한 경우 또는 2년 이상 회원의 의무를 이행하지 않은 경우 운영위원회 의결을 거쳐 회원을 제명할 수 있다.",
            ],
          },
        ],
      },
      {
        id: "제8조",
        title: "임원의 구성",
        content: "협회는 다음의 임원을 둔다.",
        paragraphs: [
          {
            marker: "①",
            text: "임원은 회장 1인, 부회장 1인, 이사 5인 이상, 서기 2인, 감사 2인으로 구성된다.",
          },
        ],
      },
      {
        id: "제9조",
        title: "임원의 직무",
        paragraphs: [
          { marker: "①", text: "회장은 협회를 대표하고 업무를 총괄하며 부회장과 함께 법적 대리인의 지위를 가지며, 총회 및 운영위원회의 의장이 된다." },
          { marker: "②", text: "부회장은 회장과 함께 협회를 대표하고 법적 대리인의 지위를 가지며, 회장의 업무 총괄을 보조하며, 회장의 부재시 총회 및 운영위원회의 의장이 된다. 회장이 사임하거나 해임된 경우 부회장이 남은 임기 기간동안 회장직을 대행한다." },
          { marker: "③", text: "이사는 운영위원회의 일원으로 협회의 주요 사항을 심의·의결한다. 법적 대리인의 지위는 없다. 운영위원회에서 필요에 따라 사업 운영에서 필요한 부분의 담당을 나눠 맡아 협회 업무를 자율적으로 수행한다." },
          { marker: "④", text: "서기는 운영위원회의 일원으로 협회의 주요 사항을 심의·의결한다. 법적 대리인의 지위는 없다. 총회 및 운영위원회의 회의록을 작성한다. 작성의 형태는 선출된 서기가 자율적으로 정한다." },
          { marker: "⑤", text: "감사는 재정·운영 전반을 감사하고 부정 또는 부당한 점이 있을 경우 시정을 요구하며 총회 또는 운영위원회 소집을 요구할 수 있다. 법적 대리인의 지위가 없으며, 운영위원회에서의 발언권은 있으나 의결권은 없다." },
          { marker: "⑥", text: "감사 2인을 제외한 나머지 임원이 운영위원회를 구성한다." },
          { marker: "⑦", text: "운영위원회는 운영 규정과 회비 규정, 사업 진행을 위해 고용된 인력에 대한 사례비, 그리고 사업비를 결정한다." },
          { marker: "⑧", text: "회원 및 회비 관리를 위해서는 운영위원회에서 행정 간사를 고용하며, 소정의 사례비를 지급한다. 고용된 행정 간사는 운영위원회에 업무 내역을 보고할 의무가 있다." },
          { marker: "⑨", text: "운영위원회는 고용한 행정 간사 및 회계사와 함께 회계연도 종료 후 1개월 이내 전년도 사업실적·수지결산서를 작성하여 운영위원회 의결을 거쳐 총회에 보고한다." },
          { marker: "⑩", text: "운영위원회에서 사업 진행을 위해 초청하는 연사의 학력을 검증한다." },
        ],
      },
      {
        id: "제10조",
        title: "임기의 기간",
        paragraphs: [
          { marker: "①", text: "임원의 임기는 2년으로 하며 2회 중임할 수 있다." },
          { marker: "②", text: "임원은 정해진 2년 임기를 채우지 않고, 운영위원회에서 의사를 표하고 사임할 수 있다." },
          { marker: "③", text: "보선된 임원의 임기는 전임자의 잔여기간으로 한다." },
        ],
      },
      {
        id: "제11조",
        title: "임원의 선임",
        paragraphs: [
          { marker: "①", text: "회장, 부회장, 이사, 서기, 감사는 제17조의 방법에 의하여 총회에서 선출한다." },
          { marker: "②", text: "임원의 보선은 결원이 발생한 날로부터 3개월 이내로 하여야 하며, 임시 총회를 열어 선출한다." },
        ],
      },
      {
        id: "제12조",
        title: "임원의 해임",
        content:
          "임원이 다음 각 호에 해당하는 행위를 한 때에는 총회 의결로 해임할 수 있다.",
        items: [
          "협회 목적에 위배되는 행위",
          "임원 간 분쟁, 회계 부정 또는 현저한 부당행위",
          "협회 업무를 현저히 방해하는 행위",
        ],
      },
    ],
  },
  {
    title: "제3장 운영위원회 및 총회",
    articles: [
      {
        id: "제13조",
        title: "운영위원회의 구성",
        paragraphs: [
          { marker: "①", text: "회장, 부회장, 이사, 서기로 구성한다." },
          { marker: "②", text: "감사는 회의에 참석하여 발언할 수 있다." },
        ],
      },
      {
        id: "제14조",
        title: "운영위원회의 소집",
        paragraphs: [
          { marker: "①", text: "운영위원회는 정기·임시로 구분하며 회장 또는 부회장이 소집한다." },
          { marker: "②", text: "정기 운영위원회는 분기별 1회, 임시는 회장·부회장·감사 또는 재적 이사·서기의 1/3 이상이 서면 요청할 때 소집한다." },
        ],
      },
      {
        id: "제15조",
        title: "의결정족수",
        content:
          "운영위원회는 재적 임원 과반수 출석으로 개의하고, 출석 임원 과반수 찬성으로 의결한다.",
      },
      {
        id: "제16조",
        title: "총회",
        paragraphs: [
          { marker: "①", text: "총회는 협회의 최고 의결기관으로 전 회원으로 구성하며 정기총회와 임시총회로 구분한다." },
          { marker: "②", text: "정기총회는 매년 1회 회계연도 종료 후 1개월 이내, 임시총회는 회장·부회장·감사 또는 재적 회원 1/3 이상 서면 요청 시 회장이 소집한다." },
          { marker: "③", text: "회장 또는 부회장은 안건·일시·장소 등을 명기하여 회일 7일 전까지 서면 통지한다." },
        ],
      },
      {
        id: "제17조",
        title: "총회의 의결정족수",
        paragraphs: [
          { marker: "①", text: "재적 회원 1/3 출석으로 개회하고, 출석 회원 과반수 찬성으로 의결한다." },
          { marker: "②", text: "총회 의결권은 서면 위임할 수 없다." },
        ],
      },
      {
        id: "제18조",
        title: "총회의 의결사항",
        content: "총회는 다음 사항을 심의·의결한다.",
        items: [
          "임원의 선출과 해임",
          "협회 해산 및 정관 변경",
          "기본재산의 취득·처분과 자금 차입",
          "예산 및 결산 승인",
          "사업계획 승인",
          "기타 중요 사항",
        ],
      },
      {
        id: "제19조",
        title: "회의록",
        paragraphs: [
          { marker: "①", text: "운영위원회 및 총회 진행 경과와 결과는 서기가 회의록으로 작성하고 의장과 참석 임원이 기명 날인한다." },
          { marker: "②", text: "회의록에는 개최 시간과 장소, 참석자 명단, 통과된 결의안 및 표결 결과가 포함되어야 한다." },
          { marker: "③", text: "서기의 부재시 해당 회의의 임시 서기를 회의 출석 회원의 과반수 동의를 받아 임명하여 회의록을 작성, 또는 참석 회원의 동의를 받아 회의를 녹음하여 파일을 서기에게 전달하여 회의록을 작성한다." },
          { marker: "④", text: "작성된 운영위원회 회의록은 모든 임원이 언제든지 열람 가능하도록 영구 보관하며, 총회 회의록은 모든 회원이 언제든지 접근할 수 있도록 영구적으로 보관한다." },
        ],
      },
    ],
  },
  {
    title: "제4장 사무국 및 지부",
    articles: [
      {
        id: "제20조",
        title: "사무국·지부 및 종사자",
        paragraphs: [
          { marker: "①", text: "협회 업무의 효율적 집행을 위해 대한민국 주사무소 이외에도 대한민국 내·외에 지부를 둘 수 있으며 세부 조직은 운영위원회 결의로 정한다." },
          { marker: "②", text: "종사자 임면은 간사의 형태이며, 운영위원회 결의로 별도 인사 규정에 따른다." },
          { marker: "③", text: "대한민국 외 지부의 경우 해당 대륙 또는 나라의 규정을 준수하며 사업을 진행한다." },
        ],
      },
    ],
  },
  {
    title: "제5장 회계 및 재정",
    articles: [
      {
        id: "제21조",
        title: "재산의 구분",
        content: "협회 재산은 기본재산과 보통재산으로 구분한다.",
        items: [
          "기본재산: 설립 시 출연 재산과 운영위원회 의결로 편입된 재산",
          "보통재산: 전항 이외의 재산",
        ],
      },
      {
        id: "제22조",
        title: "수입",
        content:
          "협회의 수입은 회원 회비, 수익사업 수익, 후원금 및 기타 수입으로 한다.",
      },
      {
        id: "제23조",
        title: "출자 및 융자",
        content:
          "협회 목적사업 수행을 위해 총회 결의로 외부단체 출자 또는 융자를 받을 수 있다.",
      },
      {
        id: "제24조",
        title: "회계연도 및 보고",
        paragraphs: [
          { marker: "①", text: "회계연도는 대한민국 정부 회계연도에 준한다." },
          { marker: "②", text: "운영위원회는 고용한 행정 간사 및 회계사와 함께 회계연도 종료 후 1개월 이내 전년도 사업실적·수지결산서를 작성하여 운영위원회 의결을 거쳐 총회에 보고한다." },
          { marker: "③", text: "감사는 운영위원회에서 제출한 전년도 사업실적·수지결산서를 별도로 감사하고, 총회에서 그 결과에 대한 이상 유무를 보고한다." },
        ],
      },
    ],
  },
  {
    title: "제6장 보칙",
    articles: [
      {
        id: "제25조",
        title: "정관 변경",
        content:
          "정관 변경은 총회 재적 회원 3분의 2 이상 찬성으로 의결한다.",
      },
      {
        id: "제26조",
        title: "해산 및 합병",
        content:
          "협회 해산 또는 합병은 총회 재적 회원 4분의 3 이상 찬성으로 의결한다.",
      },
      {
        id: "제27조",
        title: "재산의 소유관리",
        content:
          "협회 자신의 계산과 명의로 수익과 재산을 독립적으로 소유·관리하며, 단체의 수익을 구성원에게 분배하지 않는다.",
      },
      {
        id: "제28조",
        title: "잔여재산 귀속",
        content:
          "해산 시 잔여재산은 운영위원회의 결정에 따른 공익적 비영리단체 또는 공익기금에 기부한다.",
      },
      {
        id: "제29조",
        title: "운영규정",
        content:
          "정관 외 협회 운영에 필요한 사항은 운영위원회 의결로 별도 규정으로 정한다.",
      },
    ],
  },
];

const addendum = {
  title: "부칙",
  articles: [
    {
      id: "제1조",
      title: "시행일",
      content: "이 정관은 2025년 6월 23일부터 시행한다.",
    },
  ],
};

type Paragraph = {
  marker: string;
  text: string;
  items?: string[];
  subItems?: { marker: string; text: string }[];
};

type Article = {
  id: string;
  title: string;
  content?: string;
  items?: string[];
  paragraphs?: Paragraph[];
};

function ArticleBlock({ article }: { article: Article }) {
  return (
    <div className="mb-6">
      <p className="font-bold text-kmss-navy mb-1">
        {article.id} ({article.title})
      </p>
      {article.content && (
        <p className="text-gray-700 leading-relaxed">{article.content}</p>
      )}
      {article.items && (
        <ol className="ml-4 mt-1 space-y-1 list-decimal list-inside text-gray-700 leading-relaxed">
          {article.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )}
      {article.paragraphs && (
        <div className="space-y-2 mt-1">
          {article.paragraphs.map((para, pi) => (
            <div key={pi}>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">{para.marker}</span> {para.text}
              </p>
              {para.items && (
                <ol className="ml-6 mt-1 space-y-1 list-decimal list-inside text-gray-700 leading-relaxed">
                  {para.items.map((item, ii) => (
                    <li key={ii}>{item}</li>
                  ))}
                </ol>
              )}
              {para.subItems && (
                <div className="ml-10 mt-1 space-y-1">
                  {para.subItems.map((sub, si) => (
                    <p key={si} className="text-gray-700 leading-relaxed text-sm">
                      <span className="font-medium">{sub.marker}</span> {sub.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CharterPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">About KMSS</p>
          <h1 className="text-3xl font-bold text-kmss-navy">정관</h1>
        </div>
      </section>

      {/* Sub navigation */}
      <AboutSubNav current="/about/charter" />

      {/* 정관 본문 */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl mx-auto space-y-12">
          {chapters.map((chapter) => (
            <div key={chapter.title}>
              <p className="text-sm font-semibold text-kmss-berry uppercase tracking-widest mb-1">
                {chapter.title}
              </p>
              <div className="border-b border-kmss-berry mb-6" />
              {chapter.articles.map((article) => (
                <ArticleBlock key={article.id} article={article as Article} />
              ))}
            </div>
          ))}

          {/* 부칙 */}
          <div>
            <p className="text-sm font-semibold text-kmss-berry uppercase tracking-widest mb-1">
              {addendum.title}
            </p>
            <div className="border-b border-kmss-berry mb-6" />
            {addendum.articles.map((article) => (
              <ArticleBlock key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
