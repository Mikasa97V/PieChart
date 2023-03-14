export const getMaxValue = (data: any[], sort?: string) => {
  let maxValue = -1;
  let title = "";
  data.forEach((it) => {
    if (it.value > maxValue) {
      maxValue = it.value;
      if (sort) {
        title = it[sort];
      } else {
        title = it.category + " " + it.currency;
      }
    }
  });
  return { maxValue, title };
};
