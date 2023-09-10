const startCharCode = 0x9000;
const endCharCode = 0xA000;
const charWidthPx = 24;
const rowCount = 16;

const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
svg.setAttribute("width", charWidthPx * rowCount);
svg.setAttribute("height", charWidthPx * Math.floor((endCharCode-startCharCode) / rowCount))

const g = document.createElementNS('http://www.w3.org/2000/svg','g');
g.setAttribute("sodipodi:insensitive", "true");

// 文字描画
for (let i = startCharCode; i < endCharCode; i+= rowCount) {
    const rowG = document.createElementNS('http://www.w3.org/2000/svg','g');
    rowG.setAttribute("id", `row-${i.toString(16)}-${(i+rowCount-1).toString(16)}`)
    for (let j = 0; j < rowCount; j++) {
        const char = document.createElementNS('http://www.w3.org/2000/svg','text');
        char.setAttribute("x", j * charWidthPx + charWidthPx/2);
        char.setAttribute("y", (i-startCharCode)/rowCount * charWidthPx + charWidthPx/2 + 3);
        char.setAttribute("font-size", 26);
        char.setAttribute("text-anchor", "middle");
        char.setAttribute("dominant-baseline", "middle");
        char.setAttribute("font-family", "Noto Sans CJK JP");
        char.setAttribute("style", "fill: red; line-height: 24px")
        char.innerHTML = String.fromCodePoint(i+j);
        
        rowG.appendChild(char);
    }
    g.appendChild(rowG);
}

svg.appendChild(g);
document.querySelector("#root").appendChild(svg);