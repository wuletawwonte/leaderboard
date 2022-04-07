import './style.css';
import {scores, getAll} from './modules/scores.js';

const dashboard = document.getElementById('scores-table');

const loadScores = async () => {
  const { result } = await getAll();
  dashboard.innerHTML = result.map((score) => `<tr><td>${score.user}: ${score.score}</td></tr>`).join('');
};

window.onload = () => {
  loadScores();
};
