import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import useLocalStorage from "./hooks/useLocalStorage";
import languagesData from "./data/languagesData";

function App() {
  const [language, setLanguage] = useLocalStorage("language", "eng");
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "tr" ? "eng" : "tr"));
  };
  const data = languagesData[language];
  return (
    <>
      <LanguageProvider value={{ language, toggleLanguage }}>
        <div className="App">
          <Hero data={data.hero} />
          <Skills data={data.skills} />
          <Profile data={data.profile} />
          <Projects data={data.projects} />
          <Footer data={data.footer} />
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
