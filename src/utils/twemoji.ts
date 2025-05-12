import twemoji from '@twemoji/api';

const twemojiConfig = {
  folder: 'svg',
  ext: '.svg',
  base: 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/',
};

export const parseTwemoji = (text: string): string => {
  return twemoji.parse(text, twemojiConfig);
};

export const parseElement = (element: HTMLElement): void => {
  twemoji.parse(element, {
    folder: 'svg',
    ext: '.svg',
    base: 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/',
  });
}; 
