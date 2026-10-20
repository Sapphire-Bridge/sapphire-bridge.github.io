// Display-only switch between two archived profile summaries; no inference or API calls.
const buttons = [...document.querySelectorAll('[data-recipient]')];
buttons.forEach(button => button.addEventListener('click', () => {
  const recipient = button.dataset.recipient;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('[data-profile]').forEach(panel => { panel.hidden = panel.dataset.profile !== recipient; });
}));
