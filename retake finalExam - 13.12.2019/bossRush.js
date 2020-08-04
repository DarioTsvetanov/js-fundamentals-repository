function solve(input) {

    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [a-zA-Z]+)#/;

    let n = Number(input.shift());

    for (let i = 0; i < n; i ++) {

        let line = input[i];

        let match = pattern.exec(line);

        if (!match) {

            console.log('Access denied!');

            continue;
        }

        console.log(`${match.groups.name}, The ${match.groups.title}`);
        console.log(`>> Strength: ${match.groups.name.length}`);
        console.log(`>> Armour: ${match.groups.title.length}`);
    }
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]);

  solve([
    '3',
    '|PETER|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);