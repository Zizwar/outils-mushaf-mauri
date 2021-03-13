const fs = require('fs')
const indexPage = require('./indexPage.json');


const saveTojson = (data) => {
    try {
        console.log(" start warite")
        fs.writeFileSync("pageData.json", JSON.stringify(data));
        console.log("end save json :)")
    } catch (err) {
        console.error(err)
    }
}
//play merge thow object


console.log("play merge foreach");
let ids = 0;
const outArrayPage = [];

for (let ii = 0; ii <= indexPage.length-1; ii++) {
    const [sura, aya] = indexPage[ii][0];

    outArrayPage[ii] = [sura, aya];


}


saveTojson(outArrayPage)