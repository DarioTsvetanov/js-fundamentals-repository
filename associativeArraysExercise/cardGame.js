function solve(arr) {

    let playersObject = {};

    let calculateScore = (arr) => {

        let power = 0;
        let type = 0;
        let score = 0;

        for (let card of arr) {
            
            let [firstChar, secondChar, thirdChar] = card.split('');

            let asciiCode = firstChar.charCodeAt(0)

            if (asciiCode == 49) power = 10;
            else if (asciiCode > 49 && asciiCode <= 57) {

                power = String.fromCharCode(asciiCode);
                power = Number(power)
            }
            else {
                
                if (firstChar == 'J') power = 11;
                else if (firstChar == 'Q') power = 12;
                else if (firstChar == 'K') power = 13;
                else if (firstChar == 'A') power = 14;
            }

            if (secondChar == 0) {

                if (thirdChar == 'S') type = 4;
                else if (thirdChar == 'H') type = 3;
                else if (thirdChar == 'D') type = 2;
                else if (thirdChar == 'C') type = 1;
            }
            else {

                if (secondChar == 'S') type = 4;
                else if (secondChar == 'H') type = 3;
                else if (secondChar == 'D') type = 2;
                else if (secondChar == 'C') type = 1;
            }

            score += (type * power)
        }

        return score;
    }

    for (let player of arr) {
        
        let [name, hand] = player.split(': ');

        let cards = hand.split(', ');

        if (!playersObject[name]) {

            playersObject[name] = [];

            for (let card of cards) {
                
                if (!playersObject[name].includes(card)) {

                    playersObject[name].push(card);
                }
            }

            continue;
        }

        for (let card of cards) {
            
            if (!playersObject[name].includes(card)) {
                playersObject[name].push(card);
            }
        }
    }

    for (let key in playersObject) {
        
        let currentScore = calculateScore(playersObject[key]);
        console.log(`${key}: ${currentScore}`);
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
