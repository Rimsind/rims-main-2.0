export const apiUrl = "https://manage.rimsind.in";

export const fetcher = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  return result;
};
