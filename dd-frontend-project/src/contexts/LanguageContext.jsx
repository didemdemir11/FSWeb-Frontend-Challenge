import React, { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, language, toggleLanguage }) => {
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
