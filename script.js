const translations = {
    en: {
        welcome: "👋 Hi, I am Efim",
        about: "18 y.o student from Russia",
        interest: "Interested in back-end development",
        learning: "Technologies I am learning:",
        projects: "Some of my projects:",
        copied: "Copied!"
    },
    ru: {
        welcome: "👋 Привет, я Ефим",
        about: "18 летний студент из России",
        interest: "Интересуюсь back-end разработкой",
        learning: "Технологии, которые я изучаю:",
        projects: "Некоторые из моих проектов:",
        copied: "Скопировано!"
    }
};
const updateTranslations = (language) => {
    for (const i in translations[language]) {
        const element = document.getElementById(i);
        if (!element) continue;
        element.innerText = translations[language][i];
    }
}


const language = ['ru', 'ru-RU'].includes(navigator.language) ? 'ru' : 'en';

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
updateTranslations(language);
languageSelector.onchange = () => {
    updateTranslations(languageSelector.value);
}

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