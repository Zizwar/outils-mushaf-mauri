let id = 1;
let page = 1; 
let coordinateSortz = [];
for (let amaken in coordinateMadina) {
  let arraySort = []
  for (let item in coordinateMadina[page]) {
    // //logz("play forEach")
    // //_.forEach(amaken, function(value,i) {
    //  //logz("forEach" + i)
    sura = +item.split("_")[0];
    aya = +item.split("_")[1];
      [topz,leftz] = coordinateMadina[page][item];
   //  left = coordinateMadina[page][item];
    let wino = {
      aya,
      sura,
      page,
      id,
    };
   // arraySort.push(wino);
 //  arraySort.push([id,page,sura,aya])
 arraySort.push([sura,aya,leftz,topz])
   id++;
  }
 coordinateSorzt.push([arraySort])
  page++;
}
