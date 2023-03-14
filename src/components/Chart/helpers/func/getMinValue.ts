export const getMinValue = (data: any[], sort?: string) => {
  let minValue = 10000000;
  let title = "";
  data.forEach((it) => {
    if (it.value < minValue) {
      minValue = it.value;
      if (sort) {
        title = it[sort];
      } else {
        title = it.category + " " + it.currency;
      }
    }
  });
  return { minValue, title };
};
