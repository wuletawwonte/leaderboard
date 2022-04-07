import { getAll } from './scores.js';

const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const dashboard = document.getElementById('scores-table');

const scoreFromUser = () => {
  const scoreData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userInput.value.trim(),
      score: scoreInput.value.trim(),
    }),
  };
  return scoreData;
};

const loadScores = async (url) => {
  const { result } = await getAll(url);
  dashboard.innerHTML = result.sort((a, b) => b.score - a.score).map((score) => `<tr><td>${score.user}: ${score.score}</td></tr>`).join('');
};

export { scoreFromUser, loadScores };