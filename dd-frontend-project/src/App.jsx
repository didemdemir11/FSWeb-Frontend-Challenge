import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";
import data from "./data/data.json";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  const [language, setLanguage] = useState("eng");
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "tr" ? "eng" : "tr"));
  };
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
