### Webtoon Web App

- API: Korea Webtoon API (https://github.com/HyeokjaeLee/korea-webtoon-api)
- Client : JavaScript, React
- Tool : VisualStudio Code

# 

### 폴더 구조
```
webtoon
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── common
│   │   ├── api
│   │   │   └── webtoonAPI.ts
│   │   └── utill
│   │       └── api.ts
│   ├── components
│   │   ├── Nav.tsx
│   │   ├── Search.tsx
│   │   ├── WebtoonList.tsx
│   │   └── WeeksList.tsx
│   ├── features
│   │   ├── webtoon
│   │   │   └── webtoonActions.ts
│   │   │   └── webtoonSlice.ts
│   │   ├── Nav.tsx
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── pages
│   │   ├── MainPage.tsx
│   │   └── SearchPage.tsx
│   ├── styles
│   │   ├── Nav.css
│   │   ├── Search.css
│   │   ├── WebtoonList.css
│   │   └── WeekList.css
│   ├── App.scss
│   ├── App.tsx
│   ├── common.scss
│   ├── index.scss
│   ├── index.tsx
│   └── setupProxy.js (프록시 서버 설정)
├── package.json
└── tsconfig.json

```
