function solve(input) {

    let text = input.shift();

    let caseType = input.shift();

    let sum = 0;

    for (let ch of text) {
        
        let ascii = ch.charCodeAt(0);

        if (caseType == 'LOWERCASE') {

            if (ascii >= 97 && ascii <= 122) {

                sum += ascii;
            }
        }
        else if (caseType == 'UPPERCASE') {

            if (ascii >= 65 && ascii <= 90) {

                sum += ascii;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

solve([ 'AC/DC', 'UPPERCASE'])