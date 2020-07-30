function solve(input) {

    input = input[0].replace(/ /g, '').split(',');

    let validationPatt = /([#]{6,10}|[@]{6,10}|[\$]{6,10}|[\^]{6,10})/

    for (let ticket of input) {
        
        if (ticket.length !== 20) {

            console.log('invalid ticket');

            continue;
        }

        let leftSide = ticket.slice(0, 10);

        let rightSide = ticket.slice(10);

        let leftSideMatch = validationPatt.exec(leftSide);

        let rightSideMatch = validationPatt.exec(rightSide);

        if (!leftSideMatch || !rightSideMatch) {

            console.log(`ticket "${ticket}" - no match`);

            continue;
        }

        leftSideMatch = leftSideMatch[0];

        rightSideMatch = rightSideMatch[0];

        if (leftSideMatch.length == 10 && rightSideMatch.length == 10) console.log(`ticket "${ticket}" - 10${leftSideMatch[0]} Jackpot!`);
        else if (leftSideMatch.length > rightSideMatch.length) console.log(`ticket "${ticket}" - ${rightSideMatch.length}${rightSideMatch[0]}`);
        else console.log(`ticket "${ticket}" - ${leftSideMatch.length}${leftSideMatch[0]}`);
    }
}