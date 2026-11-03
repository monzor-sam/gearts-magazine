const viewerLink = (page) => `viewer.html#p=${page}`;

const ph = (src, label = "", cls = "") =>
    `<div class="ph ${cls}">${src ? `<img src="${src}" alt="${label}">` : label}</div>`;

// Shared header + footer: edit the nav in ONE place
(function () {
    const here = location.pathname.split("/").pop() || "index.html";

    const links = [
        ["index.html", "Home"],
        ["magazine.html", "Magazine"],
        ["contributors.html", "Contributors"],
        ["references.html", "References"]
    ];

    const nav = links
        .map(([h, t]) => `<a href="${h}" ${h === here ? 'aria-current="page"' : ""}>${t}</a>`)
        .join("");

    const header = document.getElementById("site-header");

    if (header) {
        header.innerHTML = `
            <div class="site-header">
                <div class="wrap">
                    <a class="brand" href="index.html">${MAGAZINE.title}</a>
                    <nav class="nav">
                        ${nav}
                        <a class="btn" href="viewer.html">Read now</a>
                    </nav>
                </div>
            </div>
        `;
    }

    const footer = document.getElementById("site-footer");

    if (footer) {
        footer.innerHTML = `
            <div class="site-footer">
                <div class="wrap">
                    <div>
                        <strong>${MAGAZINE.title}</strong><br>
                        ${MAGAZINE.course} · Batch ${MAGAZINE.year}<br>
                        <i>All rights reserved.</i>
                    </div> 
                </div>
            </div>
        `;
    }

    document.querySelectorAll("[data-title]").forEach(
        (el) => el.textContent = MAGAZINE.title
    );
})();

// Magazine page: table of contents
const tocEl = document.getElementById("toc");

if (tocEl) {
    const pad = (n) => String(n).padStart(2, "0");

    tocEl.innerHTML = SECTIONS.map((s) => {
        const pg = s.start === s.end
            ? pad(s.start)
            : `${pad(s.start)}–${pad(s.end)}`;

        return `
            <a href="${viewerLink(s.start)}">
                ${ph("")}
                <strong>${s.title}</strong>
                <span class="dots"></span>
                <span>${pg}</span>
            </a>
        `;
    }).join("");
}

// Contributors page: cards, filter, search
const grid = document.getElementById("people");

if (grid) {
    const filterBar = document.getElementById("filters");
    const search = document.getElementById("search");

    let active = "all";

    const filters = [
        ["all", "All"],
        ["intro", "Intro & Contents"],
        ["history", "Art Through History"],
        ["contemporary", "Contemporary"],
        ["thenandnow", "Then & Now"],
        ["myart", "My Art, My Time"],
        ["reflection", "Reflection"]
    ];

    filterBar.innerHTML = filters
        .map(([id, t]) => `
            <button class="chip ${id === "all" ? "active" : ""}" data-f="${id}">
                ${t}
            </button>
        `)
        .join("");

    const render = () => {
        const q = search.value.trim().toLowerCase();

        grid.innerHTML = CONTRIBUTORS
            .filter((c) =>
                c.name.toLowerCase().includes(q) &&
                (active === "all" || c.pages.some((p) => p.section === active))
            )
            .map((c) => `
                <article class="card person">
                    ${ph(c.photo, "photo")}
                    <strong>${c.name}</strong>
                    <div class="label">${c.role}</div>
                    <div class="chips">
                        ${c.pages.map((p) => `
                            <a class="chip" href="${viewerLink(p.page)}">p. ${p.page}</a>
                        `).join("")}
                    </div>
                </article>
            `)
            .join("") || "<p>No students found.</p>";
    };

    filterBar.addEventListener("click", (e) => {
        if (!e.target.dataset.f) return;

        active = e.target.dataset.f;

        filterBar.querySelectorAll(".chip").forEach((b) =>
            b.classList.toggle("active", b === e.target)
        );

        render();
    });

    search.addEventListener("input", render);

    render();
}

// References page
const refEl = document.getElementById("refs");

if (refEl) {
    const draw = (type = "all") => {
        refEl.innerHTML = REFERENCES
            .filter((r) => type === "all" || r.type === type)
            .map((r) => `
                <li>
                    ${r.text}
                    ${r.url ? `
                        <a class="chip" href="${r.url}" target="_blank" rel="noopener">
                            Link
                        </a>
                    ` : ""}
                    ${r.page ? `
                        <span class="label">p. ${r.page} · ${r.license}</span>
                    ` : ""}
                </li>
            `)
            .join("");
    };

    document.getElementById("ref-filters").addEventListener("click", (e) => {
        if (!e.target.dataset.f) return;

        document.querySelectorAll("#ref-filters .chip").forEach((b) =>
            b.classList.toggle("active", b === e.target)
        );

        draw(e.target.dataset.f);
    });

    draw();
}