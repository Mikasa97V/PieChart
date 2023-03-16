import React from "react";
import { Annotation } from "@components/Chart/AnnotationContainer/Annotation/Annotation";
import {IProps} from "@components/Chart/AnnotationContainer/interface";
import s from "./AnnotationContainer.module.css";

const AnnotationContainer = ({ annotationTop, annotationBottom }: IProps) => {
  return (
    <div className={s.main_container}>
      <Annotation annotation={annotationTop} />
      <Annotation annotation={annotationBottom} />
    </div>
  );
};

export { AnnotationContainer };
