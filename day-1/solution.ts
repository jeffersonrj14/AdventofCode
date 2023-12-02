import * as fs from 'fs';

const files: string = fs.readFileSync('input.txt', 'utf-8').toString();
let x: number = 0; //part one
let y: number = 0; //part two

files
  .split('\n')
  .forEach((line: string) => {
    const xdigits: string[] = [];
    const ydigits: string[] = [];

    for (let i: number = 0; i < line.length; i++) {
      const word: string = line[i];

      if (word.match(/\d/)) {
        xdigits.push(word);
        ydigits.push(word);
      }

      const numberWords: string[] = [
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

      for (let j: number = 0; j < numberWords.length; j++) {
        const val: string = numberWords[j];

        if (line.slice(i).startsWith(val)) {
          ydigits.push(String(j + 1));
        }
      }
    }

    x += parseInt(xdigits[0] + xdigits[xdigits.length - 1]);
    y += parseInt(ydigits[0] + ydigits[ydigits.length - 1]);
  });

console.log(x);
console.log(y);

