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

  useEffect(() => {
    const handlePostData = () => {
      setLoading(true);
      postData(languagesData)
        .then((axiosData) => {
          setLanguageData(axiosData[language]);
          console.log(languageData);
        })
        .catch((error) => {
          console.error("API'ya veri gönderilemedi.", error);
          setError("API'ya veri gönderilemedi.");
          setLoading(false);
        });
    };
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
