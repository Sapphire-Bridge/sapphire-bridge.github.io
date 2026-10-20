(() => {
  'use strict';

  const section = document.getElementById('setup');
  if (!section) return;
  const status = document.getElementById('copy-status');

  function chooseGuide(key) {
    const target = document.getElementById(`guide-${key}`);
    if (!target) return;
    section.querySelectorAll('[data-platform]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.platform === key));
    });
    section.querySelectorAll('.platform-guide').forEach((guide) => {
      guide.hidden = guide !== target;
    });
  }

  // The interview runs in the visitor's own chat; this page makes no AI requests.
  async function copyPrompt(button) {
    const field = document.getElementById(button.dataset.copy);
    status.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(field.value);
      button.textContent = 'Kopiert ✓';
      status.textContent = `${button.dataset.copyName} kopiert. Fügen Sie den Text in einen neuen KI-Chat ein.`;
    } catch {
      const details = field.closest('details');
      if (details) details.open = true;
      field.focus();
      field.select();
      button.textContent = 'Text zum Kopieren markiert';
      status.textContent = 'Der Text ist markiert. Kopieren Sie ihn mit ⌘C oder Strg+C, auf dem Handy über das Auswahlmenü.';
    }
  }

  section.querySelectorAll('[data-copy]').forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => copyPrompt(button));
  });
  section.querySelectorAll('[data-platform]').forEach((button) => {
    button.setAttribute('aria-controls', `guide-${button.dataset.platform}`);
    button.addEventListener('click', () => chooseGuide(button.dataset.platform));
  });
  section.querySelector('.platform-choices').hidden = false;
  chooseGuide('chatgpt');

  // A configured recipient only enables a local mail draft, never direct sending.
  const form = document.getElementById('contact-form');
  if (!form) return;
  const recipient = form.dataset.recipient || '';
  const configured = /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(recipient);
  const submit = document.getElementById('contact-submit');
  const contactStatus = document.getElementById('contact-status');
  submit.disabled = !configured;
  if (configured) {
    document.getElementById('contact-help').textContent =
      `Öffnet einen E-Mail-Entwurf an ${recipient}. Sie senden ihn selbst ab. Diese Seite speichert Ihre Angaben nicht.`;
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!configured || !form.reportValidity()) return;
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    if (!name) {
      contactStatus.textContent = 'Bitte geben Sie Ihren Namen ein.';
      document.getElementById('contact-name').focus();
      return;
    }
    const subject = 'Interesse an einem Gespräch über mein KI-Setup';
    const body = `Hallo Felix,\n\nich habe Interesse an einem Gespräch über mein KI-Setup.\n\nName: ${name}\nE-Mail: ${email}${message ? `\n\nMein Anliegen:\n${message}` : ''}`;
    contactStatus.textContent = 'Der Entwurf wird an Ihr Mailprogramm übergeben. Es wurde noch nichts versendet.';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
