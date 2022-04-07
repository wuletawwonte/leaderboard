import './style.css';
import { scoreFromUser, loadScores } from './modules/uichange.js';
import { addScore } from './modules/scores.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RuqoTXEIzrmdy63cia1D/scores';
const refreshBtn = document.querySelector('.refresh-btn');
const addScoreForm = document.getElementById('add-score-form');

window.addEventListener('load', () => loadScores(url));
refreshBtn.addEventListener('click', () => loadScores(url));
addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScore(url, scoreFromUser());
  loadScores(url);
  addScoreForm.reset();
});