export const trimPath = (string) => {
  if (typeof string !== 'string') return string;
  if (string === '/') return string;
  return string.replace(/\/$/, '');
};
