function solve(input) {

    let n = Number(input.shift());

    let pattern = /!(?<cmd>[A-Z][a-z]{2,})!:\[(?<msg>[a-zA-Z]{8,})\]/;

    for (let i = 0; i < n; i ++) {

        let line = input[i];

        let validInput = pattern.exec(line);

        if (!validInput) {

            console.log('The message is invalid');

            continue;
        }

        let encrypted = [];

        let lettersPattern = /\w/g

        let letters = validInput.groups.msg.match(lettersPattern)

        for (let ch of letters) {
            
            encrypted.push(ch.charCodeAt(0));
        }

        console.log(`${validInput.groups.cmd}: ${encrypted.join(' ')}`);
    }
}

solve([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ]);