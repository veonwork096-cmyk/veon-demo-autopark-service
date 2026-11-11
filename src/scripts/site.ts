// Page behaviour: live Lviv time, mobile menu close, services switcher/accordion, sticky bar, header line.
// Everything here is progressive: without JS the page shows all content and every action works.

// 1. Live time in Lviv (Europe/Kyiv), updated once a minute, no animation and no aria-live.
const timeNodes = document.querySelectorAll<HTMLElement>("[data-lviv-time]");
if (timeNodes.length) {
  const fmt = new Intl.DateTimeFormat("uk-UA", { timeZone: "Europe/Kyiv", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
  const render = () => {
    const text = `Зараз у Львові ${fmt.format(new Date())} — станція працює`;
    timeNodes.forEach((n) => { n.textContent = text; });
  };
  render();
  const tick = () => { render(); window.setTimeout(tick, 60_000 - (Date.now() % 60_000) + 50); };
  window.setTimeout(tick, 60_000 - (Date.now() % 60_000) + 50);
}

// 2. Mobile menu (<details>): close after choosing an anchor or pressing Escape.
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  menu.querySelectorAll("[data-menu-link]").forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary")?.focus(); }
  });
}

// 3. Services: switcher on desktop (one group always open), accordion on mobile (open group can be closed).
const switcher = document.querySelector<HTMLElement>("[data-switcher]");
if (switcher) {
  const desktop = window.matchMedia("(min-width: 1100px)");
  const tabs = [...switcher.querySelectorAll<HTMLButtonElement>("[data-tab]")];
  const panels = [...switcher.querySelectorAll<HTMLElement>("[data-panel]")];
  const open = (id: string | null) => {
    tabs.forEach((t) => t.setAttribute("aria-expanded", String(t.dataset.tab === id)));
    panels.forEach((p) => p.classList.toggle("is-active", p.dataset.panel === id));
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    const isOpen = tab.getAttribute("aria-expanded") === "true";
    if (isOpen && desktop.matches) return;
    open(isOpen ? null : tab.dataset.tab ?? null);
  }));
  desktop.addEventListener("change", () => {
    if (desktop.matches && !tabs.some((t) => t.getAttribute("aria-expanded") === "true")) open(tabs[0]?.dataset.tab ?? null);
  });
}

// 4. Sticky mobile bar appears once the hero has left the view; header gets its line after scrolling.
const hero = document.getElementById("hero");
const bar = document.querySelector<HTMLElement>("[data-mbar]");
if (hero && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    const away = !entry.isIntersecting;
    bar?.classList.toggle("is-shown", away);
    bar?.toggleAttribute("inert", !away);
  }, { threshold: 0 }).observe(hero);
} else {
  bar?.classList.add("is-shown");
}
const onScroll = () => document.documentElement.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
