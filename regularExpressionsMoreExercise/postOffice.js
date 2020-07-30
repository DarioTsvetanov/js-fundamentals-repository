function solve(input) {

    let [firstPart, secondPart, thirdPart] = input[0].split('|');

    let capLettPatt = /([#\$%\*\&]).+?\1/;

    let codeWordPatt = /\d{1,2}:\d{2}/g;
    
    let capitalLetters = capLettPatt.exec(firstPart)[0];

    capitalLetters = capitalLetters.replace(/[^A-Z]/g, '').split('');
    
    let codesAndWords = secondPart.match(codeWordPatt);

    let lettersAndLengths = [];

    for (let el of codesAndWords) {

        let [ascii, length] = el.split(':').map(Number);

        lettersAndLengths.push(`${String.fromCharCode(ascii)}:${length}`);
    }

    thirdPart = thirdPart.split(' ');

    for (let letter of capitalLetters) {

        for (let word of thirdPart) {

            // for (let el of codesAndWords) {

            if (word[0] != letter) continue;

                // let [ascii, length] = el.split(':').map(Number);

                // if (word.length !== length + 1) continue;

                // if (String.fromCharCode(ascii) !== word[0]) continue;

                if (!lettersAndLengths.includes(`${word[0]}:${word.length - 1}`)) continue;

                console.log(word);

                // let index = capitalLetters.indexOf(word[0]);

                // capitalLetters.splice(index, 1);

                // break;
            // }
        }
    }
}