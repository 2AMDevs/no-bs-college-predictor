import allData from './dataSources/categoricalData.json';

const getByCategory = (category='OPEN') => allData[category];

export { getByCategory };
