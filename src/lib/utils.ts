import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimPathname(string: string) {
  if (typeof string !== 'string') return string;
  if (string === '/') return string;
  return string.replace(/\/$/, '');
}

interface Page {
  name: string;
  title: string;
  href: string;
  inHeader: boolean;
  inFooter: boolean;
  description?: string;
  ogImage?: string | null;
  tagline?: string;
}

export function setPagesArray(pages: Record<string, Page>): Page[] {
  const pagesArray = [];
  for (const key in pages) {
    if (pages.hasOwnProperty(key)) {
      const { name, href, inHeader, inFooter } = pages[key];
      pagesArray.push({
        name,
        href,
        inHeader,
        inFooter,
      });
    }
  }
  return pagesArray;
}
