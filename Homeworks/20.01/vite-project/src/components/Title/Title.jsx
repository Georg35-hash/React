import { LanguageContext } from '../../context/languageManager';
import { getInLanguage } from '../../localization/util';

import { useContext } from "react";

function Title({ element = "title" }) {
    const { language, _ } = useContext(LanguageContext);

    return (
        <h2>
            { getInLanguage(language, element) }
        </h2>
    );
}

export default Title;