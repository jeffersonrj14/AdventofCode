import * as fs from 'fs';

function partTwo() {

    const files = fs.readFileSync('input.txt', 'utf-8');
    let sum = 0;

    files
    .split("\n")
    .forEach(line => {
        let [id, gameLine] = line.split(":"),
            games = gameLine.trimStart()
            .split(";"), 
                xMax = 0, 
                yMax = 0, 
                zMax = 0;
        games.forEach(game => {
            let cubes = game.trimStart().split(",");
            cubes.forEach(cube => {
                let [n, color] = cube.trim().split(" ");
                switch (color.toLowerCase()) {
                    case "green": 
                        zMax = Math.max(zMax, parseInt(n));
                        break;
                    case "blue":
                        yMax = Math.max(yMax, parseInt(n));
                        break;
                    case "red":
                        xMax = Math.max(xMax, parseInt(n));
                }
            })
        }), console.log(xMax + " " + yMax + " " + zMax), sum += xMax * yMax * zMax
    }); return sum;
}

console.log(partTwo());