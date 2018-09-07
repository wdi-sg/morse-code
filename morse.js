// //alphabet array
// var alphabet = {
//   a: '.-',
//   b: '-...',
//   c: '-.-.',
//   d: '-..',
//   e: '.',
//   f: '..-.',
//   g: '--.',
//   h: '....',
//   i: '..',
//   j: '.---',
//   k: '-.-',
//   l: '.-..',
//   m: '--',
//   n: '-.',
//   o: '---',
//   p: '.--.',
//   q: '--.-',
//   r: '.-.',
//   s: '...',
//   t: '-',
//   u: '..-',
//   v: '...-',
//   w: '.--',
//   v: '...-',
//   x: '-..-',
//   y: '-.--',
//   z: '--..'
// };

// console.log(Object.keys(alphabet))

// //input by User
// var inputUser = "hello world"
// var inputUser2 = "we love javascript"

//  //splitting the string into an array
// var inputArray = inputUser.split('')
// var inputArray2 = inputUser2.split('')

//  //turning the keys of alphabet into variable
// var alphabetArray = Object.keys(alphabet)

//  //FUNCTION matching each index of inputarray with alphabetarray
// var converter = function(insertArray){

//     var convertedArray = []

//     for( var i = 0 ; i<insertArray.length ; i++){
//         for(var j = 0 ; j<alphabetArray.length; j++){
//             if(alphabetArray[j] === insertArray[i]){
//                 convertedArray.push(alphabet[alphabetArray[j]])

//             }
//         }

//     }
//     return convertedArray
// }


//////////////FURTHER/////////////////
//input by User
var inputUser = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."

//splitting morse into array
var inputArray = inputUser.split(" ")

//turning keys of alphabet
var alphabetArray = Object.keys(alphabet)

//Function from Morse to word
var converter = function(insertArray){

    var convertedArray = []

    for(var i = 0 ; i<insertArray.length ; i++){
        for(var j = 0 ; j<alphabetArray.length; j++){
            if(alphabetArray[j] === insertArray[i]){
                convertedArray.push(alphabet[alphabetArray[j]])
            }
        }
    }
    return convertedArray
}



