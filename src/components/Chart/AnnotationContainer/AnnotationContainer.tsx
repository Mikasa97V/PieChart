import React from "react";
import { Annotation } from "@components/Chart/AnnotationContainer/Annotation/Annotation";
import { ITextAnnotation } from "@components/Chart/types";
import s from "./AnnotationContainer.module.css";

interface IProps {
  annotationTop: ITextAnnotation;
  annotationBottom: ITextAnnotation;
}

const AnnotationContainer = ({ annotationTop, annotationBottom }: IProps) => {
  return (
    <div className={s.main_container}>
      <Annotation annotation={annotationTop} />
      <Annotation annotation={annotationBottom} />
    </div>
  );
};

export { AnnotationContainer };
