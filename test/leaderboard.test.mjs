import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderLeaderboardRows, escapeHtml } from '../script.js';

test('escapeHtml neutralizes markup', () => {
  assert.equal(escapeHtml('<img src=x onerror=alert(1)>'), '&lt;img src=x onerror=alert(1)&gt;');
});

test('renderLeaderboardRows renders medals, names, scores', () => {
  const html = renderLeaderboardRows([
    { rank: 1, user_id: '1', username: 'vowelmancer', score: 412 },
    { rank: 2, user_id: '2', username: 'QYX_', score: 388 },
    { rank: 4, user_id: '4', username: 'tilepriest', score: 361 },
  ]);
  assert.match(html, /🥇/);              // rank 1 medal
  assert.match(html, />4</);             // rank 4 shows the number
  assert.match(html, /vowelmancer/);
  assert.match(html, /412/);
  assert.ok(!/undefined/.test(html));
});

test('renderLeaderboardRows escapes usernames', () => {
  const html = renderLeaderboardRows([{ rank: 1, user_id: '1', username: '<b>x</b>', score: 5 }]);
  assert.ok(!/<b>x<\/b>/.test(html));
  assert.match(html, /&lt;b&gt;x&lt;\/b&gt;/);
});
