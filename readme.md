# Morse Code

Given the following alphabet:

```
{
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
}
```

Try encoding the following strings:

```var firstWord = "hello world";```

```var secondWord = "we love javascript";```

## Further
Accept user input and be able to output the encoded value. (using prompt)

## Bonus
Decode the following messages:
```
... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .
```
```
-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-
```
```
- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --.
....
```

##### Hint: (don't look unless you need to!)
Each letter of the alphabet is given as a key in the array.
You need to translate every letter in the input string into a different string.
This repetition of the translation action implys a loop.
The data that this loops runs on, where you translate each letter into a set of dots an dashes implys a loop that runs over an array of characters (one element for each letter of the word).
You can transform a string into an array of individual characters easily in javascript:

```
var word = "hello";
var wordArray = word.split('');
```
