export const sliceText = (text: string) => {
  return `${text.slice(0, 35)}...`;
};

export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};
