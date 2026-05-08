/* ============================================================
   portfolio.js — single-source-of-truth renderer.
   Loads content.json and renders the page based on data-page.
   ============================================================ */

(function () {
  // ---------- helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const escape = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  // {curly} segments become accent-colored <em> tags. Newlines preserved via CSS.
  const richHeading = (s) =>
    escape(s).replace(/\{([^}]+)\}/g, '<em>$1</em>');

  const statusBadge = (status) => {
    if (!status) return "";
    const map = {
      live: '<span class="badge"><span class="dot" style="background: var(--success)"></span> Live</span>',
      acquired: '<span class="badge badge-accent">Acquired</span>',
      "open-source": '<span class="badge badge-accent">Open source</span>',
      sunset: '<span class="badge">Sunset</span>'
    };
    return map[status] || `<span class="badge">${escape(status)}</span>`;
  };

  // ---------- theme ----------
  function bindTheme() {
    const btn = $("#themeBtn");
    if (!btn) return;
    const root = document.documentElement;
    try {
      const saved = localStorage.getItem("ds-theme");
      if (saved) root.setAttribute("data-theme", saved);
    } catch {}
    btn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ds-theme", next); } catch {}
    });
  }

  // ---------- header / footer (shared chrome) ----------
  function renderHeader(data, page) {
    const el = $("#site-header");
    if (!el) return;
    const navItems = data.nav.map(n => {
      const active = n.href === page + ".html" || (page === "index" && n.href === "index.html") ? "active" : "";
      return `<a href="${escape(n.href)}" class="${active}">${escape(n.label)}</a>`;
    }).join("");
    const logoMark = data.profile.logo
      ? `<span class="square logo-img"><img src="${escape(data.profile.logo)}" alt="${escape(data.profile.name)}" /></span>`
      : `<span class="square">${escape(data.profile.initial)}</span>`;
    el.innerHTML = `
      <div class="site-header-inner">
        <a href="index.html" class="logo">
          ${logoMark}
          <span>${escape(data.profile.name)}</span>
        </a>
        <nav class="primary">${navItems}</nav>
        <div class="header-cta">
          <button class="theme-btn" id="themeBtn" title="Toggle theme">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <a href="contact.html" class="btn btn-accent btn-small">Available <span class="arrow">→</span></a>
        </div>
      </div>`;
    bindTheme();
  }

  function renderFooter(data) {
    const el = $("#site-footer");
    if (!el) return;
    const links = data.footer.links.map(l =>
      `<a href="${escape(l.href)}">${escape(l.label)}</a>`).join("");
    el.innerHTML = `
      <span>${escape(data.footer.credit)}</span>
      <nav>${links}</nav>`;
  }

  // ---------- pages ----------
  const pages = {
    index(data) {
      const stats = data.stats.map(s =>
        `<div><dt>${escape(s.label)}</dt><dd>${escape(s.value)}${s.suffix ? `<small>${escape(s.suffix)}</small>` : ""}</dd></div>`
      ).join("");
      const featured = data.projects.slice(0, 3).map((p, i) => projectRow(p, i)).join("");
      const writing = data.writing.slice(0, 3).map(writingCard).join("");
      $("#page").innerHTML = `
        <section class="hero">
          <div class="hero-meta">
            <span class="pulse">${escape(data.profile.available)}</span>
            <span>${escape(data.profile.location)}</span>
            <span>${escape(data.profile.siteVersion)}</span>
            <span>${escape(data.profile.lastShipped)}</span>
          </div>
          <h1>${richHeading(data.profile.tagline)}</h1>
          <p class="hero-sub">${escape(data.profile.intro)}</p>
          <div class="hero-cta">
            <a href="contact.html" class="btn btn-accent">Start a project <span class="arrow">→</span></a>
            <a href="work.html" class="btn btn-ghost">See selected work</a>
          </div>
          <dl class="hero-stats">${stats}</dl>
        </section>

        <section class="section">
          <div class="section-head">
            <div class="section-num"><b>01</b> &nbsp;/&nbsp; FEATURED WORK</div>
            <h2 class="section-title">Things I've shipped<br/>that are still running.</h2>
          </div>
          <div class="work-list">${featured}</div>
          <div style="margin-top: var(--s-6);">
            <a href="work.html" class="btn btn-ghost">All projects <span class="arrow">→</span></a>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <div class="section-num"><b>02</b> &nbsp;/&nbsp; LATEST WRITING</div>
            <h2 class="section-title">Notes on building.</h2>
          </div>
          <div class="writing-grid">${writing}</div>
        </section>
      `;
    },

    work(data) {
      const rows = data.projects.map((p, i) => projectRow(p, i)).join("");
      $("#page").innerHTML = `
        <section class="page-head">
          <div class="eyebrow">Selected work · ${data.projects.length} projects</div>
          <h1>Things I've<br/>shipped.</h1>
          <p class="lede">Most are still running. A couple are open source. One was acquired. Click any of them to read the longer story.</p>
        </section>
        <section class="section" style="border-top: 0; padding-top: 0;">
          <div class="work-list">${rows}</div>
        </section>
      `;
    },

    about(data) {
      const skills = data.skills.map(s =>
        `<div class="skill"><span>${escape(s.name)}</span><span class="bar"><span style="width: ${Number(s.level)}%"></span></span></div>`
      ).join("");
      const principles = data.about.principles.map(p =>
        `<div class="principle"><div class="n">${escape(p.n)}</div><h4>${escape(p.title)}</h4><p>${escape(p.body)}</p></div>`
      ).join("");
      const body = data.about.body.map(p => `<p class="muted">${escape(p)}</p>`).join("");
      $("#page").innerHTML = `
        <section class="page-head">
          <div class="eyebrow">About</div>
          <h1>Generalist who<br/>writes the schema first.</h1>
        </section>
        <section class="section" style="border-top: 0; padding-top: 0;">
          <div class="about-grid">
            <div>
              <p>${escape(data.about.intro)}</p>
              ${body}
            </div>
            <div class="about-side">
              <h4>Stack — current</h4>
              <div class="skill-list">${skills}</div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="section-head">
            <div class="section-num"><b>—</b> &nbsp;/&nbsp; PRINCIPLES</div>
            <h2 class="section-title">How I work.</h2>
          </div>
          <div class="principles">${principles}</div>
        </section>
        <section class="section">
          <div class="section-head">
            <div class="section-num"><b>—</b> &nbsp;/&nbsp; EXPERIENCE</div>
            <h2 class="section-title">A list, well set.</h2>
          </div>
          <div class="exp-list">
            ${data.experience.map(experienceRow).join("")}
          </div>
        </section>
      `;
    },

    writing(data) {
      const cards = data.writing.map(writingCard).join("");
      $("#page").innerHTML = `
        <section class="page-head">
          <div class="eyebrow">Writing · ${data.writing.length} posts</div>
          <h1>Notes on<br/>building.</h1>
          <p class="lede">Working notes on software, infrastructure, and the occasional non-software thing. New posts on irregular Mondays.</p>
        </section>
        <section class="section" style="border-top: 0; padding-top: 0;">
          <div class="writing-grid">${cards}</div>
        </section>
      `;
    },

    contact(data) {
      const channels = data.contact.channels.map(c =>
        `<div><dt>${escape(c.label)}</dt><dd><a href="${escape(c.href)}">${escape(c.value)}</a></dd></div>`
      ).join("");
      $("#page").innerHTML = `
        <section class="page-head">
          <div class="eyebrow">Contact · ${data.profile.available}</div>
          <h1>Let's build<br/>something good.</h1>
        </section>
        <section class="section" style="border-top: 0; padding-top: 0;">
          <div class="contact-block">
            <h2>${richHeading(data.contact.headline)}</h2>
            <p>${escape(data.contact.body)}</p>
            <a href="mailto:${escape(data.profile.email)}" class="btn btn-accent">${escape(data.profile.email)} <span class="arrow">→</span></a>
            <dl class="meta">${channels}</dl>
          </div>
        </section>
      `;
    },

    project(data) {
      const slug = new URLSearchParams(location.search).get("slug");
      const p = data.projects.find(x => x.slug === slug);
      if (!p) {
        $("#page").innerHTML = `
          <section class="page-head">
            <div class="eyebrow">404</div>
            <h1>No such project.</h1>
            <p class="lede">The project you're looking for doesn't exist (or has been renamed).</p>
            <div style="margin-top: var(--s-5)"><a href="work.html" class="btn btn-ghost">← All projects</a></div>
          </section>`;
        return;
      }
      const stack = p.stack.map(s => `<span class="badge">${escape(s)}</span>`).join("");
      const links = (p.links || []).map(l =>
        `<a class="btn btn-ghost btn-small" href="${escape(l.href)}">${escape(l.label)} <span class="arrow">→</span></a>`).join("");
      const body = (p.body || "").split("\n\n").map(par => `<p>${escape(par)}</p>`).join("");
      $("#page").innerHTML = `
        <section class="project-detail">
          <a href="work.html" class="project-back">← All projects</a>
          <div style="margin-bottom: var(--s-3); display: flex; gap: var(--s-2); flex-wrap: wrap;">${statusBadge(p.status)}</div>
          <h1>${escape(p.name)}</h1>
          <p class="tagline">${escape(p.tagline || p.summary)}</p>
          <dl class="project-meta-strip">
            <div><dt>Year</dt><dd>${escape(p.year)}</dd></div>
            <div><dt>Status</dt><dd>${escape(p.status || "—")}</dd></div>
            <div><dt>Stack</dt><dd>${escape(p.stack.join(", "))}</dd></div>
            <div><dt>Role</dt><dd>Design + engineering</dd></div>
          </dl>
          <div class="project-body">${body}</div>
          <div style="margin-top: var(--s-6); display: flex; gap: var(--s-3); flex-wrap: wrap;">${links}</div>
        </section>
      `;
    }
  };

  // ---------- shared partials ----------
  function projectRow(p, i) {
    const idx = String(i + 1).padStart(2, "0");
    const stack = p.stack.map(s => `<span class="badge">${escape(s)}</span>`).join("");
    return `
      <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="work-row">
        <span class="num">// ${idx}</span>
        <div class="body">
          <h3>${escape(p.name)}</h3>
          <p>${escape(p.summary)}</p>
          <div class="stack">${stack}${statusBadge(p.status)}</div>
        </div>
        <span class="when">${escape(p.year)}</span>
        <span class="arrow-cell">→</span>
      </a>`;
  }
  function experienceRow(e) {
    return `
      <div class="exp-row">
        <span class="when">${escape(e.when)}</span>
        <div class="what"><h4>${escape(e.role)}</h4><p>${escape(e.note)}</p></div>
        <span class="where">${escape(e.where)}</span>
      </div>`;
  }
  function writingCard(w) {
    return `
      <a href="#" class="writing-card" data-slug="${escape(w.slug)}">
        <div class="meta"><span>${escape(w.date)}</span><span>${escape(w.readTime)}</span></div>
        <h4>${escape(w.title)}</h4>
        <p>${escape(w.excerpt)}</p>
      </a>`;
  }

  // ---------- bootstrap ----------
  async function loadContent() {
    // Fetch first; if file:// blocks fetch, fall back to embedded JSON in <script id="content-fallback">
    try {
      const res = await fetch("content.json", { cache: "no-cache" });
      if (res.ok) return await res.json();
    } catch (e) { /* fall through */ }
    const inline = document.getElementById("content-fallback");
    if (inline) return JSON.parse(inline.textContent);
    throw new Error("Could not load content.json");
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const page = (document.body.dataset.page || "index");
    let data;
    try {
      data = await loadContent();
    } catch (e) {
      $("#page").innerHTML = `<section class="page-head"><div class="eyebrow">Error</div><h1>Couldn't load content.</h1><p class="lede">${escape(e.message)}. If you opened this file directly, run a local server (e.g. <code>python3 -m http.server</code>) or use the inline fallback.</p></section>`;
      return;
    }
    document.title = `${data.profile.name} — ${pageTitle(page, data)}`;
    renderHeader(data, page);
    renderFooter(data);
    if (pages[page]) pages[page](data);
  });

  function pageTitle(page, data) {
    const map = {
      index: data.profile.role,
      work: "Work",
      about: "About",
      writing: "Writing",
      contact: "Contact",
      project: "Project"
    };
    return map[page] || data.profile.role;
  }
})();
