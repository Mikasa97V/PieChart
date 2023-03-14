import React from "react";
import {
  getFullDataByCategory,
  getFullDataByCurrency,
} from "@components/Chart/helpers/func/getFullData";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const changeActiveClass = (e: any) => {
    const otherButtons = Array.from(document.getElementsByClassName(`${s.navbar_item}`)).filter(
      (it) => it !== e.target
    );
    e.target.classList.add(`${s.active}`);
    otherButtons.forEach((it) => it.classList.remove(`${s.active}`));
  };
  const sortByCurrency = (e: any) => {
    changeActiveClass(e);
    getFullDataByCurrency(); /////
  };

  const sortByCategory = (e: any) => {
    changeActiveClass(e);
    getFullDataByCategory(); //////
  };

  const sortInDetail = (e: any) => {
    changeActiveClass(e);
    console.log("click btn");
  };

  return (
    <div className={s.main_wrap}>
      <button type="button" className={`${s.navbar_item} ${s.active}`} onClick={sortByCurrency}>
        По валюте
      </button>

      <button type="button" className={s.navbar_item} onClick={sortByCategory}>
        По категории
      </button>

      <button type="button" className={s.navbar_item} onClick={sortInDetail}>
        Детально
      </button>
    </div>
  );
};

export { Navbar };
