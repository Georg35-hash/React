import { createContext } from "react";

const languages = {
    "en": 0,
    "ru": 1,
};

const LanguageContext = createContext({
    language: languages.en,
    setLanguage: () => {},
});

export {
    LanguageContext, languages,
};