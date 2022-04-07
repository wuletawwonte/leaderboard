
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ibRiySckROHsfVJb6fa8/scores';

const scores = [{name: "Wuletaw", score: 42}]

const getAll = async() => (await fetch(url)).json();

export {getAll, scores};