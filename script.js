const translations = {
    en: {
        title: "I am Efim",
        welcome: "👋 Hi, I am Efim",
        about: "18 y.o student from Russia",
        interest: "Interested in back-end development",
        learning: "Technologies I am learning:",
        projects: "Some of my projects:",
        copied: "Copied!"
    },
    ru: {
        title: "Я Ефим",
        welcome: "👋 Привет, я Ефим",
        about: "18 летний студент из России",
        interest: "Интересуюсь back-end разработкой",
        learning: "Технологии, которые я изучаю:",
        projects: "Некоторые из моих проектов:",
        copied: "Скопировано!"
    }
};
const updateTranslations = (language) => {
    document.title = translations[language].title;
    for (const i in translations[language]) {
        const element = document.getElementById(i);
        if (!element) continue;
        element.innerText = translations[language][i];
    }
}
const getLanguage = () => {
    let language = localStorage.getItem('language');
    if (language) return language;
    language = ['ru', 'ru-RU'].includes(navigator.language) ? 'ru' : 'en';
    return language;
}
const setLanguage = (language) => {
    if (!Object.keys(translations).includes(language)) throw new Error('Unknown language');
    localStorage.setItem('language', language);
    updateTranslations(language);
}

const language = getLanguage();
updateTranslations(language);

const languageSelector = document.getElementById('language');
for (const i in translations) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    if (i === language) {
        option.selected = true;
    }
    languageSelector.appendChild(option);
}

languageSelector.onchange = () => setLanguage(languageSelector.value);

const discord = document.getElementById('discord');
const discordTooltip = discord.querySelector('p');
discord.onclick = () => {
    navigator.clipboard.writeText('efima');
    const text = discordTooltip.textContent;
    discordTooltip.textContent = translations[language].copied;
    setTimeout(() => {
        discordTooltip.textContent = text;
    }, 1000);
}