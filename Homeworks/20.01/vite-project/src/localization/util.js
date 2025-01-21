import { languages } from '../context/languageManager';

const locales = {
    "en": {
        "language-switcher": "Switch language",
        "title": "English language was chosen",
    },
    "ru": {
        "language-switcher": "Сменить язык",
        "title": "Был выбран русский язык",
    },
};

function getInLanguage(language, element) {
     let currentLanguage = null;

    switch (language) {
        case languages.en:
            currentLanguage = locales["en"];
            break;
        case languages.ru:
            currentLanguage = locales["ru"];
            break;
        default:
            throw new Error("Invalid language");
    }

    if (!Object.hasOwnProperty.call(currentLanguage, element)) {
        throw new Error("There is no such element in the current locale");
    }

    return currentLanguage[element];
}

export {
    getInLanguage,
};