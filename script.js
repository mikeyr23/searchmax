"use strict";
(() => {
  const form = document.querySelector("#review-form");
  const panel = document.querySelector("#draft-panel");
  const draft = document.querySelector("#request-draft");
  const status = document.querySelector("#form-status");
  const emailLink = document.querySelector("#email-request");
  const email = String(window.SEARCHMAX_CONFIG?.contactEmail || "").trim();
  const hasEmail = /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email);
  document.querySelector("#year").textContent = new Date().getFullYear();
  if (hasEmail) {
    document.querySelector("#contact-help").textContent = `Prepare your request, then open your email app to send it to ${email}. Nothing is sent automatically.`;
    const noScript = document.querySelector("noscript");
    if (noScript) noScript.remove();
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const business = String(fields.get("business")).trim();
    draft.value = `Hi Michael,\n\nI'd like a free search visibility review.\n\nName: ${String(fields.get("name")).trim()}\nBusiness: ${business}\nWebsite: ${String(fields.get("website")).trim() || "Not provided"}\nServices, area, and goals: ${String(fields.get("goal")).trim()}\n\nPlease let me know the next step.\nThank you!`;
    panel.hidden = false;
    if (hasEmail) {
      emailLink.href = `mailto:${email}?subject=${encodeURIComponent(`Free review request: ${business}`)}&body=${encodeURIComponent(draft.value)}`;
      emailLink.hidden = false;
      status.textContent = "Your draft is ready. Open your email app and send it, or copy it below. Your request has not been sent yet.";
    } else {
      status.textContent = "Your draft is ready to copy and share with Michael. Your request has not been sent.";
    }
    draft.focus();
  });
  document.querySelector("#copy-request").addEventListener("click", async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(draft.value);
      status.textContent = "Copied. Paste this into your message to Michael. Nothing has been sent by this page.";
    } catch {
      draft.focus();
      draft.select();
      status.textContent = "Select and copy the highlighted request, then paste it into your message to Michael.";
    }
  });
})();
