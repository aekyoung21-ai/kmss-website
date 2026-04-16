import type { Metadata } from "next";
import AboutSubNav from "../SubNav";

export const metadata: Metadata = {
  title: "운영규정",
  openGraph: {
    title: "운영규정 | KMSS",
    description: "한국엄마학자협회 운영규정",
    url: "https://www.koreanmotherscholar.org/about/rules",
  },
  alternates: {
    canonical: "https://www.koreanmotherscholar.org/about/rules",
  },
};

type Paragraph = {
  marker: string;
  text: string;
  items?: string[];
};

type Article = {
  id: string;
  title: string;
  content?: string;
  items?: string[];
  paragraphs?: Paragraph[];
};

const articles: Article[] = [
  {
    id: "제1조",
    title: "원칙",
    paragraphs: [
      { marker: "①", text: "한국엄마학자협회(영문명: Korean MotherScholar Society)는 비영리 조직으로 경제적 목표를 추구하지 않는다." },
      { marker: "②", text: "단체 자신의 계산과 명의로 수익과 재산을 독립적으로 소유·관리한다. 단체의 기금은 경제행위와 건전한 재정 관리 원칙을 고려하여 법적 목적으로만 사용할 수 있다." },
      { marker: "③", text: "단체의 수익을 구성원에게 분배하지 아니하며, 회원 자격으로 협회 기금으로부터 어떠한 혜택도 받을 수 없다. 회원은 탈퇴하거나 협회가 해산될 경우 협회의 자산에 대해 어떠한 청구권도 갖지 않는다." },
      { marker: "④", text: "누구도 협회의 목적에 부합하지 않는 비용이나 불균형적으로 높은 보수로 특혜를 받을 수 없다." },
      { marker: "⑤", text: "협회 직책의 보유자, 즉 임원은 봉사로 활동한다." },
      { marker: "⑥", text: "임원은 행정 간사를 고용하며, 행정 간사에게는 업무 시작 다음 달부터 매달 정해진 보수가 지급된다." },
    ],
  },
  {
    id: "제2조",
    title: "목적, 목표 및 업무",
    paragraphs: [
      { marker: "①", text: "협회는 자선 목적을 추구하며, 협회의 직접적인 활동을 통해 실현된다. 협회가 이 업무를 직접 수행하지 않는 한, 협회는 제3자에게 업무 수행을 의뢰한다." },
      { marker: "②", text: "협회는 회비, 공공 보조금, 후원금 및 기타 수입으로 재정을 충당한다." },
      { marker: "③", text: "누구도 협회의 목적에 부합하지 않는 비용이나 불균형적으로 높은 보수로 특혜를 받을 수 없다." },
      {
        marker: "④",
        text: "협회의 목적은 다음과 같은 사업을 통해 실현된다:",
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
      { marker: "⑤", text: "목적 달성을 위해 독립적인 업무 영역이 구성되며, 총회에서 투표를 통해 선출된 운영위원회와 운영위원회에 의해 고용된 회원 또는 비회원이 업무를 담당한다." },
      { marker: "⑥", text: "목적 달성을 위해 필요에 따라 주사무소 이외에도 대한민국 내·외에 지부를 둘 수 있다. 지부 담당자는 운영위원회에서 결정하며, 지부에서 필요한 인력은 운영위원회 승인을 받아 지부 담당자가 채용할 수 있다." },
      { marker: "⑦", text: "총회에서 선출된 감사는 운영위원회 및 운영위원회에 의해 고용된 회원 또는 비회원의 업무를 감사하며 시정한다." },
    ],
  },
  {
    id: "제3조",
    title: "임원의 선임 및 해임",
    paragraphs: [
      { marker: "①", text: "임원은 회장 1인, 부회장 1인, 이사 5인 이상, 서기 2인, 감사 2인으로 구성되며, 임기는 2년으로 하며 2회 중임할 수 있다. 제17조의 방법에 의하여 총회에서 선출한다. 임원은 정해진 2년 임기를 채우지 않고, 운영위원회에서 의사를 표하고 사임할 수 있다." },
      { marker: "②", text: "협회 목적을 수행하기 위한 임원의 선출은 원칙상 비밀 투표로 진행하며, 총회에서 반대하는 회원이 없는 경우 비밀 투표를 생략할 수 있다." },
      { marker: "③", text: "임원의 보선은 결원이 발생한 날로부터 3개월 이내로 하여야 하며, 임시 총회를 열어 선출한다. 보선된 임원의 임기는 전임자의 잔여기간으로 한다." },
      { marker: "④", text: "임원 전체가 사임하는 경우, 새로운 선거가 실시될 때까지는 임원직을 유지한다." },
      { marker: "⑤", text: "임원이 협회 목적에 위배되는 행위, 임원 간 분쟁, 회계 부정 또는 현저한 부당행위, 협회 업무를 현저히 방해하는 행위를 할 시, 총회 의결로 해임할 수 있다." },
    ],
  },
  {
    id: "제4조",
    title: "임원의 직무 및 형태",
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
    id: "제5조",
    title: "운영위원회 및 총회",
    paragraphs: [
      { marker: "①", text: "운영위원회 및 총회는 대면 회의, 온라인 회의, 또는 대면 회의와 온라인 회의를 결합한 하이브리드 형태로 진행될 수 있다." },
      { marker: "②", text: "온라인 및 하이브리드 형태의 운영위원회 및 총회에서는 회원이 기록이 가능한 메세지 기능 사용 등으로 의견을 표현하고 권리를 행사한다." },
      { marker: "③", text: "운영위원회 및 총회의 회의록은 서기가 작성하며, 서기의 부재시 해당 회의의 임시 서기를 회의 출석 회원의 과반수 동의를 받아 임명하여 회의록을 작성한다. 회의록에는 개최 시간과 장소, 참석자 명단, 통과된 결의안 및 표결 결과가 포함되어야 한다. 운영위원회 및 총회 진행 경과와 결과는 서기가 회의록으로 작성하고 의장과 참석 임원이 기명 날인한다. 작성된 운영위원회 회의록은 모든 임원이 언제든지 열람 가능하도록 영구 보관하며, 총회 회의록은 모든 회원이 언제든지 접근할 수 있도록 영구적으로 보관한다." },
    ],
  },
  {
    id: "제6조",
    title: "개인정보 수집 및 관리",
    paragraphs: [
      { marker: "①", text: "개인정보는 대한민국 개인정보 보호법에 의거하여 소정의 회원 가입서를 통해 수집 및 관리된다. 수집 목적은 협회 온라인 플랫폼 사용 및 회원 가입 등에 필요한 본인 확인이다. 수집되는 내용은 다음과 같다: 이름, 생년월일, 거주지, 연락처(이메일 주소), 소속 기관, 전공 또는 연구 주제, 자녀 나이, 카카오톡 단톡방 닉네임, Discord 사용 닉네임, 거래 정보. 수집된 정보는 수집 일로부터 3년 동안 보관되며, 거래 정보는 대한민국 전자상거래법에 따라 5년간 유지된다. 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공할 수 있다. 회원의 형태가 지속되는 경우, 3년 주기로 개인정보 수집 및 관리에 대한 동의를 다시 받아야 한다." },
      { marker: "②", text: "특정 온라인 플랫폼을 통해 수집된 개인정보는 플랫폼을 제공하고 관리하는 회사에 제공된다. 다만, 협회에 맞는 설정을 통해 개인정보 제공 정도를 조정할 수 있다." },
    ],
  },
  {
    id: "제7조",
    title: "온라인 커뮤니티",
    paragraphs: [
      { marker: "①", text: "카카오톡 단체 채팅방은 협회 회원 여부와 관계없이 자유로운 소통의 공간으로 사용되며, 개인정보 수집 및 관리의 대상이 아니다. 카카오톡 단체 채팅방에서 협회와 무관하게 자발적으로 생성된 다른 모임(예: 스터디 모임)은 협회의 관리 대상에 포함되지 않는다." },
      { marker: "②", text: "Slack, Discord, 웹사이트 등 다양한 온라인 플랫폼을 활용할 경우, 플랫폼 사용자의 개인정보는 협회 차원에서 수집하고 관리한다. 플랫폼은 협회 회원 여부와 상관없이 사용 가능하지만, 협회 회원 전용 채널에는 비회원이 접근할 수 없다. 협회 운영위원회에서 제공하는 사업 외의 프로그램은 협회의 관리 대상이 아니다." },
      { marker: "③", text: "단체 채팅방이나 온라인 플랫폼에서의 정보 제공 및 공유를 장려한다." },
    ],
  },
  {
    id: "제8조",
    title: "사업 진행",
    paragraphs: [
      { marker: "①", text: "사업 진행 및 홍보시 책임 담당자의 이름을 기록한다." },
      { marker: "②", text: "행사 진행 시 참가자 얼굴이 나오는 사진 및 영상을 찍어야 하는 경우에는 미리 이에 대해 회원 및 비회원 참가자에게 공지한다." },
      { marker: "③", text: "회원의 자녀와 함께하는 행사인 경우, 아이 초상권에 대한 동의를 미리 받는다." },
      { marker: "④", text: "행사 시간은 한국 시각을 기준으로 하며, 대한민국 주사무소 외 지부에서 주최하는 행사인 경우 위치해 있는 시간대를 기준으로, 해당 대륙 또는 나라의 규정을 준수하며 사업을 진행한다." },
      { marker: "⑤", text: "후원자의 동의를 받아 후원자 이름을 사업 운영 결과 보고서에 기록한다." },
    ],
  },
  {
    id: "제9조",
    title: "효력 발생",
    paragraphs: [
      { marker: "①", text: "본 운영 규정은 2025년 6월 23일부터 시행된다." },
    ],
  },
];

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RulesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-kmss-berry text-xs font-semibold uppercase tracking-widest mb-2">About KMSS</p>
          <h1 className="text-3xl font-bold text-kmss-navy">운영규정</h1>
        </div>
      </section>

      {/* Sub navigation */}
      <AboutSubNav current="/about/rules" />

      {/* 운영규정 본문 */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-kmss-berry uppercase tracking-widest mb-1">
            한국엄마학자협회 운영규정
          </p>
          <div className="border-b border-kmss-berry mb-8" />
          <div className="space-y-2">
            {articles.map((article) => (
              <ArticleBlock key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
