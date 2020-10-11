// This file sorts data by Opening Rank and then Closing Rank

var fs = require('fs');
var { collegeData } = require('./src/CollegePredictor/general-2019');

const filterColleges = () => {
  const filteredColleges = collegeData.sort(
      (a, b) => a.openingRank - b.openingRank || a.closingRank - b.closingRank);
  fs.writeFile('finalData.json', JSON.stringify(filteredColleges,), () => {});
};

filterColleges();
