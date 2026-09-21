(() => {
  "use strict";

  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#icon-${escapeHTML(name)}"/></svg>`;
  const tags = (items = []) => items.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("");
  const safeURL = (value) => {
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  };
  const externalLink = (url, label, classes = "text-link") => {
    const href = safeURL(url);
    return href ? `<a class="${classes}" href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ${icon("up-right")}<span class="sr-only"> (opens in a new tab)</span></a>` : "";
  };

  $$('[data-content]').forEach((element) => {
    const value = data[element.dataset.content];
    if (typeof value === "string") element.textContent = value;
  });
  document.title = `${data.name} — ${data.role}`;
  $("#current-year").textContent = new Date().getFullYear();
  $("#project-count").textContent = String(data.projects.length).padStart(2, "0");
  $(".project-index").textContent = `${String(data.projects.length).padStart(2, "0")} PROJECTS / MANY POSSIBILITIES`;

  // Theme storage is optional, so private browsing and local files still work.
  let storedTheme;
  try { storedTheme = localStorage.getItem("portfolio-theme"); } catch { /* Storage unavailable. */ }
  const colorPreference = matchMedia("(prefers-color-scheme: dark)");
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    $(".theme-toggle").setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    $(".theme-toggle").innerHTML = icon(theme === "dark" ? "sun" : "moon");
    $('meta[name="theme-color"]').content = theme === "dark" ? "#142019" : "#f7f8f2";
  };
  setTheme(["light", "dark"].includes(storedTheme) ? storedTheme : colorPreference.matches ? "dark" : "light");
  $(".theme-toggle").addEventListener("click", () => {
    storedTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(storedTheme);
    try { localStorage.setItem("portfolio-theme", storedTheme); } catch { /* Storage unavailable. */ }
  });
  colorPreference.addEventListener("change", (event) => {
    if (!storedTheme) setTheme(event.matches ? "dark" : "light");
  });

  // Native tab semantics, keyboard navigation, and shareable fragment URLs.
  const tabButtons = $$("[data-tab]");
  const tabNames = tabButtons.map((button) => button.dataset.tab);
  function activateTab(name, { focus = false, scroll = false } = {}) {
    if (!tabNames.includes(name)) name = "summary";
    tabButtons.forEach((button) => {
      const active = button.dataset.tab === name;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
      $(`#${button.dataset.tab}`).hidden = !active;
      if (active && focus) button.focus({ preventScroll: true });
    });
    if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
  }
  function navigate(name, options = {}) {
    if (!tabNames.includes(name)) return;
    if (location.hash !== `#${name}`) {
      try { history.pushState(null, "", `#${name}`); }
      catch { location.hash = name; }
    }
    activateTab(name, options);
  }
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => navigate(button.dataset.tab, { scroll: true }));
    button.addEventListener("keydown", (event) => {
      let nextIndex;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabButtons.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabButtons.length - 1;
      if (nextIndex !== undefined) {
        event.preventDefault();
        navigate(tabButtons[nextIndex].dataset.tab, { focus: true });
      }
    });
  });
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const name = link.getAttribute("href").slice(1);
    if (!tabNames.includes(name)) return;
    event.preventDefault();
    navigate(name, { scroll: true });
    $(`#${name}`).focus({ preventScroll: true });
  });
  window.addEventListener("hashchange", () => activateTab(location.hash.slice(1), { scroll: true }));
  window.addEventListener("popstate", () => activateTab(location.hash.slice(1), { scroll: true }));
  activateTab(location.hash.slice(1));

  // Lightweight original illustrations, rendered locally without image services.
  function artwork(project, number, dialog = false) {
    let visual = "";
    switch (project.visual) {
      case "malaria": {
        const cells = [[48,77,21],[104,44,18],[159,91,26],[218,52,20],[285,85,24],[347,48,20],[409,99,29],[470,55,18],[64,158,28],[126,207,22],[214,163,30],[294,212,26],[360,162,22],[444,205,27],[44,259,22],[208,263,18],[377,260,22]];
        visual = `<svg class="cell-field" viewBox="0 0 510 290" fill="none">${cells.map(([x,y,r], i) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="#c8afd8" fill-opacity=".45" stroke="#a280b7" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r*.7}" stroke="#d8c4e7" stroke-width="5"/>${i % 3 === 0 ? `<path d="M${x-5} ${y+3}q-6-12 5-12t2 15" stroke="#765491" stroke-width="4" stroke-linecap="round"/>` : ""}</g>`).join("")}<rect x="121" y="53" width="77" height="77" rx="3" stroke="#527349" stroke-width="1.5" stroke-dasharray="5 3"/><rect x="173" y="123" width="83" height="83" rx="3" stroke="#527349" stroke-width="1.5"/><path d="M173 135v-12h12m59 0h12v12m0 59v12h-12m-59 0h-12v-12" stroke="#527349" stroke-width="3"/></svg><span class="model-label">VISION IN FOCUS</span><span class="model-pill"><span class="status-dot"></span>Image classification + detection</span>`;
        break;
      }
      case "speech": {
        const heights = [10,17,29,20,42,62,34,78,52,96,72,46,87,112,76,53,90,121,95,68,45,79,104,70,41,83,113,92,62,38,55,77,45,28,50,68,41,23,33,17,10];
        visual = `<span class="speech-title">Every voice.<br/><em>Into words.</em></span><span class="waveform">${heights.map((height, index) => `<i style="--bar-height:${height}px;--bar-delay:${index * 37}ms"></i>`).join("")}</span><span class="speech-bottom"><span class="audio-symbol">↳</span> AUDIO → TRANSCRIPT <span>Faster-Whisper</span></span>`;
        break;
      }
      case "fraud":
        visual = `<span class="fusion-card fusion-text"><span class="mini-label">TEXT INPUT</span><i></i><i></i><i></i><i></i><span class="fusion-glyph">Aa</span></span><span class="fusion-link">+</span><span class="fusion-card fusion-image"><span class="mini-label">IMAGE INPUT</span><span class="mini-mountains"></span></span><span class="fusion-result"><span class="status-dot"></span>CONNECTED INTELLIGENCE</span>`;
        break;
      case "translation":
        visual = `<span class="language-card language-original"><span class="mini-label">LANGUAGE IN</span><span class="language-glyph">Aa</span><span class="language-line"></span></span><span class="translation-arrow">↗</span><span class="language-card language-translated"><span class="mini-label">LANGUAGE OUT</span><span class="language-glyph">文</span><span class="language-line"></span></span><span class="translation-caption">DIFFERENT WORDS. SHARED MEANING.</span>`;
        break;
      case "ocr":
        visual = `<span class="id-document"><span class="mini-label">DOCUMENT → DATA</span><span class="id-avatar"></span><span class="id-lines"><i></i><i></i><i></i></span><span class="id-scan"></span></span><span class="data-extract"><code>{<br/>&nbsp; <span>"name"</span>: "...",<br/>&nbsp; <span>"id"</span>: "..."<br/>}</code></span>`;
        break;
      case "etl":
        visual = `<span class="pipeline-heading">A little less manual.<br/><em>A lot more possible.</em></span><span class="pipeline-flow"><span>${icon("layers")}<b>EXTRACT</b></span><i>→</i><span>${icon("code")}<b>TRANSFORM</b></span><i>→</i><span>${icon("spark")}<b>LOAD</b></span></span><span class="pipeline-caption">PYTHON / BEAUTIFULSOUP / PANDAS</span>`;
        break;
      case "reporting":
        visual = `<span class="workflow-card workflow-one"><span class="workflow-icon">✓</span><span>Report submitted<small>Microsoft Forms</small></span><i>01</i></span><span class="workflow-connector"></span><span class="workflow-card workflow-two"><span class="workflow-icon">↗</span><span>Record & remind<small>SharePoint + Power Automate</small></span><i>02</i></span>`;
        break;
      default:
        visual = `<span class="fallback-art">${icon("code")}</span>`;
    }
    return `<span class="project-art preview-${escapeHTML(project.visual)}${dialog ? " dialog-visual" : ""}" aria-hidden="true"><span class="art-project-label">${escapeHTML(project.type.toUpperCase())}</span>${visual}<span class="project-number">${String(number).padStart(2, "0")} / PROJECT EXPLORATION</span>${dialog ? "" : `<span class="project-arrow">${icon("up-right")}</span>`}</span>`;
  }

  function projectCard(project) {
    const number = data.projects.indexOf(project) + 1;
    return `<article class="project-card"><button type="button" class="project-open" data-project="${escapeHTML(project.id)}" aria-label="View project: ${escapeHTML(project.name)}">${artwork(project, number)}<span class="project-meta"><span><span class="project-name">${escapeHTML(project.name)}</span><span class="project-subtitle">${escapeHTML(project.subtitle)}</span></span><span class="project-type">${escapeHTML(project.type)}</span></span></button></article>`;
  }
  $("#featured-projects").innerHTML = data.projects.filter((project) => project.featured).map(projectCard).join("");
  const renderProjects = (filter = "All") => {
    const projects = data.projects.filter((project) => filter === "All" || project.category === filter);
    $("#all-projects").innerHTML = projects.length ? projects.map(projectCard).join("") : '<p class="empty-state">More projects are on the way.</p>';
    $("#filter-status").textContent = `${projects.length} ${projects.length === 1 ? "project" : "projects"} shown${filter === "All" ? "" : ` in ${filter}`}.`;
  };
  renderProjects();
  $$("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    $$("[data-filter]").forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  }));

  $("#skills-grid").innerHTML = data.skills.map((skill) => `<article class="skill-card"><div class="skill-card-top"><span class="skill-icon">${icon(skill.icon)}</span><span class="skill-card-number">/ ${escapeHTML(skill.number)}</span></div><h2>${escapeHTML(skill.title)}</h2><p>${escapeHTML(skill.subtitle)}</p><div class="tag-list">${tags(skill.tags)}</div><div class="skill-note">${escapeHTML(skill.note)}</div></article>`).join("");
  $("#experience-list").innerHTML = data.experience.map((job) => `<article class="experience-item${job.current ? " current" : ""}"><div class="experience-topline"><span>${escapeHTML(job.type)}${job.period ? ` / ${escapeHTML(job.period)}` : ""}</span>${job.current ? '<span class="experience-current">CURRENTLY</span>' : ""}</div><h3>${escapeHTML(job.role)}</h3>${job.company ? `<p class="experience-company">${escapeHTML(job.company)}</p>` : ""}<p class="experience-description">${escapeHTML(job.description)}</p>${job.highlights?.length ? `<ul>${job.highlights.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>` : ""}<div class="tag-list">${tags(job.tags)}</div></article>`).join("");

  // Native dialogs provide Escape handling, focus trapping, and focus restoration.
  function openDialog(dialog) {
    dialog.showModal();
    document.body.style.overflow = "hidden";
    dialog.scrollTop = 0;
  }
  $$("dialog").forEach((dialog) => {
    $("[data-close-dialog]", dialog).addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.style.overflow = $("dialog[open]") ? "hidden" : "";
    });
  });
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project]");
    if (!trigger) return;
    const project = data.projects.find((item) => item.id === trigger.dataset.project);
    if (!project) return;
    const links = externalLink(project.url, "View live project", "button button-dark") + externalLink(project.source, "View source", "button button-outline");
    $("#project-dialog-content").innerHTML = `${artwork(project, data.projects.indexOf(project) + 1, true)}<div class="dialog-content"><p class="eyebrow">${escapeHTML(project.type)}${project.year ? ` / ${escapeHTML(project.year)}` : ""}</p><h2 id="dialog-title">${escapeHTML(project.name)}</h2><p>${escapeHTML(project.description)}</p><div class="tag-list">${tags(project.tags)}</div>${[["The challenge", project.challenge], ["The approach", project.approach], ["Focus areas", project.focus]].filter(([, text]) => text).map(([title, text]) => `<section class="case-section"><h3>${title}</h3><p>${escapeHTML(text)}</p></section>`).join("")}${links ? `<div class="dialog-actions">${links}</div>` : ""}</div>`;
    openDialog($("#project-dialog"));
  });

  const validEmail = typeof data.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && !/[\r\n]/.test(data.email);
  const mailto = validEmail ? `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent("Let’s build something — portfolio inquiry")}` : "";
  $("#social-links").innerHTML = (data.socials || []).map((social) => externalLink(social.url, social.label, "")).join("") + (validEmail ? `<a href="${escapeHTML(mailto)}">Email ${icon("up-right")}</a>` : "");
  $("#contact-description").textContent = validEmail ? "Have an AI challenge, a project idea, or an opportunity to collaborate? I’d love to hear about it." : "Connect with me using the links below.";
  $("#contact-detail").innerHTML = validEmail ? `<a href="${escapeHTML(mailto)}">${escapeHTML(data.email)}</a>` : "";
  $("#contact-actions").innerHTML = (validEmail ? `<a class="button button-dark" href="${escapeHTML(mailto)}">Send an email ${icon("mail")}</a><button type="button" class="button button-outline" id="copy-email">Copy email ${icon("copy")}</button>` : "") + (data.socials || []).map((social) => externalLink(social.url, social.label, "button button-outline")).join("");
  $$("[data-contact]").forEach((button) => button.addEventListener("click", () => {
    $("#copy-status").textContent = "";
    openDialog($("#contact-dialog"));
  }));
  $("#copy-email")?.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(data.email);
      $("#copy-status").textContent = "Email copied. Talk soon!";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents($("#contact-detail"));
      selection.removeAllRanges();
      selection.addRange(range);
      $("#copy-status").textContent = "Email selected. Use your device’s copy command to copy it.";
    }
  });
})();
