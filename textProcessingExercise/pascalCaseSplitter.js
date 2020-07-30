function solve(string) {

    let next = 0;

    let wordsArray = [];

    let counter = 0;

    while (true) {

        if (counter == string.length) break;

        for (let j = counter; j < string.length; j ++) {

            if (j == string.length - 1) {

                wordsArray.push(string.substring(counter, j + 1));

                console.log(wordsArray.join(', '));

                return;
            }

            next = string[j].charCodeAt(0);

            if (next >= 65 && next <= 90 && counter !== j) {

                wordsArray.push(string.substring(counter, j));

                counter = j;
                
                break;
            }
        }
    }
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')