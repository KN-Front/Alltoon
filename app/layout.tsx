import './global.css';

export const metadata = {
  title: '올툰 | 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰 모두 여기서!',
  description:
    '올툰에서는 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰을 모두 즐길 수 있습니다. 다양한 웹툰을 한 곳에서 만나보세요!',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: '올툰 | 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰 모두 여기서!',
    description:
      '올툰에서 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰을 모두 즐기세요!',
    url: 'https://kn-front.github.io/Alltoon',
    locale: 'ko_KR',
    images: [
      {
        url: '/thumbnail.png',
        width: 800,
        height: 600,
        alt: 'Thumbnail image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '올툰 | 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰 모두 여기서!',
    description:
      '올툰에서 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰을 모두 즐기세요!',
    images: [
      {
        url: '/thumbnail.png',
        width: 800,
        height: 600,
        alt: 'Thumbnail image',
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className="flex justify-center min-h-screen">
        <div className="w-full max-w-[1430px] mx-auto md:p-4">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
