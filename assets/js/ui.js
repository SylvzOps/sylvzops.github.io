/* =========================================================
   UI — Theme + Language (FR/EN) + Active icon
   - Theme: html[data-theme="dark|light"] + localStorage
   - Language: html[lang="fr|en"] + localStorage
   - Real i18n: translate elements with [data-i18n], [data-i18n-title]
========================================================= */
(() => {
  const STORAGE_THEME = "theme";
  const STORAGE_LANG  = "lang";

  const html = document.documentElement;

  // Buttons (support data-*)
  const themeBtn = document.querySelector("[data-theme-toggle]");
  const langBtn  = document.querySelector("[data-lang-toggle]");

  /* ---------------------------
     THEME
  --------------------------- */
  const systemTheme = () =>
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark" : "light";

  const getTheme = () => {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "dark" || saved === "light") return saved;
    if (html.dataset.theme === "dark" || html.dataset.theme === "light") return html.dataset.theme;
    return systemTheme();
  };

  const setThemeIcon = (theme) => {
    if (!themeBtn) return;
    themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
    themeBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"
    );
  };

  const applyTheme = (theme) => {
    html.dataset.theme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
    setThemeIcon(theme);
  };

  applyTheme(getTheme());

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.dataset.theme === "light" ? "light" : "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------
     LANGUAGE (REAL I18N)
  --------------------------- */
 const I18N = {
  fr: {
    /* META */
    meta_title: "Portfolio – Florian MAGLOIRE | Cybersécurité",
    meta_description:
      "Portfolio cybersécurité : SOC / Blue Team, gouvernance SSI (GRC), réseaux, cloud, projets et contact.",

    /* HEADER / NAV */
    lang_toggle_title: "FR / EN",
    theme_toggle_title: "Mode sombre / clair",
    back_to_top_title: "Retour en haut",

    nav_profile: "Profil",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Expériences",
    nav_education: "Formation",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    /* HERO */
    hero_kicker: "Recherche d’emploi • SOC / Blue Team • Gouvernance SSI (GRC)",
    hero_title:
      "Cybersécurité — Réponses à incidents, vulnérabilités, supervision & gouvernance",
    hero_lead:
      "Bac+5 cybersécurité. Expérience en environnement institutionnel : traitement d’alertes SOC, gestion des vulnérabilités, déclinaison de PSSI, sensibilisation SSI, gestion de certificats et contributions à des projets de détection.",
    quote_text: "« Comprendre une situation, c’est déjà la contrôler. »",

    cta_resume: "CV (PDF)",
    cta_read: "Lire →",
    cta_contact: "M’écrire",

    chip_incident: "Réponse à incident",
    chip_vuln: "Vulnérabilités",

    /* ASIDE */
    aside_title: "En bref",
    aside_location: "📍 Île‑de‑France",
    aside_blue: "🛡️ Blue Team : SOC, incidents, vulnérabilités",
    aside_grc: "📌 GRC : PSSI, sensibilisation, documentation",

    /* SECTIONS */
    section_profile: "Profil",
    section_profile_sub: "Positionnement & livrables",

    section_skills: "Compétences",
    section_projects: "Projets",
    section_experience: "Expérience professionnelle",
    section_education: "Formation",
    section_certifications: "Certifications",
    section_contact: "Contact",
    section_contact_sub: "Échange / opportunités",

    /* PROFILE */
    profile_positioning_title: "Positionnement",
    profile_positioning_text:
      "Polyvalent SOC / Blue Team & Gouvernance SSI (GRC) : traitement d’alertes, réponse à incident, gestion des vulnérabilités et mise en œuvre de mesures SSI.",
    profile_deliver_title: "Ce que j’aime livrer",
    profile_deliver_1: "Détection & supervision : log pipelines, dashboards, alerting",
    profile_deliver_2: "Process & documentation : fiches réflexes, procédures, traçabilité",

    /* CONTACT */
    contact_intro:
      "Pour une opportunité en SOC / Blue Team, GRC ou cybersécurité au sens large :",

    /* FOOTER */
    footer_text: "Portfolio Cybersécurité"
  },

  en: {
    /* META */
    meta_title: "Portfolio – Florian MAGLOIRE | Cybersecurity",
    meta_description:
      "Cybersecurity portfolio: SOC / Blue Team, security governance (GRC), networks, cloud, projects and contact.",

    /* HEADER / NAV */
    lang_toggle_title: "FR / EN",
    theme_toggle_title: "Dark / Light mode",
    back_to_top_title: "Back to top",

    nav_profile: "Profile",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    /* HERO */
    hero_kicker: "Job seeking • SOC / Blue Team • Security Governance (GRC)",
    hero_title:
      "Cybersecurity — Incident Response, Vulnerabilities, Monitoring & Governance",
    hero_lead:
      "Master’s degree (Bac+5) in cybersecurity. Experience in an institutional environment: SOC alert handling, vulnerability management, security policy implementation, security awareness and contributions to detection projects.",
    quote_text: "“Understanding a situation is already a way to control it.”",

    cta_resume: "Resume (PDF)",
    cta_read: "Read →",
    cta_contact: "Contact me",

    chip_incident: "Incident Response",
    chip_vuln: "Vulnerabilities",

    /* ASIDE */
    aside_title: "At a glance",
    aside_location: "📍 Île‑de‑France, France",
    aside_blue: "🛡️ Blue Team: SOC, incidents, vulnerabilities",
    aside_grc: "📌 GRC: security policies, awareness, documentation",

    /* SECTIONS */
    section_profile: "Profile",
    section_profile_sub: "Positioning & deliverables",

    section_skills: "Skills",
    section_projects: "Projects",
    section_experience: "Professional Experience",
    section_education: "Education",
    section_certifications: "Certifications",
    section_contact: "Contact",
    section_contact_sub: "Opportunities & discussions",

    /* PROFILE */
    profile_positioning_title: "Positioning",
    profile_positioning_text:
      "Versatile SOC / Blue Team & Security Governance (GRC) profile: alert handling, incident response, vulnerability management and implementation of security measures.",
    profile_deliver_title: "What I like to deliver",
    profile_deliver_1: "Detection & monitoring: log pipelines, dashboards, alerting",
    profile_deliver_2: "Processes & documentation: playbooks, procedures, traceability",

    /* CONTACT */
    contact_intro:
      "For an opportunity in SOC / Blue Team, GRC, or cybersecurity in general:",

    /* FOOTER */
    footer_text: "Cybersecurity Portfolio"
  }
};

  const getLang = () => {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved === "fr" || saved === "en") return saved;
    if (html.lang === "fr" || html.lang === "en") return html.lang;
    const browser = (navigator.language || "fr").toLowerCase();
    return browser.startsWith("fr") ? "fr" : "en";
  };

  const setLangBtn = (lang) => {
    if (!langBtn) return;
    langBtn.textContent = `🌐 ${lang.toUpperCase()}`;
    langBtn.setAttribute(
      "aria-label",
      lang === "fr" ? "Switch language to English" : "Passer la langue en français"
    );
  };

  const translateDOM = (lang) => {
    const dict = I18N[lang] || {};

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key && dict[key]) el.setAttribute("title", dict[key]);
    });
  };

  const applyLang = (lang) => {
    html.lang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    setLangBtn(lang);
    translateDOM(lang);
  };

  applyLang(getLang());

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = html.lang === "en" ? "en" : "fr";
      applyLang(current === "fr" ? "en" : "fr");
    });
  }
})();