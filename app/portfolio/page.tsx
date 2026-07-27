import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Headphones,
  MessageCircle,
  Play,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Portfolio | PMEL Studio",
  description: "프메르 스튜디오의 로고송, K-POP, 콘텐츠 기획, OST 포트폴리오.",
};

const logoSongWorks = [
  {
    title: "삼성 SDS 보안 캠페인 로고송",
    category: "Logo Song",
    year: "타사 재직시",
    logoSrc: "/partners/samsung.avif",
    audioSrc: "/music/samsung-logo.mp3",
    description:
      "프메르 김동규 대표가 타사 재직시 진행했던 삼성 SDS 보안 캠페인 로고송 제작 프로젝트입니다.",
  },
  {
    title: "아모레퍼시픽 바이탈뷰티 프로젝트",
    category: "Logo Song",
    year: "타사 재직시",
    logoSrc: "/partners/amorepacific.avif",
    videoSrc: "/music/vital.mp4",
    description:
      "본 프로젝트는 프메르 김동규 대표가 타사 재직시 진행했던 아모레퍼시픽 바이탈뷰티 로고송 제작 프로젝트입니다.",
  },
  {
    title: "SBS | 미쓰에이 닭고기송",
    category: "Broadcast Logo Song",
    year: "YouTube",
    logoSrc: "/partners/sbs.png",
    link: "https://www.youtube.com/watch?v=qWOY0QD_z-I",
    description: "MISS A 닭고기송으로 공개된 SBS 로고송 콘텐츠 프로젝트입니다.",
  },
  {
    title: "생활 속 스포츠가치 실천 로고송",
    category: "Logo Song Music Video",
    year: "서울시 교육청 협업",
    logoSrc: "/partners/seouleducation.avif",
    link: "https://www.youtube.com/watch?v=97_oLCYtcYA&list=RD97_oLCYtcYA&start_radio=1",
    description:
      "서울시 교육청과 함께 진행한 생활 속 스포츠가치 실천 로고송 뮤직비디오 작업입니다.",
  },
  {
    title: "구쁘달걀 로고송",
    category: "Logo Song",
    year: "Guppeu",
    logoSrc: "/partners/guppeu.avif",
    link: "https://www.youtube.com/watch?v=hGbf4RcMfwo",
    description:
      "구쁘달걀 브랜드의 메시지를 음악으로 전달한 로고송 작업입니다.",
  },
  {
    title: "빨봉분식 라디오 광고 로고송",
    category: "Radio AD Logo Song",
    year: "Bbalbong Boonsic",
    logoSrc: "/partners/bbalbongboonsic.avif",
    link: "https://www.youtube.com/watch?v=s0_oUZ8p6mM",
    description: "빨봉분식 브랜드의 라디오 광고용 로고송 작업입니다.",
  },
  {
    title: "숨쉬고 로고송",
    category: "Logo Song",
    year: "Sumshigo",
    logoSrc: "/partners/sumshigo.avif",
    logoBgClass: "bg-[#fff8f0]",
    link: "https://www.youtube.com/watch?v=2tO3MxkpxIE",
    description: "숨쉬고 브랜드의 메시지를 음악으로 전달한 로고송 작업입니다.",
  },
  {
    title: "대구 빌리브범어 로고송",
    category: "Logo Song",
    year: "VILLIV",
    logoSrc: "/partners/villiv.avif",
    logoBgClass: "bg-[#f0f0f0]",
    link: "https://www.youtube.com/watch?v=jaSSxQyrtEU",
    description: "빌리브범어 메시지를 음악으로 전달한 로고송 작업입니다.",
  },
];

const kpopWorks = [
  {
    title: "GAMST(감스트) - '기다릴게'",
    category: "Artist Production",
    year: "2025",
    link: "https://www.youtube.com/watch?v=04fo1xIIKDc&list=RD04fo1xIIKDc&start_radio=1",
    description:
      "K-POP 기반의 아티스트 음원 작업으로, 곡의 정서와 보컬 톤을 살리는 제작 과정에 참여했습니다.",
  },
  {
    title: "양팡 Yang-Pang - 에바참치꽁치",
    category: "K-POP Collaboration",
    year: "2025",
    link: "https://www.youtube.com/watch?v=cVsBeK_3yHA&list=RDcVsBeK_3yHA&start_radio=1",
    description:
      "감스트, 봉준(KAMST, Bongjune)이 함께한 협업 음원 작업으로, 캐릭터와 대중성을 살린 곡 제작을 진행했습니다.",
  },
  {
    title: "강민희(Kang Min Hee) - 칭찬(Praise)",
    category: "K-POP",
    year: "2025",
    link: "https://www.youtube.com/watch?v=ptSw8Eu75e4&list=RDptSw8Eu75e4&start_radio=1",
    description:
      "보컬의 감정선과 곡의 선명도를 살리는 K-POP 음원 작업을 진행했습니다.",
  },
];

const contentPlanningWorks = [
  {
    title: "SM 엔터테인먼트 | EXO VR 팬미팅 콘텐츠 기획 프로젝트",
    category: "VR Fanmeeting",
    year: "타사 재직시",
    logoSrc: "/partners/smentertainment.avif",
    link: "https://youtu.be/IdssuxDdqKk?si=SzKiC2zgf0-WCdHc",
    description: [
      "EXO의 신곡 'Ko Ko Bop' 발매 시점에 맞춰 팬 경험을 극대화하는 VR 기반 팬미팅 콘텐츠를 기획·진행했습니다.",
      "팬을 단순 시청자가 아닌 아티스트의 작업 공간에 초대된 특별한 게스트로 대우한다는 콘셉트에서 출발해, EXO가 실제 녹음실 공간에서 팬과 직접 교감하는 상황을 VR로 구현하는 데 초점을 맞췄습니다.",
      "팬이 EXO의 녹음실에 초대되어 신곡을 함께 감상하고, 멤버들이 '우리 노래가 어떤지'를 묻는 방식으로 전개되도록 설계했습니다.",
      "VR 특성을 고려해 시선 유도, 동선, 거리감, 대화 흐름과 인터랙션 체감을 중심으로 시나리오와 연출 구조를 구성했습니다.",
      "본 프로젝트는 프메르의 김동규 대표가 타사 재직시 진행했던 프로젝트입니다.",
    ],
  },
];

const ostWorks = [
  {
    title: "뷰티학개론 웹드라마",
    category: "Web Drama",
    year: "CJ Collaboration",
    logoSrc: "/partners/cj.avif",
    link: "https://www.youtube.com/watch?v=7gHxVfkM4fI&list=PLNC9IvPO_ilrgLGhGbkZ7DC91o_rNyRU2",
    description: [
      "CJ와 협업한 뷰티학개론 웹드라마 콘텐츠 작업입니다.",
      "영상 콘텐츠의 장면 흐름과 감정선을 고려해 시청 경험에 맞는 음악적 방향성을 함께 다룬 프로젝트입니다.",
    ],
  },
];

function getYoutubeId(link: string) {
  const url = new URL(link);

  if (url.hostname.includes("youtu.be")) {
    return url.pathname.replace("/", "");
  }

  return url.searchParams.get("v");
}

function SectionTitle({ title, label }: { title: string; label: string }) {
  return (
    <div className="mb-5 flex items-end justify-between border-b border-line pb-4">
      <h2 className="text-3xl font-black text-ink md:text-4xl">{title}</h2>
      <p className="text-xs font-black tracking-[0.24em] text-orbit">{label}</p>
    </div>
  );
}

function LogoSongCard({
  item,
}: {
  item: {
    title: string;
    category: string;
    year: string;
    logoSrc: string;
    description: string;
    audioSrc?: string;
    videoSrc?: string;
    link?: string;
    logoBgClass?: string;
  };
}) {
  const videoId = item.link ? getYoutubeId(item.link) : null;

  return (
    <article className="grid gap-5 border border-line bg-white p-4 transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-[300px_1fr] md:p-5">
      <div
        className={`flex min-h-36 items-center justify-center overflow-hidden border border-line ${
          item.logoBgClass ?? "bg-white"
        }`}
      >
        <Image
          src={item.logoSrc}
          alt={`${item.title} 로고`}
          width={300}
          height={144}
          unoptimized
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <div className="mb-5 flex items-center justify-between text-base font-black text-ink">
          <span>{item.category}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="text-3xl font-black leading-tight text-ink md:text-4xl">
          {item.title}
        </h3>
        <p className="mt-5 text-base font-semibold leading-8 text-ink md:text-lg">
          {item.description}
        </p>
        {item.audioSrc ? (
          <div className="mt-5 border border-line bg-mist p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-orbit">
              <Headphones size={16} />
              LOGO SONG AUDIO
            </div>
            <audio
              controls
              controlsList="nodownload"
              preload="metadata"
              src={item.audioSrc}
              className="w-full"
            >
              브라우저가 오디오 재생을 지원하지 않습니다.
            </audio>
          </div>
        ) : null}
        {item.videoSrc ? (
          <div className="mt-5 border border-line bg-mist p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-orbit">
              <Play size={16} fill="currentColor" />
              LOGO SONG VIDEO
            </div>
            <video
              controls
              controlsList="nodownload"
              preload="metadata"
              src={item.videoSrc}
              className="aspect-video w-full bg-ink"
            >
              브라우저가 영상 재생을 지원하지 않습니다.
            </video>
          </div>
        ) : null}
        {videoId ? (
          <div className="mt-5 border border-line bg-mist p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-orbit">
              <Play size={16} fill="currentColor" />
              LOGO SONG VIDEO
            </div>
            <div className="aspect-video overflow-hidden border border-line bg-ink">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={item.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function YoutubeWorkCard({
  item,
}: {
  item: {
    title: string;
    category: string;
    year: string;
    link: string;
    description: string;
  };
}) {
  const videoId = getYoutubeId(item.link);

  return (
    <article className="grid gap-6 border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-[minmax(300px,0.95fr)_1fr] md:p-7">
      <div className="aspect-video overflow-hidden border border-line bg-ink">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={item.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-7 flex items-center justify-between text-base font-black text-ink">
            <span>{item.category}</span>
            <span>{item.year}</span>
          </div>
          <Headphones className="mb-6 text-orbit" size={30} />
          <h3 className="text-3xl font-black leading-tight text-ink md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-5 text-base font-semibold leading-8 text-ink md:text-lg">
            {item.description}
          </p>
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex h-11 w-fit items-center gap-2 bg-ink px-5 text-base font-black text-white"
        >
          YouTube
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

function ContentPlanningCard({
  item,
}: {
  item: {
    title: string;
    category: string;
    year: string;
    logoSrc: string;
    link: string;
    description: string[];
  };
}) {
  const videoId = getYoutubeId(item.link);

  return (
    <article className="grid gap-6 border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-[300px_1fr] md:p-6">
      <div className="flex min-h-36 items-center justify-center overflow-hidden border border-line bg-white">
        <Image
          src={item.logoSrc}
          alt={`${item.title} 로고`}
          width={300}
          height={144}
          unoptimized
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <div className="mb-5 flex items-center justify-between text-base font-black text-ink">
          <span>{item.category}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="text-3xl font-black leading-tight text-ink md:text-4xl">
          {item.title}
        </h3>
        <div className="mt-5 space-y-4 text-base font-semibold leading-8 text-ink md:text-lg">
          {item.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {videoId ? (
          <div className="mt-6 aspect-video overflow-hidden border border-line bg-ink">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={item.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main className="soft-grid min-h-screen bg-mist text-ink">
      <header className="border-b border-line/80 bg-mist/88 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="PMEL Studio home"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={46}
              height={46}
              className="h-[46px] w-[46px] object-contain"
              aria-hidden="true"
            />
            <span className="text-2xl font-black tracking-tight">PMEL</span>
          </a>
          <a
            href="https://open.kakao.com/o/sCVI02Nb"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 bg-ink px-5 text-base font-bold text-white"
          >
            문의
            <MessageCircle size={16} />
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-base font-black text-ink"
        >
          <ArrowLeft size={16} />
          메인으로
        </a>
        <p className="mt-12 text-xs font-black tracking-[0.28em] text-orbit">
          PMEL STUDIO / PORTFOLIO
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-ink md:text-7xl">
          PORTFOLIO
        </h1>
        <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-ink">
          로고송, K-POP 음원, 팬 경험 콘텐츠, OST까지 프로젝트 성격별로 확인할
          수 있습니다.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-24">
        <section>
          <SectionTitle title="기업 로고송" label="LOGO SONG" />
          <div className="grid gap-5">
            {logoSongWorks.map((item) => (
              <LogoSongCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="K-POP" label="YOUTUBE PLAYABLE" />
          <div className="grid gap-7">
            {kpopWorks.map((item) => (
              <YoutubeWorkCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="콘텐츠 기획" label="VR CONTENT" />
          <div className="grid gap-5">
            {contentPlanningWorks.map((item) => (
              <ContentPlanningCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="OST" label="SOUNDTRACK" />
          <div className="mb-8 grid gap-5">
            {ostWorks.map((item) => (
              <ContentPlanningCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
