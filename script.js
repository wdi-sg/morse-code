/**
 * This program demonstrates how to encode a message to morse code,
 * and how to decode a morse code to a readable message.
 * @author Liang Xin Chloe
 */

var alphabetDecode = decodeAlphabet(alphabet);
var firstWord = 'hello world';
var secondWord = 'we love javascript';
var userInput;

console.log(encodeStringToMorse(firstWord));
console.log(encodeStringToMorse(secondWord));

console.log(decodeMorseToString('... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .'));

console.log(decodeMorseToString('-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-'));

console.log(decodeMorseToString('- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --.'));

userInput = prompt('Please enter a message:');
console.log('Your message is:');
console.log(userInput);
console.log('The morse code of this message is:');
console.log(encodeStringToMorse(userInput));

/**
 * Get a new table that matches morse code to an alphabet.
 * @param {Object} alphabet The alphabet to morse code table.
 * @return {Object} The morse code to alphabet table.
 */
function decodeAlphabet(alphabet) {
  var char;
  var code;
  var alphabetDecode = {};

  for (char in alphabet) {
    code = alphabet[char];
    alphabetDecode[code] = char;
  }

  return alphabetDecode;
}

/**
 * Encode a message to morse code.
 * @param {string} msg A message.
 * @return {string} An encoded message.
 */
function encodeStringToMorse(msg) {
  var morseCode = [];
  var i;
  var char;
  msg = msg.split('');

  for (i = 0; i < msg.length; i++) {
    char = msg[i];

    if (char !== ' ') {
      morseCode.push(alphabet[char]);
    } else {
      morseCode.push(' ');
    }
  }

  return morseCode.join(' ');
}

/**
 * Decode morse code to a readable message.
 * @param {string} morse A morse code message.
 * @return {string} A decoded message.
 */
function decodeMorseToString(morse) {
  var decodedMsg = [];
  var i;
  var code;
  morse = morse.split(' ');

  for (i = 0; i < morse.length; i++) {
    code = morse[i];

    if (code) {
      decodedMsg.push(alphabetDecode[code]);
    } else {
      decodedMsg.push(' ');
    }
  }

  return decodedMsg.join('');
}

