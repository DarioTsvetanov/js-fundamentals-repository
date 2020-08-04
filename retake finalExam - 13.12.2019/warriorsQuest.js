function solve(input) {

    let string = input.shift();

    for (let line of input) {
        
        if (line == 'For Azeroth') return;

        if (line == 'GladiatorStance') {

            string = string.toUpperCase();

            console.log(string);

            continue;
        }
        else if (line == 'DefensiveStance') {

            string = string.toLowerCase();

            console.log(string);

            continue;
        }

        line = line.split(' ');

        if (line[0] == 'Dispel') {

            let index = Number(line[1]);
            
            if (index < 0 || index >= string.length) {

                console.log('Dispel too weak.');

                continue;
            }

            let letter = line[2];

            string = string.split('');

            string[index] = letter;

            string = string.join('');

            console.log('Success!');
        }
        else if (line[0] == 'Target' && line[1] == 'Change') {

            let substring = line[2];

            let newSubstring = line[3];

            while (true) {

                if (!string.includes(substring)) break;

                string = string.replace(substring, newSubstring);
            }

            console.log(string);
        }
        else if (line[0] == 'Target' && line[1] == 'Remove') {

            let substring = line[2];

            string = string.replace(substring, '');

            console.log(string);
        }
        else console.log("Command doesn't exist!");
    }
}

/* solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
  ]); */

solve([
    'DYN4MIDYNC',
    'Target Change DYN din'
]);  