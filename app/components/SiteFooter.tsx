import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const workAreas = ["Logo Song", "K-POP", "OST", "Content Planning"];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/70 px-5">
      <div className="mx-auto grid max-w-6xl gap-10 py-12 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <a
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="PMEL Studio home"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              aria-hidden="true"
            />
            <span className="text-2xl font-black tracking-tight">PMEL</span>
          </a>
          <p className="mt-5 max-w-sm text-base font-semibold leading-8 text-ink">
            프메르 스튜디오는 브랜드와 아티스트의 음악을 설계하는 제작
            스튜디오입니다.
          </p>
          <a
            href="https://open.kakao.com/o/sCVI02Nb"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-11 items-center gap-2 bg-ink px-5 text-base font-black text-white"
          >
            카카오 오픈채팅
            <MessageCircle size={16} />
          </a>
        </div>

        <div>
          <p className="text-base font-black tracking-[0.22em] text-orbit">
            WORK
          </p>
          <ul className="mt-5 space-y-3">
            {workAreas.map((area) => (
              <li key={area} className="text-base font-bold text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-base font-black tracking-[0.22em] text-orbit">
            MENU
          </p>
          <div className="mt-5 flex flex-col items-start gap-3">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-base font-black text-ink transition hover:text-orbit"
            >
              포트폴리오
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://open.kakao.com/o/sCVI02Nb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base font-black text-ink transition hover:text-orbit"
            >
              문의하기
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line py-5 text-base font-bold text-ink sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 PMEL Studio. All rights reserved.</p>
        <p>프메르 스튜디오</p>
      </div>
    </footer>
  );
}
