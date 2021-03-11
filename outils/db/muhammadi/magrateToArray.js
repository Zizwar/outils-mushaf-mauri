const fs = require('fs')
const coordinateMuhammadi = require('./coordinateMuhammadi.json');


const saveTojson = (data) => {
    try {
        console.log(" start warite")
        fs.writeFileSync("indexPage.json", JSON.stringify(data));
        console.log("end save json :)")
    } catch (err) {
        console.error(err)
    }
}
//play merge thow object
const outObject = [];
console.log("play merge foreach");
let pageArray = [];
let i = 2;

coordinateMuhammadi.forEach(function (item, index) {
    const { X, Y, p, a, s } = item;
    if (p === i)
        pageArray.push([s, a, X, Y])
    else {
        outObject.push(pageArray);
        pageArray = [];
        i++;
    }

})

saveTojson(outObject)