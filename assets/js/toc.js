(() => {
  const main = document.querySelector("main.project");
  if (!main) return;

  const toc = main.querySelector("#toc");
  const tocContent = toc?.querySelector(".toc-content");
  const toggleBtn = toc?.querySelector(".toc-toggle");
  if (!toc || !tocContent || !toggleBtn) return;

  const content = main.querySelector(".project-content") || main;
  const headings = Array.from(content.querySelectorAll("h2, h3"))
    .filter(h => h.textContent.trim().length > 0);

  // Ne pas afficher le sommaire si trop court
  if (headings.length < 4) {
    toc.remove();
    return;
  }

  const slugify = (str) =>
    str.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim().replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const used = new Set();
  const uniqueId = (base) => {
    let id = base || "section";
    let i = 2;
    while (used.has(id) || document.getElementById(id)) {
      id = `${base}-${i++}`;
    }
    used.add(id);
    return id;
  };

  const ul = document.createElement("ul");

  headings.forEach(h => {
    const level = h.tagName === "H3" ? 3 : 2;
    if (!h.id) h.id = uniqueId(slugify(h.textContent));

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    a.dataset.level = String(level);

    // Sur mobile : fermer le sommaire après clic
    a.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        toc.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    li.appendChild(a);
    ul.appendChild(li);
  });

  tocContent.appendChild(ul);

  // Toggle mobile
  toggleBtn.addEventListener("click", () => {
    const isOpen = toc.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
})();