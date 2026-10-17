// Client-side validation for every form marked data-validate.
// Sending is not wired yet: the static host needs a mail handler. Until then the
// form shows its "not connected" state instead of claiming the message was sent.
export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad: HTMLElement | null = null;
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]').forEach((input) => {
        const err = form.querySelector<HTMLElement>(`#${input.id}-error`);
        const bad = input.value.trim() === '';
        input.closest('.zn-field')?.classList.toggle('zn-field-invalid', bad);
        input.setAttribute('aria-invalid', String(bad));
        const hint = input.dataset.hint;
        const ids = [hint, bad && err ? err.id : null].filter(Boolean).join(' ');
        if (ids) input.setAttribute('aria-describedby', ids); else input.removeAttribute('aria-describedby');
        if (err) err.hidden = !bad;
        if (bad && !firstBad) firstBad = input;
      });
      if (firstBad) { (firstBad as HTMLElement).focus(); return; }
      const done = form.querySelector<HTMLElement>('[data-done]');
      if (done) { done.hidden = false; done.focus(); }
    });
  });
}
