import React from "react";
import { Header } from "@components/Header/Header";
import { MainContent } from "@components/MainContent/MainContent";

import s from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={s.Wrapper}>
      <Header />
      <MainContent />
    </div>
  );
};

export { App };
