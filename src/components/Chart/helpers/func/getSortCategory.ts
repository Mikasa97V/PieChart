export const getSortCategory = (data: any, totalSum: any) => {
  const sortCategory: Array<{}> = [];
  data.forEach((it: any) => {
    const percent = (it.value * 100 / totalSum).toFixed(0);
    sortCategory.push({name: it.name, value: percent});
  });

  return sortCategory
}
