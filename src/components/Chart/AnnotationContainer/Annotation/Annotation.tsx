import React from "react";
import { COLORS } from "@components/Chart/helpers/colors";
import {IProps} from "@components/Chart/AnnotationContainer/Annotation/interface";
import s from "./Annotation.module.css";

const Annotation = ({ annotation }: IProps) => {
  return (
    <div className={s.main_wrap}>
      {annotation.isSimply ? (
        <div className={s.main_text_container}>
          <div className={s.media_container}>
            <span>{annotation.title && annotation.title}</span>
            <span>{annotation.currency && annotation.currency}</span>
          </div>
          <span>{annotation.value}</span>
        </div>
      ) : (
        <div className={s.main_container}>
          {annotation.sortCategory?.map((it, index) => (
            <div className={s.colorMark_container} key={it.name}>
              <div
                style={{ background: `${COLORS[index % COLORS.length]}` }}
                className={s.colorMark}
              >{it.value} %</div>
              <div>{it.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Annotation };
