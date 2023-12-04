# Advent of Code 2023

<div style="font-size:20px">
C was my first language when I learned how to code, and JavaScript still feels new inside my head. Will do my best to solve it in JavaScript.<br><br>
My challenge:
<ul>
    <li>Try solving it using C or Javascript</li>
    <li>Understand the question and search for a cheatsheet or resources if needed.</li>
    <li>Don't overthink a question.</li>
    <li>Never give up, and always have a good night's sleep.</li>
    <li>Continue learning the ZeroToMastery course. <strong>Don't stop learning</strong></li>
</ol>
</div>

<details>
	<summary>
		<b>Question 1</b>
	</summary>
	<br />
	<ul>
		<li>
			--- Day 1: Trebuchet?! ---Part One<br>
			<p>
				<br>Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.
				<br><br>
				You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.
				<br><br>
				Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
				<br><br>
				You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").
				<br><br>
				As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.
				<br><br>
				The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
				<br><br>
				For example:
				<br><br>
				1abc2<br>
				pqr3stu8vwx<br>
				a1b2c3d4e5f<br>
				treb7uchet<br><br>
				In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
				<br><br>
				Consider your entire calibration document. What is the sum of all of the calibration values?
			</p>
		</li>
		<li>
			--- Part Two ---
			<br>
			<p>
				<br>
				Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
				<br><br>
				Equipped with this new information, you now need to find the real first and last digit on each line. For example:
				<br><br>
				two1nine<br>
				eightwothree<br>
				abcone2threexyz<br>
				xtwone3four<br>
				4nineeightseven2<br>
				zoneight234<br>
				7pqrstsixteen<br><br>
				In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.
				<br><br>
				What is the sum of all of the calibration values?
			</p>
		</li>
	</ul>
</details>

<details>
	<summary>
		<b>Question 2</b>
	</summary>
	<br />
	<ul>
		<li>
			--- Day 2: Cube Conundrum ---Part One<br>
			<p>
				<br>
				You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.
				<br><br>
				The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?
				<br><br>
				As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.
				<br><br>
				To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.
				<br><br>
				You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).
				<br><br>
				For example, the record of a few games might look like this:
				<br><br>
				Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green<br>
				Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue<br>
				Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red<br>
				Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red<br>
				Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green<br><br>
				In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.
				<br><br>
				The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?
				<br><br>
				In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.
				<br><br>
				Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?
			</p>
		</li>
		<li>
			--- Part Two ---<br>
			<p>
				<br>
				The Elf says they've stopped producing snow because they aren't getting any water! He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!
				<br><br>
				As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?
				<br><br>
				Again consider the example games from earlier:
				<br><br>
				Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green<br>
				Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue<br>
				Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red<br>
				Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red<br>
				Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green<br><br>
			<ul>
				<li>In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.</li>
				<li>Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.</li>
				<li>Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.</li>
				<li>Game 4 required at least 14 red, 3 green, and 15 blue cubes.</li>
				<li>Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.</li>
			</ul>
            <br>
			The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.
            <br>
			For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?
			</p>
		</li>
	</ul>
</details>

<details>
    <summary>
        <b>Question 3</b>
    </summary>
    <br />
    <ul>
        <li>
            --- Day 3: Gear Ratios ---<br>
            <p>
                You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source, but this is as far as he can bring you. You go inside.
                <br><br>
                It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.
                <br><br>
                "Aaah!"
                <br><br>
                You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.
                <br><br>
                The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.
                <br><br>
                The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)
                <br><br>
                Here is an example engine schematic:
                <br><br>
                467..114..<br>
                ...*......<br>
                ..35..633.<br>
                ......#...<br>
                617*......<br>
                .....+.58.<br>
                ..592.....<br>
                ......755.<br>
                ...$.*....<br>
                .664.598..<br><br>
                In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.
                <br><br>
                Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?<br>
            </p>
        </li>
        <li>
            <br>
            <p>
                <br>
            </p>
        </li>
    </ul>
</details>

<details>
	<summary>
		<b>Question </b>
	</summary>
	<br />
	<ul>
		<li>
			<br>
			<p>
            <br>
			</p>
		</li>
		<li>
			<br>
			<p>
            <br>
			</p>
		</li>
	</ul>
</details>

<!-- <details>
    <summary>
        <b>Solution 1</b>
    </summary>
<br />
        <a href="">File</a>

</details>


<details>
    <summary>
        <b>Solution 2</b>
    </summary>
<br />
        <ul>
            <li>
                <br>
<p>

</p>
            </li>
            <li>
                <br>
<p>

</p>
            </li>
        </ul>
</details>



<hr>
<!-- npm install -g ts-node typescript '@types/node' -->
