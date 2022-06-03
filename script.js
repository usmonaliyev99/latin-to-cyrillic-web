document.getElementById("cyrillicTextArea").value = ""
document.getElementById("latinTextArea").value = ""
document.getElementById("latinTextArea").focus()

function clearLatinTextArea() {
    document.getElementById("latinTextArea").value = "";
    document.getElementById("cyrillicTextArea").value = "";
}

async function typingLatinTextArea() {
    const value = document.getElementById("latinTextArea").value;
    const cyrillicText = getCyrillicText(value);
    document.getElementById("cyrillicTextArea").value = cyrillicText;
    copyHandler()
}

async function copyHandler() {
    const cyrillicTextArea = document.getElementById("cyrillicTextArea");
    cyrillicTextArea.focus()
    cyrillicTextArea.select()
    document.execCommand("copy");
    document.getElementById("latinTextArea").focus()
}

function getCyrillicText(latinText) {
    if (!latinText) {
        return "";
    }
    var cyrText = "";
    for (var i = 0, len = latinText.length; i < len; i++) {
        var curLetter = latinText[i];
        if (curLetter == "e" || curLetter == "E") {
            //prevent pre E
            if (i == 0 || " -.,\n)('?/".indexOf(latinText[i - 1]) != -1) {
                curLetter += curLetter;
            }
        }

        var pos1Txt = latinText[i + 1];
        var pos2Txt = latinText[i + 2];

        if (
            !(
                (curLetter == "y" || curLetter == "Y") &&
                (pos2Txt == "'" || pos2Txt == "’")
            ) &&
            i != len - 1 &&
            !(curLetter == "t" && pos1Txt == "s" && latinText[i + 3] == "z")
        ) {
            var dualLetter = latCyr[curLetter + pos1Txt];
            if (dualLetter) {
                cyrText += dualLetter;
                i++;
                continue;
            }
        }
        cyrText += latCyr[curLetter] || curLetter;
    }
    return cyrText;
}

var latCyr = {
    A: "А",
    B: "Б",
    V: "В",
    G: "Г",
    D: "Д",
    Ye: "Е",
    YE: "Е",
    J: "Ж",
    Z: "З",
    I: "И",
    Y: "Й",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    F: "Ф",
    X: "Х",
    Ts: "Ц",
    TS: "Ц",
    Ch: "Ч",
    CH: "Ч",
    Sh: "Ш",
    SH: "Ш",
    EE: "ЭE",
    Yu: "Ю",
    YU: "Ю",
    Ya: "Я",
    YA: "Я",
    "G'": "Ғ",
    "O'": "Ў",
    "O’": "Ў",
    Yo: "Ё",
    YO: "Ё",
    Q: "Қ",
    H: "Ҳ",
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    ye: "е",
    yE: "е",
    j: "ж",
    z: "з",
    i: "и",
    y: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    x: "х",
    ts: "ц",
    tS: "ц",
    ch: "ч",
    cH: "ч",
    sh: "ш",
    sH: "ш",
    "'": "ъ",
    ee: "эе",
    eE: "эе",
    e: "е",
    yu: "ю",
    yU: "ю",
    ya: "я",
    yA: "я",
    "o'": "ў",
    q: "қ",
    "g'": "ғ",
    yo: "ё",
    yO: "ё",
    h: "ҳ",
};