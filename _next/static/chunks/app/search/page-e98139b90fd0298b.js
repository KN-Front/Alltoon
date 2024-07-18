(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{4654:function(){},8449:function(e,t,r){Promise.resolve().then(r.bind(r,7071)),Promise.resolve().then(r.bind(r,7567)),Promise.resolve().then(r.bind(r,9197))},7071:function(e,t,r){"use strict";var s=r(7437),n=r(2265),l=r(9564);t.default=()=>{let[e,t]=(0,n.useState)(""),{setSearchValue:r}=(0,l.m)(),a=e=>{t(e.target.value)},i=()=>{r(e)},o=t=>{"Enter"===t.key&&r(e)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"hidden rounded-lg md:block browse-banner bg-zinc-200 dark:bg-zinc-700/50 ",children:(0,s.jsx)("div",{id:"body",className:"relative flex items-center justify-center mx-auto text-center",children:(0,s.jsxs)("div",{className:"flex flex-col mt-16",children:[(0,s.jsx)("h1",{className:"font-semibold text-slate-900 dark:text-dark-white md:text-xl lg:text-2xl",children:"Find the webtoons you're looking for!"}),(0,s.jsxs)("div",{className:"flex space-x-2 mt-3.5 text-center items-center mx-auto bg-white dark:bg-dark-bg-third border border-zinc-700/20 px-4 rounded-lg",children:[(0,s.jsxs)("div",{className:"absolute justify-center mr-4 space-x-4",children:[(0,s.jsx)("button",{onClick:()=>{i()},children:"oo"}),(0,s.jsx)("i",{className:"fa-solid fa-search text-[17px] mt-1"})]}),(0,s.jsx)("input",{className:"text-slate-900 dark:text-dark-white bg-zinc-700/20 navbar-input px-6 border !w-[18rem] lg:!w-[32rem] border-zinc-700/10",placeholder:"Search Webtoon",onChange:a,onKeyDown:o})]})]})})}),(0,s.jsxs)("div",{className:"flex items-center block p-4 rounded-lg md:hidden bg-zinc-200 dark:bg-zinc-700/50",children:[(0,s.jsx)("input",{className:"flex-1 text-xs bg-transparent border-none text-slate-900 dark:text-dark-white focus:outline-none sm:text-sm",placeholder:"제목, 작가명",onChange:a,onKeyDown:o,value:e}),(0,s.jsx)("button",{onClick:i,className:"ml-2 text-xs text-light-text dark:text-dark-white sm:text-sm",children:"검색"})]})]})}},7567:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var s=r(7437),n=r(3206);r(2265);var l=e=>{let{webtoon:t}=e;return(0,s.jsxs)("div",{className:"flex items-center p-2 border border-gray-200 rounded-md shadow-sm",children:[(0,s.jsx)("div",{className:"flex-none w-[60px] h-[60px] overflow-hidden rounded-lg",children:(0,s.jsx)("a",{href:t.url,children:(0,s.jsx)("img",{className:"object-cover w-full h-full",src:t.thumbnail[0],alt:t.title})})}),(0,s.jsxs)("div",{className:"flex flex-col ml-4",children:[(0,s.jsx)("div",{className:"text-sm font-bold text-black dark:text-white",children:(0,s.jsx)("a",{href:t.url,title:t.title,children:t.title})}),(0,s.jsx)("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:t.authors.join(", ")})]})]})},a=r(8133);let i=(e,t)=>{let r=0;for(let s of e.webtoons)s.provider===t&&r++;return r},o=(e,t)=>{switch(e){case"NAVER":return{...t,webtoons:t.webtoons.filter(e=>"NAVER"===e.provider)};case"KAKAO":return{...t,webtoons:t.webtoons.filter(e=>"KAKAO"===e.provider)};case"KAKAOPAGE":return{...t,webtoons:t.webtoons.filter(e=>"KAKAO_PAGE"===e.provider)};default:return t}};var c=r(9555),d=r(9564);let x=(e,t)=>{let{setNaverWebtoonCount:r,setKakaoWebtoonCount:s,setKakaoPageWebtoonCount:n}=(0,d.m)();return(0,c.useQuery)(["getSearchWebtoonInfo",e,t],()=>(0,a.j)({keyword:e}),{select:e=>(r(i(e,"NAVER")),s(i(e,"KAKAO")),n(i(e,"KAKAO_PAGE")),o(t,e))})};var u=()=>{let{searchValue:e,searchProvider:t}=(0,d.m)(),{isLoading:r,data:a}=x(e,t);return r?(0,s.jsx)(n.Z,{}):(0,s.jsx)("div",{className:"grid grid-cols-1 gap-4 p-4 sm:grid-cols-2",children:null==a?void 0:a.webtoons.map(e=>(0,s.jsx)(l,{webtoon:e},e.id))})}},9197:function(e,t,r){"use strict";var s=r(7437);r(2265);var n=r(9564);t.default=()=>{let{searchProvider:e,setSearchProvider:t,naverWebtoonCount:r,kakaoWebtoonCount:l,kakaoPageWebtoonCount:a}=(0,n.m)(),i=[{id:"",label:"All",count:r+l+a},{id:"NAVER",label:"Naver",count:r},{id:"KAKAO",label:"KaKao",count:l},{id:"KAKAOPAGE",label:"KaKaoPage",count:a}],o=e=>{t(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"hidden md:block w-40 lg:w-52 xl:w-64 min-h-[64rem] overflow-auto rounded-lg bg-zinc-200 border border-zinc-700/10 dark:bg-zinc-700/50",children:(0,s.jsx)("div",{className:"p-4",children:(0,s.jsx)("div",{className:"flex flex-col mt-1 overflow-auto",children:i.map(t=>(0,s.jsxs)("div",{className:"bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ".concat(e===t.id?"bg-zinc-700/50":""),onClick:()=>o(t.id),children:[(0,s.jsx)("p",{className:"text-center",children:t.label}),(0,s.jsx)("p",{className:"text-sm text-center",children:t.count})]},t.id))})})}),(0,s.jsx)("section",{className:"p-4 md:hidden",children:(0,s.jsx)("div",{className:"flex items-center gap-2 dark:border-zinc-500",children:i.map(t=>(0,s.jsx)("button",{className:"px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full border border-gray-300 text-gray-400 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300 ".concat(e===t.id?"bg-black text-white dark:text-black dark:bg-white":"text-black dark:text-gray-400"),value:t.id,onClick:()=>o(t.id),children:t.label},t.id))})})]})}},8133:function(e,t,r){"use strict";r.d(t,{j:function(){return d},R:function(){return c}});var s=r(7334),n=r.n(s);let l=(e,t)=>{let r=n().stringify(t);return"".concat(e,"?").concat(r)};var a=r(3208);let i="https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons";async function o(e,t){try{let r=l(e,t);return(await a.Z.get(r)).data}catch(e){throw console.error("API call failed:",e),e}}let c=e=>o(i,e),d=e=>o(i,e)},3206:function(e,t,r){"use strict";var s=r(7437),n=r(8823);r(2265);var l=r(6393);t.Z=e=>{let{count:t=n.H.perPage}=e;return(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{id:"body",className:"grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4",children:Array.from(Array(t).keys()).map(e=>(0,s.jsx)(l.y,{baseColor:"#202020",highlightColor:"#232323",children:(0,s.jsxs)("div",{className:"flex flex-col ",children:[(0,s.jsx)(l.Z,{className:"w-[500px] h-[260px]"}),(0,s.jsx)(l.Z,{className:"w-[300px] h-[17px] mt-4"}),(0,s.jsx)(l.Z,{width:"120px",className:"h-[12px] mt-1"})]})},e))})})}},8823:function(e,t,r){"use strict";r.d(t,{H:function(){return s}});let s={page:0,perPage:24}},9564:function(e,t,r){"use strict";r.d(t,{m:function(){return l}});var s=r(2265),n=r(5532);let l=()=>{let e=(0,s.useContext)(n.k);if(!e)throw Error("useAppState must be used within Provider");return e}},5532:function(e,t,r){"use strict";r.d(t,{R:function(){return a},k:function(){return l}});var s=r(7437),n=r(2265);let l=(0,n.createContext)(null),a=e=>{let{children:t}=e,[r,a]=(0,n.useState)("NAVER"),[i,o]=(0,n.useState)("mon"),[c,d]=(0,n.useState)(""),[x,u]=(0,n.useState)("All"),[m,h]=(0,n.useState)(0),[b,f]=(0,n.useState)(0),[g,v]=(0,n.useState)(0),[p,w]=(0,n.useState)(!1),[j,k]=(0,n.useState)("week");return(0,s.jsx)(l.Provider,{value:{weekProvider:r,setWeekProvider:a,updateDay:i,setUpdateDay:o,searchValue:c,setSearchValue:d,searchProvider:x,setSearchProvider:u,naverWebtoonCount:m,setNaverWebtoonCount:h,kakaoWebtoonCount:b,setKakaoWebtoonCount:f,kakaoPageWebtoonCount:g,setKakaoPageWebtoonCount:v,darkMode:p,setDarkMode:w,currentMenu:j,setCurrentMenu:k},children:t})}}},function(e){e.O(0,[555,446,971,23,744],function(){return e(e.s=8449)}),_N_E=e.O()}]);