import allData from './dataSources/categoricalData.json'

const getByCategory = (category = 'OPEN') => allData[category]
const everything = 42

export { getByCategory, everything }
