function solve(input) {

    let messagesNumber = Number(input.shift());

    let decryptionPattern = /@(?<name>[a-zA-Z]+)[^@\-!:>]*:(?<population>\-*\d+)\![^@\-!:>]*(?<attackType>[AD])\![^@\-!:>]*\->(?<soldierCount>\-*\d+)/;

    let matchedCharsCounter = 0;

    let decryptedMessage = '';

    let planetTypes = [
        {
            type: 'Attacked',
            counter: 0,
            names: []
        },
        {
            type: 'Destroyed',
            counter: 0,
            names: []
        }
    ];

    for (let i = 0; i < messagesNumber; i ++) {

        let message = input[i];

        for (let ch of message) {
            
            let chAscii = ch.charCodeAt(0);

            if (chAscii == 65 || (chAscii >= 82 && chAscii <= 84) || chAscii == 97 || (chAscii >= 114 && chAscii <= 116)) matchedCharsCounter ++;
        }

        for (let ch of message) {
            
            let newAscii = String.fromCharCode(ch.charCodeAt(0) - matchedCharsCounter);

            decryptedMessage += newAscii;
        }
        let match = decryptionPattern.exec(decryptedMessage);

        decryptedMessage = '';
        matchedCharsCounter = 0;

        if (!match) continue;

        if (match[3] == 'A') {

            planetTypes[0].names.unshift(match[1]);
            planetTypes[0].counter ++;
        }
        else {

            planetTypes[1].names.push(match[1]);
            planetTypes[1].counter ++;
        }


    }

    for (let planet of planetTypes) {
        
        console.log(`${planet.type} planets: ${planet.counter}`);

        for (let name of planet.names) {
            
            console.log(`-> ${name}`);
        }
    }
}

solve([ '2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR' ]);