import type { Metadata } from "next";
import "./globals.css";

const logoOpenGraphImage = {
  url: "/logo.png",
  width: 1536,
  height: 1024,
  alt: "PMEL Studio logo",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pmel-studio.vercel.app"),
  title: "PMEL Studio | 프메르 스튜디오",
  description:
    "심플한 토성 로고를 시그니처로 가진 프메르 스튜디오의 포트폴리오와 회사 소개.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/logo-mark.png", type: "image/png", sizes: "256x256" },
      { url: "/logo.png", type: "image/png", sizes: "1536x1024" },
    ],
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "PMEL Studio | 프메르 스튜디오",
    description:
      "아티스트와 콘텐츠의 궤도를 설계하는 음악 제작 스튜디오.",
    type: "website",
    locale: "ko_KR",
    siteName: "PMEL Studio",
    images: [logoOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "PMEL Studio | PMEL Studio",
    description: "PMEL Studio",
    images: [logoOpenGraphImage],
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
