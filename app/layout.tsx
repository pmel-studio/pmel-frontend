import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMEL Studio | 프메르 스튜디오",
  description:
    "심플한 토성 로고를 시그니처로 가진 프메르 스튜디오의 포트폴리오와 회사 소개.",
  openGraph: {
    title: "PMEL Studio | 프메르 스튜디오",
    description:
      "아티스트와 콘텐츠의 궤도를 설계하는 음악 제작 스튜디오.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
