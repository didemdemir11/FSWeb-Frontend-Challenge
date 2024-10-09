import React, { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import useLocalStorage from "./hooks/useLocalStorage";
import languagesData from "./data/languagesData";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };
  const data = languagesData[language];
  return (
    <LanguageProvider language={language} toggleLanguage={toggleLanguage}>
      <DarkModeProvider>
        <div className="App">
          <Hero data={data.hero} />
          <Skills data={data.skills} />
          <Profile data={data.profile} />
          <Projects data={data.projects} />
          <Footer data={data.footer} />
        </div>
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
