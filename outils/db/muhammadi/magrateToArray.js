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
    const { X, Y, p, a:aya, s:sura } = item;
    /*
    if (p === i)
        pageArray.push([s, a, X, Y])
    else {
        outObject.push(pageArray);
        pageArray = [];
        i++;
    }
    */
    const HEIGH_PAGE = 707;
    const WIDTH_PAGE = 456;

  const sura_aya = `${sura}_${aya}`;
    const left = (X * WIDTH_PAGE).toFixed(1);
    const top = (Y * HEIGH_PAGE).toFixed(1);

    //const page = `p${p}`;
    if(!outObject[p])
    outObject[p] = [];
    outObject[p].push([sura,aya, +left, +top])
    

})

saveTojson(outObject)