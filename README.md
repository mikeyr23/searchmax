# SearchMax Studio website

A self-contained, responsive website for Michael's Google, Maps, and AI search visibility service. No build command, dependencies, analytics, or paid tools are required.

## Before publishing

1. The contact inbox is configured as `support.searchmax@searchmax.com` in `site-config.js` and the direct email links in `index.html`. Confirm you can receive messages there. If you change it, update both files. The form prepares a draft and opens the visitor's email app; it does not submit to a server. The visitor must send the email. Without an inbox configured, the site can only prepare a request to copy and share separately.
2. Review the pilot offer and founder copy. SearchMax Studio is a proposed name, not a registered business or verified available domain. A preliminary exact-name web search is not trademark clearance.
3. Review the privacy text if you add analytics, a form service, or other integrations.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `searchmax-studio`.
2. Upload the **contents of this folder** to the repository root. `index.html` must be at the top level, with `styles.css`, `script.js`, `site-config.js`, `.nojekyll`, and the `assets` folder alongside it. Do not upload the private AI-SEO vault.
3. Commit the files to `main`.
4. Open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/(root)`. Save.
5. After deployment completes, open the URL shown on that page, usually `https://YOUR-USERNAME.github.io/searchmax-studio/`.
6. Check the page on your phone. Prepare a sample review request, open your email app, confirm the recipient and text, and send a test to your inbox yourself.

[GitHub's publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Preview locally

Open `index.html` directly in your browser. Clipboard access may be unavailable on a local file; the copy button will select the text for manual copying. For an HTTP preview, run `node ../preview-server.cjs` from this folder if using the supplied workspace helper, then visit `http://127.0.0.1:4173/`. The helper is not needed for GitHub Pages.

## Files

- `index.html`: All site content, metadata, accessible form, FAQs, and privacy details.
- `styles.css`: Responsive layout, colors, typography, and illustration.
- `script.js`: Request drafting, copying, and email links. No data is stored.
- `site-config.js`: Your public contact email.
- `assets/favicon.svg`: Original arrow brand mark.
- `.nojekyll`: Publishes this as a plain static site.

All asset paths are relative, so the site works under a GitHub repository subpath. There are no stock photos, fabricated testimonials, invented customer results, or third-party font requests. The sample review is labeled as illustrative.

## Content basis

The private vault's Welcome, Pilot Plan, Google and AI SEO Fundamentals, and Jared Rhodenizer's marketing playbooks informed the copy. The website uses original wording and artwork. Its offer is a free focused review followed by a scoped, paid 90-day pilot. Published claims about Google's AI search foundation link to [Google's official guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## Optional later additions

Add a custom domain after securing one. Add canonical and social-sharing URLs once the final public URL is known. A direct-submit form requires a separate form backend; never place private API keys in this repository. Publish case studies only after real results and client permission exist.
