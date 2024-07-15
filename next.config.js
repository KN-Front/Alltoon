/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 정적 사이트로 내보내기 설정
  cleanDistDir: true, // 빌드 전에 기존 디렉토리 삭제
};

module.exports = nextConfig;
