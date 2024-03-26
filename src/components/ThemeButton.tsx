import React, { useState } from 'react'

interface ThemeButtonProps {

}

const ThemeButton = ({}: ThemeButtonProps) => {
  // 아이콘 상태
  const [themeIcon, setThemeIcon] = useState(true);

  const toggleTheme = () => {
    setThemeIcon((prevIcon) => !prevIcon);

    // html 태그를 가지고옴
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;

    const enabledDarkMode = htmlEl.classList.contains('dark');
    if(enabledDarkMode) {
      // 다크모드인 경우(html 태그의 className에 dark가 있을때)
      // -> className에서 dark를 제거
      htmlEl.classList.remove('dark');
    } else { 
      // 다크모드가 아닌 경우, className에서 dark를 추가
      htmlEl.classList.add('dark');
    }
  }

  return (
    <button id="theme-toggle" type="button" onClick={toggleTheme} 
    className="text-gray-500 bg-gray-700  dark:text-gray-400 dark:bg-gray-100
    focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2.5">
      {themeIcon ? (
        <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
      ) : (
        <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      )}
    </button>
  )
}

export default ThemeButton;