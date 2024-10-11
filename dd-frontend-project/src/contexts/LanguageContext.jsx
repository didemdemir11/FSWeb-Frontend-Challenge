import React, { createContext, useEffect, useState } from "react";
import languagesData from "../data/languagesData";
import { postData } from "../api/api";
import useLocalStorage from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const browserLanguage = navigator.language.slice(0, 2);
  const [language, setLanguage] = useLocalStorage(
    "language",
    browserLanguage === "en" || browserLanguage === "tr"
      ? browserLanguage
      : "en"
  );
  const [languageData, setLanguageData] = useState(languagesData[language]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostData = async () => {
    try {
      await postData(language, languagesData[language]);
    } catch (error) {
      console.error("API'ya veri gönderilemedi.", error);
    }
  };

  useEffect(() => {
    setLanguageData(languagesData[language]);
    handlePostData();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };
  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, languageData, loading, error }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
