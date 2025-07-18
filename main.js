// Replaces each element in html with translation in current language
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Get user's browser language
    const userLang = navigator.language.slice(0, 2);
    const supportedLanguages = ["en", "es", "ca"];
    // If user language not supported, set default language to English
    const defaultLang = supportedLanguages.includes(userLang) ? userLang : "en";
    
    // Set Language
    switchLanguage(defaultLang);
});


// Switch language when user clicks on language flag
document.querySelectorAll('.language-switcher li').forEach(li => {
    li.addEventListener('click', () => {
        const lang = li.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

