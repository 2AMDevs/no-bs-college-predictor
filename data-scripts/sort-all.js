// This file sorts data by Opening Rank and then Closing Rank

const fs = require('fs')

// eslint-disable-next-line no-inline-comments
const { collegeData } = { collegeData: [] } // path to json

const filterColleges = () => {
  const filteredColleges = collegeData.sort(
    (a, b) => a.openingRank - b.openingRank || a.closingRank - b.closingRank,
  )
  fs.writeFile('finalData.json', JSON.stringify(filteredColleges), () => {})
}

filterColleges()
