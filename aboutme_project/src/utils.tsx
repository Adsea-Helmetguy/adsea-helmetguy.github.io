//Path is of string type, and the second string means that it will return string type!
export const getImageUrl = (path: string): string => {
  return `/Assets/${path}`;
};

/*
export const getImageUrl = (path: string): string => {
  return new URL(`./Assets/${path}`, import.meta.url).href;
};
*/
