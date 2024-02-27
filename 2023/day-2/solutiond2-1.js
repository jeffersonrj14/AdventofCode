import * as fs from 'fs';

function partOne(x, y, z) {

    const files = fs.readFileSync('input.txt', 'utf-8');
    let sum = 0;
    
    files
    .split("\n")
    .forEach(line => {
        let [id, gameLine] = line.split(":"), 
        gameId = parseInt(id.slice(5)), 
        games = gameLine.trimStart().split(";"), 
        o = true;
        games.forEach(game => {
            let xSum = 0, 
                ySum = 0, 
                zSum = 0,
            cubes = game.trimStart().split(",");
            cubes.forEach(cube => {
                let [n, color] = cube.trim().split(" ");
                switch (color.toLowerCase()) {
                    case "green": 
                        zSum += parseInt(n);
                        break;
                    case "blue":
                        ySum += parseInt(n);
                        break;
                    case "red":
                        xSum += parseInt(n);
                }
            }), (xSum > x || ySum > y || zSum > z) && (o = !1)
        }), o && (sum += Number(gameId));
    });
    return sum;
}
let red = 12;
let blue = 14;
let green = 13;

console.log(partOne(red, blue, green));

