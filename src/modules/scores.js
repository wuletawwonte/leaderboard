const getAll = async (url) => (await fetch(url)).json();

const addScore = async (url, score) => (await fetch(url, score)).json();

export { getAll, addScore };