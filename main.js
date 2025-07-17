function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
}

const defaultLang = "en";
setLanguage(defaultLang);

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(defaultLang);
});

document.querySelectorAll('language-switcher li').forEach(li => {
    li.addEventListener('click', () => {
        const lang = li.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

