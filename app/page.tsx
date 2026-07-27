import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Headphones,
  MessageCircle,
  Play,
  Sparkles,
} from "lucide-react";
import { HeroTypewriter } from "./components/HeroTypewriter";
import { StarsBackground } from "./components/StarsBackground";
import { SiteFooter } from "./components/SiteFooter";

const partnerLogos = [
  { name: "Amorepacific", src: "/partners/amorepacific.avif" },
  { name: "Ashley", src: "/partners/ashley.avif" },
  { name: "Bbalbong Boonsic", src: "/partners/bbalbongboonsic.avif" },
  { name: "CJ", src: "/partners/cj.avif" },
  {
    name: "Constitutional Court of Korea",
    src: "/partners/constitutionalcourtofkorea.avif",
  },
  { name: "D-Cube Department", src: "/partners/dcubedepartment.avif" },
  { name: "Everland", src: "/partners/everland.avif" },
  { name: "Focusrite", src: "/partners/focusrite.avif" },
  { name: "Guppeu", src: "/partners/guppeu.avif" },
  { name: "Haetae", src: "/partners/haetae.avif" },
  {
    name: "Hansei Cyber Security High School",
    src: "/partners/hanseicybersecurityhighschool.avif",
  },
  { name: "KBS", src: "/partners/kbs.avif" },
  {
    name: "Saesol Elementary School",
    src: "/partners/saesolelementaryschool.avif",
  },
  { name: "Samsung", src: "/partners/samsung.avif" },
  { name: "SBS", src: "/partners/sbs.png" },
  { name: "Seoul Education", src: "/partners/seouleducation.avif" },
  { name: "Skinfood", src: "/partners/skinfood.png" },
  { name: "SM Entertainment", src: "/partners/smentertainment.avif" },
  { name: "Sonarworks", src: "/partners/sonarworks.avif" },
  { name: "SOOP", src: "/partners/soop.avif" },
  { name: "Soundcat", src: "/partners/soundcat.avif" },
  { name: "Sumshigo", src: "/partners/sumshigo.avif" },
  { name: "T Map", src: "/partners/tmap.avif" },
  { name: "tvN", src: "/partners/tvn.avif" },
  { name: "VILLIV", src: "/partners/villiv.avif" },
  { name: "Warm", src: "/partners/warm.avif" },
];

const orbitWords = [
  { word: "LOGO SONG", hover: "hover:text-[#2f65ff]" },
  { word: "K-POP", hover: "hover:text-[#f43f5e]" },
  { word: "OST", hover: "hover:text-[#0f766e]" },
  { word: "VOCAL DIRECTING", hover: "hover:text-[#7c3aed]" },
  { word: "ARRANGEMENT", hover: "hover:text-[#ea580c]" },
  { word: "RECORDING", hover: "hover:text-[#0891b2]" },
  { word: "MIXING", hover: "hover:text-ink" },
];

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

const history = [
  ["2024. 02", "프메르 스튜디오 설립 및 독립 제작팀 구성"],
  ["2024. 08", "첫 아티스트 프로필 콘텐츠 제작"],
  ["2025. 03", "Logo Song, K-POP, OST 중심의 음원 포트폴리오 확장"],
  ["2026. 01", "신규 아티스트 및 브랜드 음악 프로젝트 준비"],
];

const capabilities = [
  {
    title: "Planning",
    items: ["Logo Song", "K-POP", "OST", "브랜드 음악", "영상 음악"],
  },
  {
    title: "Production",
    items: ["작곡", "작사", "편곡", "아티스트 음원", "보컬 디렉팅"],
  },
  {
    title: "Post",
    items: ["레코딩", "믹싱", "사운드 디자인", "콘텐츠 음원"],
  },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <p className="mb-4 text-[18px] font-bold tracking-[0.28em] text-orbit">
      {title} / {index}
    </p>
  );
}

function WorkCard({
  item,
  embedVideo = false,
}: {
  item: {
    title: string;
    category: string;
    year: string;
    description: string;
    link?: string;
    logoSrc?: string;
    audioSrc?: string;
    videoSrc?: string;
  };
  embedVideo?: boolean;
}) {
  const videoId = item.link ? getYoutubeId(item.link) : null;

  if (embedVideo && videoId) {
    return (
      <article className="group grid gap-6 border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-[minmax(300px,0.95fr)_1fr] md:p-7">
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

  return (
    <article
      className={
        item.logoSrc
          ? "group grid gap-5 border border-line bg-white p-4 transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-[300px_1fr] md:p-5"
          : "group border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
      }
    >
      {item.logoSrc ? (
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
      ) : null}
      <div>
        <div
          className={
            item.logoSrc
              ? "mb-5 flex items-center justify-between text-sm font-black text-ink"
              : "mb-20 flex items-center justify-between text-base font-bold text-ink"
          }
        >
          <span>{item.category}</span>
          <span>{item.year}</span>
        </div>
        {!item.logoSrc ? (
          <Headphones className="mb-6 text-orbit" size={26} />
        ) : null}
        <h3
          className={
            item.logoSrc
              ? "text-3xl font-black leading-tight text-ink md:text-4xl"
              : "text-2xl font-black text-ink"
          }
        >
          {item.title}
        </h3>
        <p
          className={
            item.logoSrc
              ? "mt-5 text-base font-semibold leading-8 text-ink md:text-lg"
              : "mt-4 text-base font-semibold leading-8 text-ink"
          }
        >
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
        {item.link && !embedVideo ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
          className="mt-6 inline-flex h-10 items-center gap-2 bg-ink px-4 text-base font-black text-white"
          >
            YouTube
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function getYoutubeId(link: string) {
  const url = new URL(link);

  if (url.hostname.includes("youtu.be")) {
    return url.pathname.replace("/", "");
  }

  return url.searchParams.get("v");
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

export default function Home() {
  return (
    <main className="soft-grid min-h-screen overflow-hidden bg-mist text-ink">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-line/80 bg-mist/88 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a
            href="#home"
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
          <div className="hidden items-center gap-8 text-base font-black text-ink md:flex">
            <a href="/portfolio" className="hover:text-ink">
              포트폴리오
            </a>
          </div>
          <a
            href="https://open.kakao.com/o/sCVI02Nb"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 bg-ink px-5 text-base font-bold text-white"
          >
            문의
            <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative isolate min-h-[620px] overflow-hidden"
      >
        <StarsBackground
          pointerEvents={false}
          speed={70}
          starColor="rgba(47,55,68,0.5)"
          className="-z-10 opacity-45 [background:radial-gradient(ellipse_at_72%_50%,rgba(47,55,68,0.14)_0%,rgba(47,55,68,0.06)_32%,rgba(251,252,255,0)_78%)]"
        />
        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-[1fr_0.86fr]">
          <div>
            <p className="mb-5 text-[16px] font-black tracking-[0.28em] text-orbit">
              PMEL STUDIO · MUSIC PRODUCTION
            </p>
            <HeroTypewriter />
            <p className="mt-7 max-w-md text-base font-semibold leading-8 text-ink">
              프메르 스튜디오는 Logo Song, K-POP, OST를 중심으로 브랜드와
              아티스트의 음악을 설계하는 제작 스튜디오입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/portfolio"
              className="inline-flex h-11 items-center gap-2 bg-ink px-5 text-base font-bold text-white"
              >
                작업 보기
                <Play size={15} fill="currentColor" />
              </a>
              <a
                href="https://open.kakao.com/o/sCVI02Nb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 border border-line bg-white px-5 text-base font-bold text-ink"
              >
                카카오 오픈채팅
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="relative min-h-[470px]">
            <div className="absolute inset-x-7 top-7 h-[390px] border border-line bg-white/70 shadow-soft" />
            <div className="absolute inset-x-0 top-0 border border-line bg-white p-4 shadow-soft">
              <div className="relative h-[410px] overflow-hidden bg-[#121827]">
                <Image
                  src="/background.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 768px) 520px, 90vw"
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/0 to-black/60" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/28 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div>
                    <p className="text-xs font-black tracking-[0.24em] text-white/80">
                      PMEL STUDIO VISUAL
                    </p>
                    <p className="mt-2 text-3xl font-black leading-none text-white">
                      Artist
                      <br />
                      Moodboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-line py-5">
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="word-marquee flex w-max items-center">
            {[...orbitWords, ...orbitWords, ...orbitWords, ...orbitWords].map(
              (item, index) => (
                <span
                  key={`${item.word}-${index}`}
                  className="group inline-flex items-center text-5xl font-black text-transparent [-webkit-text-stroke:1px_#b8c3d3] md:text-7xl"
                >
                  <span
                    className={`cursor-default px-5 transition duration-300 group-hover:[-webkit-text-stroke:1px_transparent] ${item.hover}`}
                  >
                    {item.word}
                  </span>
                  <span className="text-[#b8c3d3] transition duration-300 group-hover:text-ink">
                    ·
                  </span>
                </span>
              ),
            )}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-mist to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-mist to-transparent" />
        </div>
      </div>

      <section className="border-b border-line bg-white/55">
        <div className="relative overflow-hidden border-y border-line bg-mist py-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist to-transparent" />
          <div className="logo-marquee flex w-max items-center gap-5">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-44 w-44 shrink-0 items-center justify-center overflow-hidden border border-line bg-white shadow-[0_10px_30px_rgba(25,40,70,0.05)]"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} 로고`}
                  width={176}
                  height={176}
                  className="h-full w-full object-contain opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.82fr_1fr]">
        <div className="border border-line bg-white p-8 shadow-soft">
          <Sparkles className="mb-7 text-orbit" />
          <ol className="space-y-5 text-base font-bold text-ink">
            <li>01. 아티스트의 핵심 이미지를 정합니다.</li>
            <li>02. 콘텐츠 구조와 공개 순서를 설계합니다.</li>
            <li>03. 제작 가능한 예산 안에서 완성도를 올립니다.</li>
          </ol>
        </div>
        <div>
          <SectionLabel index="01" title="기획 방식" />
          <h2 className="max-w-md text-4xl font-black leading-tight text-ink md:text-5xl">
            화려함보다 먼저,
            <br /> 기억되는 장면 설계
          </h2>
          <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-ink">
            프메르 스튜디오는 큰 규모보다 명확한 방향성을 우선합니다. 브랜드의
            짧은 멜로디, 아티스트 음원, 영상의 감정선을 목적에 맞게 정리합니다.
          </p>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
        <SectionLabel index="02" title="포트폴리오" />
        <h2 className="mb-12 text-4xl font-black text-ink md:text-5xl">
          대표 작업
        </h2>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            [
              "기업 로고송",
              "삼성 SDS, 아모레퍼시픽 등 브랜드 메시지를 음악으로 설계한 작업",
            ],
            ["K-POP", "아티스트 음원 제작과 협업 프로젝트"],
            [
              "콘텐츠 기획",
              "EXO VR 팬미팅처럼 팬 경험을 설계한 콘텐츠 프로젝트",
            ],
            ["OST", "영상의 분위기와 감정선을 살리는 사운드트랙 작업"],
          ].map(([title, description]) => (
            <article
              key={title}
              className="border border-line bg-white p-5 shadow-soft"
            >
              <p className="text-xl font-black text-ink">{title}</p>
              <p className="mt-4 text-base font-semibold leading-8 text-ink">
                {description}
              </p>
            </article>
          ))}
        </div>
        <a
          href="/portfolio"
          className="mt-8 inline-flex h-11 items-center gap-2 bg-ink px-5 text-base font-black text-white"
        >
          전체 포트폴리오 보기
          <ArrowUpRight size={15} />
        </a>
      </section>

      <section
        id="history"
        className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.75fr_1.1fr]"
      >
        <div>
          <SectionLabel index="03" title="회사 연혁" />
          <h2 className="text-4xl font-black leading-tight text-ink md:text-5xl">
            작은 궤도에서
            <br />
            다음 장면으로.
          </h2>
        </div>
        <div className="border border-line bg-white">
          {history.map(([date, text]) => (
            <div
              key={date}
              className="grid grid-cols-[104px_1fr] border-b border-line p-6 last:border-b-0 md:grid-cols-[150px_1fr]"
            >
              <p className="text-xs font-black text-orbit">{date}</p>
              <p className="text-base font-bold text-ink">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.75fr_1.1fr]">
        <div>
          <SectionLabel index="04" title="제작 영역" />
          <h2 className="text-4xl font-black leading-tight text-ink md:text-5xl">
            음악을 완성하는
            <br />
            PMEL Studio 스택.
          </h2>
        </div>
        <div className="grid gap-4">
          {capabilities.map((group, index) => (
            <article
              key={group.title}
              className="grid gap-5 border border-line bg-white p-5 shadow-[0_10px_30px_rgba(25,40,70,0.04)] sm:grid-cols-[104px_1fr]"
            >
              <div>
                <p className="text-xs font-black tracking-[0.2em] text-orbit">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black text-ink">
                  {group.title}
                </h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-line bg-mist px-4 py-3 text-base font-bold text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-28 text-center">
        <p className="mb-4 text-xs font-black tracking-[0.28em] text-orbit">
          CONTACT
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight text-ink md:text-5xl">
          같이 만들 프로젝트가 있다면,
          <br />
          카카오 오픈채팅으로
          <br /> 이야기해주세요.
        </h2>
        <a
          href="https://open.kakao.com/o/sCVI02Nb"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex h-11 items-center gap-2 bg-orbit px-5 text-base font-black text-white"
        >
          프메르 스튜디오에 문의하기
          <MessageCircle size={16} />
        </a>
      </section>

      <SiteFooter />

      <a
        href="#home"
        aria-label="맨 위로 이동"
        className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center border border-line bg-ink text-white shadow-soft transition hover:-translate-y-1 hover:bg-orbit"
      >
        <ArrowUp size={20} />
      </a>
    </main>
  );
}
