const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

LENGTH_S_BINAR_SYSTEM = 10;
LENGTH_S_MORZE_SYSTEM = 2;

function decode(expr) {
    var arrayLetters = [];
    var count = 0 ;
    for (var i = 0; i < expr.length; i+=LENGTH_S_BINAR_SYSTEM) {
         arrayLetters[count] = expr.substring(i,i+LENGTH_S_BINAR_SYSTEM);
         count++;
     }
     
     var symbolMorzeBinar = '';
     var decodeString = [];
     for (var i = 0; i < arrayLetters.length; i++) {
         if (arrayLetters[i] === "**********") {
             decodeString[i]= " ";
             continue;
         }
         var symbolMorze = '';
         for (var j = 0; j < arrayLetters[i].length; j+=LENGTH_S_MORZE_SYSTEM) {
            symbolMorzeBinar = arrayLetters[i].substring(j, j + LENGTH_S_MORZE_SYSTEM);
            if (symbolMorzeBinar === "10") {
                 symbolMorze += '.';
            } else if (symbolMorzeBinar === "11") {
                 symbolMorze += '-';
            }
         }
         decodeString[i] = symbolMorze;
     }
     
     var decodeStr = '';
     for (i=0; i < decodeString.length; i++) {
        decodeStr += (typeof MORSE_TABLE[decodeString[i]] !== "undefined") ? MORSE_TABLE[decodeString[i]] : " ";
     }
 
     return decodeStr;
}

module.exports = {
    decode
}