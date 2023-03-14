interface IData {
  name: string;
  value: number;
}

export interface IProps {
  data: IData[];
}

export interface ILabelParams {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

export interface ITextAnnotation {
  isSimply: boolean;
  sortCategory?: Array<string>;
  title?: string;
  currency?: string;
  value?: string;
}
