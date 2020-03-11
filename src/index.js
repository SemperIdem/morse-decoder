const MORSE_ALPHABET = { 
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


function separateEndCodeElement(endCode) {
  return endCode.match(/.{1,10}/g).map( element => {
    
    if(element.length < 10) {
        element = Array(10 - element.length + 1).join('0') + element;
    }
    return element;
  });
}


function decodeToMorse(endCode) {
  let codeElements = endCode.split('')
   .map((current, index, array) => {
      return current + array[index + 1];
  }).filter(function(el, i) {
    return i % 2 == 0;
  });

  return codeElements.map((element) => {
    switch(element) {
      case '10':
        return '.';
      case '11':
        return '-';
    }
  }).join('');
}

function getLetter(morseCode) {
  return MORSE_ALPHABET[morseCode];
}


function decode(expr) {
  words = expr.split('**********');
  let final = '';
  for (let i = 0; i < words.length; i++) {
    letters = separateEndCodeElement(words[i]);
    for (let i = 0; i < letters.length; i++) {
      let letter = decodeToMorse(letters[i]);
      final += MORSE_ALPHABET[letter];
  }
    final += ' ';
}
  return final.trim();
}



module.exports = {
  decode
}
