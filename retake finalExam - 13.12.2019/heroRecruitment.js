function solve(input) {

    let spellbook = [];

    for (let line of input) {
        
        if (line == 'End') break;

        let [cmd, heroName, spellName] = line.split(' ');

        let hero = spellbook.find(obj => obj.name == heroName);

        if (cmd == 'Enroll') {

            if (!hero) {

                spellbook.push({
                    name: heroName,
                    spells: []
                });
            }
            else console.log(`${heroName} is already enrolled.`);
        }
        else if (cmd == 'Learn') {

            if (!hero) console.log(`${heroName} doesn't exist.`);
            else {

                if (hero.spells.includes(spellName)) console.log(`${heroName} has already learnt ${spellName}.`);
                else hero.spells.push(spellName);
            }
        }
        else if (cmd == 'Unlearn') {

            if (!hero) console.log(`${heroName} doesn't exist.`);
            else {

                if (!hero.spells.includes(spellName)) console.log(`${heroName} doesn't know ${spellName}.`);
                else {

                    let index = hero.spells.indexOf(spellName);

                    hero.spells.splice(index, 1);
                }
            }
        }
    }

    spellbook.sort((a, b) => b.spells.length - a.spells.length || a.name.localeCompare(b.name));

    console.log('Heroes:');

    for (let person of spellbook) {
        
        console.log(`== ${person.name}: ${person.spells.join(', ')}`);
    }
}

/* solve([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]); */

solve([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
])