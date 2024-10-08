import React, { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, value }) => {
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
