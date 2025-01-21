import { LanguageContext, languages } from './context/languageManager';
import ButtonSwitcher from './components/ButtonSwitcher/ButtonSwitcher';
import Title from './components/Title/Title';

import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState(languages.en);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Title />
      <ButtonSwitcher />
    </LanguageContext.Provider>
  )
}

export default App
