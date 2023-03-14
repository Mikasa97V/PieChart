const convertDataForChart = (data: any) => {
  const convertedData = [];
  for (let entries of Object.entries(data)) {
    convertedData.push({ name: entries[0], value: entries[1] });
  }
  return convertedData;
};

export const getDataByCurrency = (data: any) => {
  const currencyData: any = [];
  data.forEach((it: any) => {
    currencyData[it.currency] = currencyData[it.currency]
      ? currencyData[it.currency] + it.value
      : it.value;
  });
  return convertDataForChart(currencyData);
};

export const getDataByCategory = (data: any) => {
  const categoryData: any = [];
  data.forEach((it: any) => {
    categoryData[it.category] = categoryData[it.category]
      ? categoryData[it.category] + it.value
      : it.value;
  });
  return convertDataForChart(categoryData);
};

export const getDetailData = (data: any) => {
  const detailData: any = [];
  data.forEach((it: any) => {
    const item = it.category + " " + it.currency;
    detailData[item] = detailData[item] ? detailData[item] + it.value : it.value;
  });
  return convertDataForChart(detailData);
};
