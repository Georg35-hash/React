import { LanguageContext, languages } from '/src/context/languageManager'
import { getInLanguage } from '/src/localization/util';

import { useContext } from "react";

export default function ButtonSwitcher() {
    const { language, setLanguage } = useContext(LanguageContext);

    const switchLanguage = () => {
        switch(language) {
            case languages.en:
                setLanguage(languages.ru);
                break;
            case languages.ru:
                setLanguage(languages.en);
                break;
        }
    };

    return (
        <button onClick={switchLanguage}>
            { getInLanguage(language, "language-switcher") }
        </button>
    );
};