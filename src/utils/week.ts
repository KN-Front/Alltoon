const week = [
  { key: 'mon', value: '월' },
  { key: 'tue', value: '화' },
  { key: 'wed', value: '수' },
  { key: 'thu', value: '목' },
  { key: 'fri', value: '금' },
  { key: 'sat', value: '토' },
  { key: 'sun', value: '일' },
  { key: 'finished', value: '완결' },
  { key: 'naverDaily', value: 'Daily' },
];

export const findWeekValueByKey = (key: string) => {
  const findKey = week.find((day) => day.key === key);

  return findKey === undefined ? '' : findKey;
};

export const findWeekKeyByValue = (value: string) => {
  return week.find((day) => day.value === value);
};

export const getUpdateWeekArrayToString = (updateWeek: Array<string>) => {
  return updateWeek
    .map((updateDay) => {
      return week.find((week) => week.key === updateDay)?.value;
    })
    .join(',');
};

export const getCurrentDayOfWeek = (lang: string): string => {
  const days_kor = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const days_eng = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const today = new Date().getDay();
  if (lang === 'kor') {
    return days_kor[today];
  } else {
    return days_eng[today];
  }
};
