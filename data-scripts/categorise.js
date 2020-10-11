// Split single list of all categories into multiple lists of different categories
// Each of those lists can be sorted for Binary Search operations.


const rankData = require('./src/CollegePredictor/general-2019.json') // file address
const fs = require('fs');

const compare = (a,b) => {
    return a.closingRank > b.closingRank
}

let categories = new Set()

rankData.forEach(ele => {
    categories.add(ele.category)
})

categories = [...categories]
let catList = {}

categories.forEach(element => {
    catList = {...catList, [element]: []}        
});

rankData.forEach(
    data => {
        catList[data.category].push(data)
    }
)

fs.writeFile("./src/CollegePredictor/general-2019.json", JSON.stringify(catList, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

