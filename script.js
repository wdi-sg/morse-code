var input = prompt("Please input a sentence or morse code");

if (input[0] == "." || input[0] == "-") {
    var morseArr = input.split(" ");
    var result = [];
    for (var i in morseArr) {
        result.push(Object.keys(alphabet).find(key => alphabet[key] === morseArr[i]))
    }
    result = result.toString();
    alert(result);

} else {
    var wordArr = input.split("")
    var result = [];
    for (var i in wordArr) {
        result.push(alphabet[Object.keys(alphabet).find(key => key === wordArr[i])])
        // debugger;
    }
    result = result.toString();
    alert(result);
}


