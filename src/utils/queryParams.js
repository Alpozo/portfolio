export const addQueryParam = (key, value) => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.pushState({}, "", url);
};

export const removeQueryParam = (key) => {
  const url = new URL(window.location);
  url.searchParams.delete(key);
  window.history.pushState({}, "", url);
};
