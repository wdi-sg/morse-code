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

// var userInput = prompt("Please type in a word to be translated into morse code.")
// var inputArray = userInput.split(" ")
// var resultArray = []
// var resultAlertString = ""

// for (var string in inputArray){
//     var morseString = ""

//     for (var j = 0; j < inputArray[string].length; j++){
//         var alphabetCheck = alphabet[inputArray[string].charAt(j)]
//         if (typeof alphabetCheck != 'undefined'){
//             morseString += alphabetCheck
//         }
//     }
//     resultArray.push(morseString)
//     resultArray.push(" ")
// }

// for (var item in resultArray){
//     if (resultArray[item] === " "){
//         resultAlertString += " "
//     }
//     resultAlertString += resultArray[item]
// }

// alert(resultAlertString)

// --------------------------------------------

var decodeOne = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."
var decodeTwo = "-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-"
var decodeThree = "- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --. ...."

var firstAnswerArray = decodeOne.split(" ")
console.log(firstAnswerArray)
var resultString = ""

for (var string in firstAnswerArray){
    var morseValue = firstAnswerArray[string]
    if (typeof findKeyByValue(alphabet, morseValue) != 'undefined'){
        resultString += findKeyByValue(alphabet, morseValue)
    } else {
        resultString += " "
    }
}
console.log(resultString);

function findKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value)
}



// --------------------------------------------
