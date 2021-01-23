import store from '@/store';

// HIGHLIGHT SUBSTRING
// WITH CUSTOM CLASS
export const highlightSubString = ({ string, subString, style }) => {
  const regex = new RegExp(subString, 'gi');
  return string.replace(regex, (str) => `<span class="${style}">${str}</span>`);
};

// ADD DELAY TO PROMISE CALL
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
