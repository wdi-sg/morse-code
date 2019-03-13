var firstWord = "hello world";
var secondWord = "we love javascript";
var userWord = prompt("Type something to convert into morse code")

var morse = function(word, letters){
    var morseWord= '';
    var split = word.split('');
    for (var i =0; i<split.length; i++){
        for(var j = 0; j< Object.keys(letters).length; j++){        // can be replced with alphabet[split[i]];
            var indAlphabets = Object.keys(letters)[j];             // if (alphabet [split[i] ] !== undefined){
            var indMorse = Object.values(letters)[j];               // arr.push(alphabet[ split[i] ]);
            if (split[i] === indAlphabets){
                split[i] = indMorse;
                morseWord = morseWord + split[i]+ " ";
            }
        }
    }
    return morseWord;
}


console.log(morse(firstWord, alphabet));
console.log(morse(secondWord, alphabet));
console.log(morse(userWord, alphabet));

var reverseMorse = function(message, alphaVar){
    //replace triple space with single

    var alphabetical = '';
    var split = message.split(' ');
    for ( var i = 0; i < split.length; i++ ){
        for(var j = 0; j< Object.keys(alphaVar).length; j++){
            var indAlphabets = Object.keys(alphaVar)[j];
            var indMorse = Object.values(alphaVar)[j];
                if (split[i] === indMorse){
                    split[i] = indAlphabets;
                    alphabetical = alphabetical + split[i] +" ";
                }

        }
    }
    return alphabetical;

}

var decoded = reverseMorse(morsecode, alphabet);
console.log(decoded);

