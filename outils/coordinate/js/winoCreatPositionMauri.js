//Create layer  quran mauri
const WH = { width: 865, height: 1273 };
const WHO = { width: 456, height: 990 };
const numberLine = 15;
let oldLine = 0;
let oldLeft = WH.width;
let line = 0;
const heightLine = (WH.height / numberLine);
const nextPageleft = 0;
const nextTop = 985.8;// WHO.height;
//==>
const $ = (id) => document.getElementById(id);
let resCalcPage = [];
let page = getHashValue('page') || 3;




const reRenderPage = () => {

    const pageUrl = `https://mushaf.me/fahres/page/images/muhammadi/page${+page + 1}.png`;
    $("imagino").setAttribute("src", pageUrl);


    //===>
    const [nextPageSura = null, nextAya] = indexMuhammadi[page] ? indexMuhammadi[page][0] : [];

    const coordinatePage = nextPageSura ?
        [...indexMuhammadi[page - 1], [nextPageSura, nextAya, nextPageleft, nextTop]] :
        indexMuhammadi[page - 1];

    for (let [index, [sura, aya, left, top]] of coordinatePage.entries()) {
        left = (left / WHO.width * WH.width);
        let line = parseInt((top / WHO.height * (WH.height) / heightLine))

        console.log("original", { index, aya, sura, left, top })
        //if 1 line
        lineNumber = (line) - oldLine;
        thisLine = line;
        const wino = {
            aya,
            sura,
            page,
            id: `s${sura}a${aya}z`,
        };
        if (!lineNumber) {
            //alert("lineNumber1")
            renderLineFahres({ left, line, width: (oldLeft - left), wino })
            oldLeft = left;
            //  return;
        } else
            //if 2 lineNumber
            if (lineNumber === 1) {
                //alert("lineNumber2")
                //lastLine
                renderLineFahres({ left, line, width: WH.width - left, wino })
                //firstLine
                renderLineFahres({ left: 0, line: (oldLine), width: (oldLeft), wino })
                oldLine = thisLine;
                oldLeft = left;
            } else
                //if multilineNumber
                if (lineNumber > 1) {
                    //alert("multi line")
                    //lastLine
                    renderLineFahres({ left, line, width: WH.width - left, wino })
                    //firstLine
                    renderLineFahres({ left: 0, line: (oldLine), width: (oldLeft), wino })
                    //alert("looop")
                    //renderMultiLine Btwn
                    for (let ii = oldLine + 1; ii < thisLine; ii++)
                        renderLineFahres({ left: 0, line: (ii), width: WH.width, wino })

                    oldLine = thisLine;
                    oldLeft = left
                }

        ////===>

        const elmNextPage = $("nextPage");
        elmNextPage.onclick = () => {
            page = +page + 1;
            elmRerender();
        }
        elmNextPage.innerText = `next Page (${+page + 1})`;

        const elmPrevPage = $("prevPage");
        elmPrevPage.onclick = () => {
            page = +page - 1;
            elmRerender();
        }
        elmPrevPage.innerText = `prev Page (${+page - 1})`;

    }
}
function renderLineFahres({ left, line, width, wino, cb }) {
    //===>
    left = left.toFixed(2);
    const top = (heightLine * line).toFixed(2)
    const height = (heightLine).toFixed(2);
    //return {left, width, top, height, wino}

    //==>end
    const style = { left, line, width, top, height, page }
    resCalcPage.push(style);
    const elm = document.createElement("div");
    with (elm.style) {
        top = style.top + "px";
        height = style.height + "px";
        left = style.left + "px";
        width = style.width + "px";
        position = "absolute";
        background = "#ccc";
        opacity = 0.6;
        zIndex = 999;
        border = "3px solid #F44"
    }

    //oldLeft = left;
    if (cb) cb()
    //elm.style.background = style.background;

    //console.log({ style })
    elm.onclick = (e) => calcThis(e, i)
    $("wino").appendChild(elm);
}

function getHashValue(key) {
    const matches = location.hash.match(new RegExp(key + '=([^&]*)'));
    return matches ? matches[1] : null;
}

window.onload = () => reRenderPage();


