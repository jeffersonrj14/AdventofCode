//It took me 4 hours to understand because I lack problem-solving skills, that's why I joined Advent of Code.

import * as fs from 'fs';

const files = fs.readFileSync('input.txt', 'utf-8').toString();
let x = 0; //part one
let y = 0; //part two

files
.split('\n')
.forEach((line) => {
  const xdigits = [];
  const ydigits = [];

  for (let i = 0; i < line.length; i++) {
    const word = line[i];

    if (word.match(/\d/)) {
        xdigits.push(word);
        ydigits.push(word);
    }
    
    const numberWords = 
    [
        'one', 
        'two', 
        'three', 
        'four', 
        'five', 
        'six', 
        'seven', 
        'eight', 
        'nine'
    ];
    for (let j = 0; j < numberWords.length; j++) {
      const val = numberWords[j];
      if (line
        .slice(i)
        .startsWith(val)) {
        ydigits.push(String(j + 1));
      }
    }
  }

  x += parseInt(xdigits[0] + xdigits[xdigits.length - 1]);
  y += parseInt(ydigits[0] + ydigits[ydigits.length - 1]);
});

console.log(x); // 54450
console.log(y); // 54265


