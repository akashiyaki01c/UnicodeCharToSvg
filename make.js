const startCharCode = 0xA000;
const endCharCode = 0xC000;
const charWidthPx = 24;
const rowCount = 16;

const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
svg.setAttribute("width", charWidthPx * rowCount);
svg.setAttribute("height", charWidthPx * Math.floor((endCharCode-startCharCode) / rowCount))

const g = document.createElementNS('http://www.w3.org/2000/svg','g');

// 文字描画
for (let i = startCharCode; i < endCharCode; i++) {
    const char = document.createElementNS('http://www.w3.org/2000/svg','text');
    char.setAttribute("x", i % rowCount * charWidthPx + charWidthPx/2);
    char.setAttribute("y", Math.floor((i - startCharCode) / rowCount) * charWidthPx + charWidthPx/2 + 3);
    char.setAttribute("font-size", 26);
    char.setAttribute("text-anchor", "middle");
    char.setAttribute("dominant-baseline", "middle");
    char.setAttribute("font-family", "Noto Sans CJK JP");
    char.setAttribute("style", "fill: red;")
    char.innerHTML = String.fromCodePoint(i);
    
    g.appendChild(char);
}

svg.appendChild(g);
document.querySelector("#root").appendChild(svg);