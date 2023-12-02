// It took me 4 hours to understand because I lack problem-solving skills, that's why I joined Advent of Code.
// Started late because I'm quite busy.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    FILE *file = fopen("input.txt", "r");
    if (file == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    char line[100];
    int x = 0; //part one
    int y = 0; //part two

    while (fgets(line, sizeof(line), file)) {
        int xdigits[100];
        int ydigits[100];
        int xIndex = 0;
        int yIndex = 0;

        for (int i = 0; i < strlen(line); i++) {
            char word = line[i];
            if (word >= '0' && word <= '9') {
                xdigits[xIndex] = word - '0';
                ydigits[yIndex] = word - '0';
                xIndex++;
                yIndex++;
            }

            char *numberWords[] = {
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine"
            };
            int numberWordsLength = sizeof(numberWords) / sizeof(numberWords[0]);

            for (int j = 0; j < numberWordsLength; j++) {
                char *val = numberWords[j];
                if (strncmp(line + i, val, strlen(val)) == 0) {
                    ydigits[yIndex] = j + 1;
                    yIndex++;
                }
            }
        }

        x += xdigits[0] * 10 + xdigits[xIndex - 1];
        y += ydigits[0] * 10 + ydigits[yIndex - 1];
    }

    fclose(file);

    printf("%d\n", x); // 54450
    printf("%d\n", y); // 54265

    return 0;
}


