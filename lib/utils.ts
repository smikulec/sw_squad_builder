export const getLocalStorageItem = (key: string) => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    if (item === 'undefined') {
      return null;
    }
    return item;
  }
};
