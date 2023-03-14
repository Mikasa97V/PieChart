export const getTotalSum = (data: any[]) => {
  let sum = 0;
  data.forEach((it) => {
    sum += it.value;
  });
  return sum;
};
