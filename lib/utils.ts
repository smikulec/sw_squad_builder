import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocalStorageItem = (key: string) => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    if (item === 'undefined') {
      return null;
    }
    return item;
  }
};

export function isNonNullable<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
