import Head from 'next/head';

const SEO = () => {
  const baseURL = process.env.BASE_URL || '';

  return (
    <Head>
      <meta charSet="UTF-8" />
      <html lang="ko" />
      <title>
        올툰 | 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰 모두 여기서!
      </title>
      <meta
        name="description"
        content="올툰에서는 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰을 모두 즐길 수 있습니다. 다양한 웹툰을 한 곳에서 만나보세요!"
      />
      <link
        rel="icon"
        href={`${baseURL}/favicon.ico`}
        sizes="16x16"
        type="image/x-icon"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="올툰 | 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰 모두 여기서!"
      />
      <meta
        property="og:description"
        content="올툰에서 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰을 모두 즐기세요!"
      />
      <meta property="og:url" content="https://kn-front.github.io/Alltoon" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content="/thumbnail.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="올툰 | 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰 모두 여기서!"
      />
      <meta
        name="twitter:description"
        content="올툰에서 네이버 웹툰, 카카오 웹툰, 카카오페이지 웹툰을 모두 즐기세요!"
      />
      <meta name="twitter:image" content="/thumbnail.png" />

      <html lang="en" />
      <title>
        AllToon | Enjoy Naver Webtoon, Kakao Webtoon, and KakaoPage Webtoon
        here!
      </title>
      <meta
        name="description"
        content="At AllToon, you can enjoy Naver Webtoon, Kakao Webtoon, and KakaoPage Webtoon all in one place. Discover various webtoons right here!"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="AllToon | Enjoy Naver Webtoon, Kakao Webtoon, and KakaoPage Webtoon here!"
      />
      <meta
        property="og:description"
        content="Enjoy Naver Webtoon, Kakao Webtoon, and KakaoPage Webtoon all in one place at AllToon!"
      />
      <meta property="og:url" content="https://kn-front.github.io/Alltoon" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/thumbnail.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="AllToon | Enjoy Naver Webtoon, Kakao Webtoon, and KakaoPage Webtoon here!"
      />
      <meta
        name="twitter:description"
        content="Enjoy Naver Webtoon, Kakao Webtoon, and KakaoPage Webtoon all in one place at AllToon!"
      />
      <meta name="twitter:image" content="/thumbnail.png" />
    </Head>
  );
};

export default SEO;
