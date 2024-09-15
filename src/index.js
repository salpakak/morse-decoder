const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = [];
    const space = '**********';
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    const decodeArr = arr.map(function (el) {
        if (el === space) {
            return ' ';
        }
        let result = el.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
        return MORSE_TABLE[result] || '';
    })
    return decodeArr.join('');
}

module.exports = {
    decode
}