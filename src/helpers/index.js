import store from '@/store';

export class Utilities {
  static highlightSubString({ string, subString, style }) {
    const regex = new RegExp(subString, 'gi');
    return string.replace(regex, (str) => `<span class="${style}">${str}</span>`);
  }
}
