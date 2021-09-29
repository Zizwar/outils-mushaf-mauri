let id = 1;
let page = 1;
let arraySort = []
for (let amaken in warchMadina) {
  for (let item in warchMadina[page]) {
    // //logz("play forEach")
    // //_.forEach(amaken, function(value,i) {
    //  //logz("forEach" + i)
    sura = +item.split("_")[0];
    aya = +item.split("_")[1];
      [topz,leftz] = warchMadina[page][item];
   //  left = warchMadina[page][item];
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
  page++;
}
