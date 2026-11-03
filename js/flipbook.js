// Flipbook viewer: uses the StPageFlip library (loaded from CDN in viewer.html)
// Docs: https://nodlik.github.io/StPageFlip/

// 1) PAGE CONTENT. Put real HTML for any page here. Pages not listed get a placeholder.
const PAGE_HTML = {
    1: `
        <p class="label">Magazine portfolio</p>
        <h1 style="font-size: 2.4rem;">${MAGAZINE.title}</h1>
        <p><em>${MAGAZINE.subtitle}</em></p>
        ${ph("", "Cover art: split image (Then | Now)", "wide")}
        <p>
            <strong>[STUDENT NAME(S)]</strong><br>
            ${MAGAZINE.course} · ${MAGAZINE.instructor} · ${MAGAZINE.year}
        </p>
    `,
    14: THEN_NOW.left,
    15: THEN_NOW.right,
};

const sectionOf = (p) => SECTIONS.find((s) => p >= s.start && p <= s.end);

function buildPages() {
    const book = document.getElementById("book");

    for (let p = 1; p <= MAGAZINE.totalPages; p++) {
        const s = sectionOf(p);
        const el = document.createElement("div");

        el.className = "page";

        el.innerHTML = PAGE_HTML[p] || `
            <p class="label">${String(p).padStart(2, "0")} · ${s ? s.title : ""}</p>
            <h3>${s ? s.title : "Page " + p}</h3>
            ${ph("", "image")}
            <p>Page ${p} placeholder</p>
        `;

        book.appendChild(el);
    }
}

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
let zi = 2;

// 2) VIEWER
const holder = document.getElementById("book-holder");
const area = document.getElementById("book-area");
let flip = null;
const sizeKey = { v: "" };

// Page size that fits the visible area, multiplied by the zoom level
function dims() {
    const r = area.getBoundingClientRect();
    const cs = getComputedStyle(area);
    const W = r.width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const H = r.height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const portrait = W < 640;
    const z = ZOOMS[zi];
    const fitW = portrait ? W : W / 2;
    const pw = Math.floor(Math.max(120, Math.min(fitW, H * 0.75)) * z);
    const ph = Math.floor(pw * 4 / 3);
    return { pw, ph, bw: portrait ? pw : pw * 2, portrait };
}

function init(page = 0) {
    if (flip) { try { flip.destroy(); } catch (e) {} }
    holder.innerHTML = '<div id="book"></div>';
    buildPages();

    const d = dims();
    sizeKey.v = `${d.pw}x${d.portrait}`;
    holder.style.width = d.bw + "px";
    holder.style.height = d.ph + "px";

    flip = new St.PageFlip(document.getElementById("book"), {
        width: d.pw,
        height: d.ph,
        size: "fixed",
        showCover: true,
        usePortrait: true,
        showPageCorners: false,   // no page peeking when the cursor hovers
        flippingTime: 900,
        maxShadowOpacity: 0.45,
        mobileScrollSupport: false
    });
    // every page (cover included) uses the same soft, paper-like flip
    flip.loadFromHTML(document.querySelectorAll("#book .page"));
    flip.on("flip", (e) => sync(e.data));
    if (page > 0) flip.turnToPage(page);
    sync(page);
}

// Rail (contents sidebar) and thumbnail scrubber
const rail = document.getElementById("rail");

rail.innerHTML = `<h2>Contents <button class="rail-close" id="rail-close" aria-label="Close contents">×</button></h2>` +
    SECTIONS.map((s) => `
    <button data-page="${s.start}">
        ${s.title}
        <span>${s.start === s.end ? s.start : s.start + "–" + s.end}</span>
    </button>
`).join("");

const scrub = document.getElementById("scrubber");
const spreads = [1];
for (let p = 2; p <= MAGAZINE.totalPages; p += 2) spreads.push(p);

scrub.innerHTML = spreads.map((p) => `
    <button data-page="${p}" title="Page ${p}">${p}</button>
`).join("") + `<span class="page-count" id="count"></span>`;

const goTo = (page) => flip.turnToPage(page - 1);
const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

// CONTENTS: toggles the sidebar (open by default on laptops, a drawer on phones/tablets)
const contentsBtn = document.getElementById("contents");
function setRail(open) {
    document.body.classList.toggle("rail-open", open);
    contentsBtn.setAttribute("aria-pressed", open);
}
setRail(!isMobile());
contentsBtn.onclick = () => setRail(!document.body.classList.contains("rail-open"));
document.getElementById("rail-close").onclick = () => setRail(false);

document.querySelectorAll("#rail button[data-page], #scrubber button").forEach((b) => {
    b.addEventListener("click", () => {
        goTo(+b.dataset.page);
        if (isMobile()) setRail(false);
    });
});

document.getElementById("prev").onclick = () => flip.flipPrev();
document.getElementById("next").onclick = () => flip.flipNext();

// ZOOM: resizes the book itself inside a scrollable area, so nothing gets covered
const zIn = document.getElementById("zoomin");
const zOut = document.getElementById("zoomreset") && document.getElementById("zoomout");
const zReset = document.getElementById("zoomreset");

function setZoom(i) {
    zi = Math.min(Math.max(i, 0), ZOOMS.length - 1);
    zReset.textContent = Math.round(ZOOMS[zi] * 100) + "%";
    zIn.disabled = zi === ZOOMS.length - 1;
    zOut.disabled = zi === 0;
    init(flip ? flip.getCurrentPageIndex() : startIndex());
    area.scrollLeft = (area.scrollWidth - area.clientWidth) / 2;
    area.scrollTop = (area.scrollHeight - area.clientHeight) / 2;
}
zIn.onclick = () => setZoom(zi + 1);
zOut.onclick = () => setZoom(zi - 1);
zReset.onclick = () => setZoom(2);

// Re-fit when the area changes (sidebar, rotation, window resize)
let timer;
new ResizeObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        const d = dims();
        if (flip && `${d.pw}x${d.portrait}` !== sizeKey.v) init(flip.getCurrentPageIndex());
    }, 120);
}).observe(area);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") flip.flipPrev();
    if (e.key === "ArrowRight") flip.flipNext();
    if (e.key === "+" || e.key === "=") setZoom(zi + 1);
    if (e.key === "-") setZoom(zi - 1);
    if (e.key === "0") setZoom(2);
});

function sync(index) {
    const page = index + 1;
    const s = sectionOf(page);

    rail.querySelectorAll("button[data-page]").forEach((b) => {
        b.classList.toggle("active", s && +b.dataset.page === s.start);
    });

    scrub.querySelectorAll("button").forEach((b) => {
        const start = +b.dataset.page;
        b.classList.toggle("active", page === start || (page === start + 1 && start > 1));
    });

    document.getElementById("count").textContent = `Page ${page} of ${MAGAZINE.totalPages}`;
    history.replaceState(null, "", `#p=${page}`);
}

// Deep links: viewer.html#p=12 opens at page 12
function startIndex() {
    const m = location.hash.match(/p=(\d+)/);
    return (m ? Math.min(Math.max(+m[1], 1), MAGAZINE.totalPages) : 1) - 1;
}

document.getElementById("fullscreen").onclick = () => {
    document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
};

setZoom(2);