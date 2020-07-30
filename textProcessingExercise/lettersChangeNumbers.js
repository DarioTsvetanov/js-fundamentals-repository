function solve(input) {

    let sum = 0;

    let number = 0;

    input = input.split(' ')

    for (let comb of input) {
        
        if (comb.length == 0) continue;

        let firstLetterAscii = comb[0].charCodeAt(0);

        number = Number(comb.substring(1, comb.length - 1));

        let lastLetterAscii = comb[comb.length - 1].charCodeAt(0);

        if (firstLetterAscii >= 97 && firstLetterAscii <= 122) {

            sum = sum + (number * (firstLetterAscii - 96));
        }
        else if (firstLetterAscii >= 65 && firstLetterAscii <= 90) {

            sum = sum + (number / (firstLetterAscii - 64));
        }

        if (lastLetterAscii >= 97 && lastLetterAscii <= 122) {

            sum = sum + (lastLetterAscii - 96)
        }
        else if (lastLetterAscii >= 65 && lastLetterAscii <= 90) {

            sum = sum - (lastLetterAscii - 64)
        }
    }

    console.log(sum.toFixed(2));
}

solve('a1A')