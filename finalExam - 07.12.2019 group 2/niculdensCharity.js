function solve(input) {

    let message = input.shift();

    while (true) {

        let line = input.shift();

        if (line == 'Finish') break;

        let [cmd, firstSymbol, secondSymbol] = line.split(' ');

        if (cmd == 'Replace') {

            message = message.split('');

            for (let i = 0; i < message.length; i ++) {

                if (message[i] == firstSymbol) message[i] = secondSymbol;
            }

            message = message.join('');

            console.log(message);
        }
        else if (cmd == 'Cut') {

            let startIndex = Number(firstSymbol);

            let endIndex = Number(secondSymbol);

            if (startIndex < 0 || startIndex >= message.length || endIndex < 0 || endIndex >= message.length) {

                console.log('Invalid indexes!');

                continue;
            }

            let diff = endIndex - startIndex + 1;

            message = message.split('');

            message.splice(startIndex, diff);

            message = message.join('');

            console.log(message);
        }
        else if (cmd == 'Make') {

            if (firstSymbol == 'Upper') message = message.toUpperCase();
            else if (firstSymbol == 'Lower') message = message.toLowerCase();

            console.log(message);
        }
        else if (cmd == 'Check') {

            if (message.includes(firstSymbol)) console.log(`Message contains ${firstSymbol}`);
            else console.log(`Message doesn't contain ${firstSymbol}`);
        }
        else {

            let startIndex = Number(firstSymbol);

            let endIndex = Number(secondSymbol);

            if (startIndex < 0 || startIndex >= message.length || endIndex < 0 || endIndex >= message.length) {

                console.log('Invalid indexes!');

                continue;
            }

            let substring = message.substring(startIndex, startIndex + endIndex);

            let sum = 0;

            for (let ch of substring) {
                
                sum += ch.charCodeAt(0);
            }

            console.log(sum);
        }
    }
}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 2',
    'Cut 1 4',
    'Finish'
]);