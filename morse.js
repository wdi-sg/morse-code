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
  z: '--..'
};

var word = "hello world";
var wordArr1= word.split('');




var morseCode = function(word) {

alphabetArr = Object.keys(alphabet);
//console.log(alphabetArr);

      var morseCodeArr =[];

for ( var i=0; i<wordArr1.length;i++){
    for (var j=0; j<alphabetArr.length; j++) {
        if(wordArr1[i] === alphabetArr[j]){
        morseCodeArr.push(alphabet[alphabetArr[j]]);
        }
    }
} return morseCodeArr;
}


console.log(morseCode("banana"));
console.log(morseCode("one republic"));

/* Simpler method
//JS runs <space> as undefined. The code below does not run any undefined items.
if (alphabet [wordSplit[i]] !== undefined){
morseCodeArr.push(alphabet[wordSplit[i]] );
} */













