const URL = 'https://rickandmortyapi.com/api/character';
const fetchPage = async (page) => {
  return (await fetch(`${URL}/?page=${page}`)).json();
}

export const loadData = async () => {
  const pagesCount = await (await (await fetch(URL)).json()).info.pages;
  const promises = new Array(pagesCount).fill(null).map((_, index) => fetchPage(index + 1));
  const res = await Promise.all(promises);
  if (!res) {
    return;
  }
  return res.reduce((acc, cur) => acc.concat(cur.results), []).map((item) => (
    {
      name: item.name,
      data: {
        id: item.id,
        name: item.name,
        status: item.status,
        type: item.type,
        gender: item.gender,
        origin: item.origin
      }
    }));
}