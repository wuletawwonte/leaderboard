import './style.css';
import scores from './modules/scores.js';

const dashboard = document.getElementById('scores-table');

const loadScores = () => {
  dashboard.innerHTML = scores.map((score) => `<tr><td>${score.name}: ${score.score}</td></tr>`).join('');
};

window.onload = () => {
  loadScores();
};