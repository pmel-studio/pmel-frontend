"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const words = [
  "Logo Song",
  "K-POP Production",
  "OST",
  "Vocal Directing",
  "Arrangement",
  "Recording",
  "Mixing",
  "VR Content Planning",
  "Sound Branding",
  "Brand Music",
  "Campaign Song",
  "Radio AD Song",
  "Music Video",
  "Web Drama OST",
  "Fan Experience",
  "Artist Production",
  "YouTube Content",
  "Commercial Music",
  "Storytelling Sound",
];

export function HeroTypewriter() {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);

  useEffect(() => {
    let timeline: gsap.core.Timeline | null = null;
    let killed = false;

    const play = () => {
      const word = words[wordIndexRef.current % words.length];
      const cursor = { count: 0 };

      timeline = gsap.timeline({
        onComplete: () => {
          wordIndexRef.current += 1;
          if (!killed) {
            play();
          }
        },
      });

      timeline
        .to(cursor, {
          count: word.length,
          duration: Math.max(0.8, word.length * 0.055),
          ease: "none",
          onUpdate: () => {
            setText(word.slice(0, Math.round(cursor.count)));
          },
        })
        .to({}, { duration: 1.1 })
        .to(cursor, {
          count: 0,
          duration: Math.max(0.45, word.length * 0.032),
          ease: "none",
          onUpdate: () => {
            setText(word.slice(0, Math.round(cursor.count)));
          },
        })
        .to({}, { duration: 0.22 });
    };

    play();

    return () => {
      killed = true;
      timeline?.kill();
    };
  }, []);

  return (
    <div className="wordmark-shadow max-w-[680px]">
      <p className="text-lg font-black text-ink md:text-2xl">PMEL is</p>
      <h1 className="mt-3 min-h-[150px] text-5xl font-black leading-[0.98] tracking-normal text-ink md:min-h-[170px] md:text-7xl">
        <span>{text}</span>
        <span className="ml-2 inline-block h-[0.82em] w-[3px] translate-y-[0.08em] animate-pulse bg-orbit" />
      </h1>
    </div>
  );
}
