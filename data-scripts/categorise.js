// Split single list of all categories into multiple lists of different categories
// Each of those lists can be sorted for Binary Search operations.

const fs = require('fs')

// file address
const rankData = []

let categories = new Set()

rankData.forEach((ele) => {
  categories.add(ele.category)
})

categories = [...categories]
let catList = {}

categories.forEach((element) => {
  catList = { ...catList, [element]: [] }
})

rankData.forEach(
  (data) => {
    catList[data.category].push(data)
  },
)

fs.writeFile('./src/CollegePredictor/general-2019.json', JSON.stringify(catList, null, 2), (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.err(err)
  }
})
