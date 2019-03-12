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

##### Hints: (don't look unless you need to!)
Each letter of the alphabet is given as a key in the array.

You need to translate every letter in the input string into a bunch of dots and dashes (the value at a particular key in the object).

This repetition of the translation action implies a loop.

The data that this loops runs on, where you translate each letter into a set of dots an dashes, implies an array of characters (one element for each letter of the word- `['c','a','t']` represents the word `cat`).

You can transform a string into an array of individual characters easily in javascript:

```
var word = "hello";
var wordArray = word.split('');
```
