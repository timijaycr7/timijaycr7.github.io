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

- Your seven projects, four roles, GitHub profile, and email are already included.
- Add your LinkedIn URL to `socials` when available.
- Add exact employment dates to each role's `period` and confirmed responsibilities to `highlights`.
- Add verified live URLs to each project's `url` and repository URLs to `source`. Empty links are hidden.
- Project visuals are original illustrative artwork, not application screenshots. No benchmark results or clinical validation are asserted.
- `featured: true` selects a project for the Summary tab.
- The four filters match each project's `category`: `Computer Vision`, `Language AI`, or `Automation`.
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
