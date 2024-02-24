const translations = {
    en: {
        title: 'I am Efim',
        welcome: '👋 Hi, I am Efim',
        about: '18 y.o student from Russia',
        interest: 'Interested in back-end development',
        learning: 'Technologies I am learning:',
        projects: 'Some of my projects:',
        copied: 'Copied!'
    },
    ru: {
        title: 'Я Ефим',
        welcome: '👋 Привет, я Ефим',
        about: '18 летний студент из России',
        interest: 'Интересуюсь back-end разработкой',
        learning: 'Технологии, которые я изучаю:',
        projects: 'Некоторые из моих проектов:',
        copied: 'Скопировано!'
    }
};
const updateTranslations = () => {
    const language = getLanguage();
    document.title = translations[language].title;
    for (const i in translations[language]) {
        const element = document.getElementById(i);
        if (!element) continue;
        element.innerText = translations[language][i];
    }
}
const getLanguage = () => localStorage.getItem('language') || (['ru', 'ru-RU'].includes(navigator.language) ? 'ru' : 'en');
const setLanguage = (language) => {
    if (!Object.keys(translations).includes(language)) throw new Error('Unknown language');
    localStorage.setItem('language', language);
    updateTranslations(language);
}

setLanguage(getLanguage());
console.log(getLanguage());

const languageSelector = document.getElementById('language');
for (const i in translations) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    if (i === getLanguage()) option.selected = true;
    languageSelector.appendChild(option);
}

languageSelector.onchange = () => setLanguage(languageSelector.value);

const discord = document.getElementById('discord');
const discordTooltip = discord.querySelector('p');
discord.onclick = () => {
    navigator.clipboard.writeText('efima');
    discordTooltip.textContent = translations[getLanguage()].copied;
    setTimeout(() => {
        discordTooltip.textContent = '@efima';
    }, 1000);
}