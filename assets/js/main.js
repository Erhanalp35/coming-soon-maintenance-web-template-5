(() => {
  'use strict';
  document.documentElement.classList.add('v2-ready');
  const v2Style = document.createElement('link'); v2Style.rel = 'stylesheet'; v2Style.href = 'assets/css/v2.css'; document.head.append(v2Style);
  const root = document.documentElement, toggle = document.querySelector('.theme'), key = 'hardcopy-theme';
  try { root.dataset.theme = localStorage.getItem(key) || root.dataset.theme; } catch (_) {}
  const paint = () => { if (toggle) { toggle.textContent = root.dataset.theme === 'dark' ? '■ / ☀' : '☀ / ■'; toggle.setAttribute('aria-label', `Hardcopy ${root.dataset.theme} mode. Switch theme`); toggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark')); } };
  paint(); toggle?.addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; paint(); try { localStorage.setItem(key, root.dataset.theme); } catch (_) {} });
  // Change this value to your real issue release date.
  const launchDate = new Date('2026-10-01T00:00:00');
  if (Number.isNaN(launchDate.getTime())) launchDate.setTime(Date.now());
  let timerId;
  const tick = () => { const remaining = Math.max(0, launchDate.getTime() - Date.now()); const values = [Math.floor(remaining / 864e5), Math.floor(remaining / 36e5) % 24, Math.floor(remaining / 6e4) % 60, Math.floor(remaining / 1e3) % 60]; document.querySelectorAll('[data-time]').forEach((node, index) => { node.textContent = String(values[index] ?? 0).padStart(2, '0'); }); if (remaining === 0) { clearInterval(timerId); const title = document.querySelector('h1'); if (title) title.textContent = 'READY.'; } };
  tick(); timerId = setInterval(tick, 1000);
})();
