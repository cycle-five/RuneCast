// script.js — live daily leaderboard for runeca.st
const API_BASE = 'https://runecast.twkr.io';
const MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' };

export function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

export function renderLeaderboardRows(entries) {
  return entries.map((e, i) => {
    const rankCell = MEDALS[e.rank] || String(e.rank);
    const top = i === 0 ? ' top' : '';
    return `<div class="lb-row${top}">` +
      `<div class="lb-rank">${escapeHtml(rankCell)}</div>` +
      `<div class="lb-name">${escapeHtml(e.username)}</div>` +
      `<div class="lb-score">${Number(e.score)}</div>` +
    `</div>`;
  }).join('');
}

async function loadDailyLeaderboard() {
  const box = document.getElementById('daily-lb-rows');
  if (!box) return;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(`${API_BASE}/api/daily/leaderboard?limit=6`, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const entries = await res.json();
    if (!Array.isArray(entries) || entries.length === 0) throw new Error('empty');
    box.innerHTML = renderLeaderboardRows(entries);
  } catch (err) {
    // Graceful fallback — never show a broken widget.
    box.innerHTML = `<div class="lb-row lb-fallback"><div class="lb-name">Today's board fills up as people play — <a href="${API_BASE}">be the first ▸</a></div></div>`;
  }
}

// Only run in the browser (the module is also imported by the node test).
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', loadDailyLeaderboard);
}
