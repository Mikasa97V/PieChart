import React from "react";
import { Tabs } from "@components/Tabs/Tabs";
import s from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={s.main_wrap}>
      <Tabs/>
    </div>
  );
};

export { MainContent };
