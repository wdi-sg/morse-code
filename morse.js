var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..',
  ' ': ' '
};

var firstWord = "hello world";
var secondWord = "we love javascript";


var firstWordAttempt = [];
var secondWordAttempt = [];
var further1Attempt = [];
var further2Attempt = [];
var further3Attempt = [];

var swap =function(json) {
  var tempObj = {};
  for(var key in json){
    tempObj[json[key]] = key;
  };
  return tempObj;
};

var decode = function(code) {
    var temp2 = [];
    for (i=0; i<code.length; i++) {
    var temp = code[i];
    temp2.push(flipAlphabet[temp]);
};
return temp2;
}

var flipAlphabet = swap(alphabet);

firstWord = firstWord.split('');

firstWordDecoded = swap(firstWord);

for (i=0; i<firstWord.length; i++) {
    var temp = firstWord[i];
    firstWordAttempt.push(alphabet[temp]);
};


for (i=0; i<secondWord.length; i++) {
    var temp = secondWord[i];
    secondWordAttempt.push(alphabet[temp]);
};

console.log(firstWordAttempt);
console.log(secondWordAttempt);

var further1 = '... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .'
var further2 = '-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-'
var further3 = '- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --. ....'


further1 = further1.split(' ')
further1Attempt = decode(further1);

// for (i=0; i<further1.length; i++) {
//     var temp = further1[i];
//     further1Attempt.push(flipAlphabet[temp]);
// };


further2 = further2.split(' ')
further2Attempt = decode(further2);

// for (i=0; i<further2.length; i++) {
//     var temp = further2[i];
//     further2Attempt.push(flipAlphabet[temp]);
// };

further3 = further3.split(' ')
further3Attempt = decode(further3);
// for (i=0; i<further3.length; i++) {
//     var temp = further3[i];
//     further3Attempt.push(flipAlphabet[temp]);
// };

console.log(further1Attempt.toString());
console.log(further2Attempt.toString());
console.log(further3Attempt.toString());


