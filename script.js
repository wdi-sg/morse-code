var loop = true;
while (loop) {
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
        }
        result = result.join(" | ");
        alert(result);
    }
    loop = prompt("Do you want to continue? Enter 'y'");
    if (loop[0].toLowerCase() == "y") {
        loop = true;
    } else {
        loop = false;
    }
}



