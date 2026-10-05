# Timilehin Liberty — Portfolio

A responsive portfolio for **Timilehin Liberty, AI | Machine Learning Engineer**, built with HTML, CSS, and JavaScript. No package installation, build system, or server is required for hosting.

Website: [timijaycr7.github.io](https://timijaycr7.github.io/)

Once deployed, edit the content, commit your changes, and push to `main` to update the live site automatically.

## Preview

Open `index.html` directly in a browser, or run a local server from this directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. If Python is not on your PATH, opening the HTML file still works.

## Customize

Edit **`assets/content.js`** to change your profile, skills, projects, experience, email, and social links.

- Your three selected GitHub projects, three CV experience entries, GitHub profile, and email are already included.
- Projects: [Farmer RAG Agent](https://github.com/timijaycr7/farmer-rag-agent), [Speech-to-Text AI](https://github.com/timijaycr7/speech-to-text-ai), and [Malaria Parasite Classification & Stage Detection](https://github.com/timijaycr7/Malaria-Parasite-Classification-Stage-Detection). Descriptions combine repository review with owner-provided case-study details; each project dialog links to its source repository.
- The Farmer RAG Agent's `caseStudy` contains engineering outcomes, problem, solution, architecture, contributions, and evaluation criteria. Its provider is Groq. Engineering outcomes describe implemented capabilities; add benchmark figures only when supported by verified measurements and evaluation context.
- GitHub, WhatsApp, LinkedIn, and X (Twitter) links are configured in `socials` and appear in the contact dialog and footer.
- Update each role's `period`, `location`, and `highlights` to maintain the experience timeline. Dates and achievements are based on the supplied CV details.
- Add verified live URLs to each project's `url` and repository URLs to `source`. Empty links are hidden.
- Farmer RAG Agent uses the supplied application screenshot at `assets/farmer-rag-agent.jpeg` in its cards and detail view. Other project visuals are original illustrations. No benchmark results or clinical validation are asserted.
- Project cards appear only in the Projects tab. The Summary's “Explore my work” link opens that tab.
- Filters show all projects or match the project's `category`: `Computer Vision` or `Language AI`.
- Edit `index.html` to change the main headlines and sharing metadata. Edit `assets/styles.css` for styling.

The site includes keyboard-accessible tabs, browser Back/Forward navigation, shareable `#skills`, `#projects`, and `#experience` URLs, project filters, project detail dialogs, contact links, a copy-email button, saved theme selection, and reduced-motion support. All assets are local; no analytics or external font services are used.

## Publish to GitHub Pages

1. Sign in to [GitHub](https://github.com/new) as `timijaycr7` and create a **public** repository named **`timijaycr7.github.io`** for `https://timijaycr7.github.io/`, or `portfolio` for `https://timijaycr7.github.io/portfolio/`.
2. Put these files on the repository's `main` branch:
   - `index.html`
   - `assets/` (the entire folder)
   - `.github/workflows/pages.yml`
   - `.gitignore` and `README.md` (optional)
3. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Subsequent changes to website files on `main` deploy automatically.
5. When the action finishes, its deployment link opens your live portfolio.

The workflow copies only `index.html` and `assets/` into the Pages artifact. The existing `Project.ipynb` notebook and any preview files are not included in the deployed website. Upload only the portfolio files if the notebook should also stay out of the source repository.

For a new local repository, after creating the matching empty GitHub repository:

```sh
git init -b main
git add index.html assets .github/workflows/pages.yml .gitignore README.md
git commit -m "Create Timilehin Liberty portfolio"
git remote add origin https://github.com/timijaycr7/timijaycr7.github.io.git
git push -u origin main
```

If you chose `portfolio`, substitute that repository name in the remote URL. For an existing repository, use its normal commit and push workflow instead of initializing it again.

Relative asset paths support both account and project Pages URLs. The project uses fragment navigation, so opening a tab URL directly does not require a server rewrite.

Reference: [GitHub's guide to custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
