import React from "react";
import { ITextAnnotation } from "@components/Chart/types";
import { COLORS } from "@components/Chart/helpers/colors";
import s from "./Annotation.module.css";

interface IProps {
  annotation: ITextAnnotation;
}

const Annotation = ({ annotation }: IProps) => {
  return (
    <div className={s.main_wrap}>
      {annotation.isSimply ? (
        <div className={s.main_text_container}>
          <div>
            <span>{annotation.title && annotation.title}</span>
            <span>{annotation.currency && annotation.currency}</span>
          </div>
          <span>{annotation.value}</span>
        </div>
      ) : (
        <div className={s.main_container}>
          {annotation.sortCategory?.map((it, index) => (
            <div className={s.colorMark_container} key={it}>
              <div
                style={{ background: `${COLORS[index % COLORS.length]}` }}
                className={s.colorMark}
              ></div>
              <div>{it}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Annotation };
