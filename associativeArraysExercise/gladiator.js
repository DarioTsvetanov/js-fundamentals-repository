function solve(arr) {
 
    let gladiators = [];
 
    for (let command of arr) {
       
        if (command == 'Ave Cesar') break;
 
        command = command.split(' ');
 
        if (!command.includes('->')) {
 
            let firstGladiatorName = command[0];
            let secondGladiatorName = command[2];
 
            let firstGladiator = gladiators.find(obj => obj.gladiator == firstGladiatorName);
            let secondGladiator = gladiators.find(obj => obj.gladiator == secondGladiatorName);
 
            if (!firstGladiator || !secondGladiator) continue;
 
            let matchedTechnique = '';
           
            for (let firstGladSkill of firstGladiator.skills) {
               
                for (let secondGladSkill of secondGladiator.skills) {
                   
                    if (firstGladSkill.technique == secondGladSkill.technique) {
 
                        matchedTechnique = firstGladSkill.technique;
                        break;
                    }
                }
            }
 
            if (matchedTechnique == '') continue;
 
            let firstGladSkill = firstGladiator.skills.find(obj => obj.technique == matchedTechnique).skill;
            let secondGladSkill = secondGladiator.skills.find(obj => obj.technique == matchedTechnique).skill;
           
            let firstGladIndex = gladiators.findIndex(obj => obj.gladiator == firstGladiatorName);
            let secondGladIndex = gladiators.findIndex(obj => obj.gladiator == secondGladiatorName);
           
            if (firstGladSkill > secondGladSkill) gladiators.splice(secondGladIndex, 1);
            else gladiators.splice(firstGladIndex, 1);
 
            continue;
        }
       
        let [name, technique, skill] = command.join(' ').split(' -> ');
        skill = Number(skill);
       
        let currentGladiator = gladiators.find(obj => obj.gladiator == name);
 
        if (!currentGladiator) {
 
            gladiators.push({
                totalPoints: skill,
                gladiator: name,
                skills: [{
   
                    technique: technique,
                    skill: skill
                }]
            });
 
            continue;
        }
       
        let foundTechnique = currentGladiator.skills.find(obj => obj.technique == technique);
 
        if (!foundTechnique) {
 
            currentGladiator.skills.push({
                technique: technique,
                skill: skill
            });
 
            currentGladiator.totalPoints += skill;
            continue;
        }
 
        if (foundTechnique.skill < skill) {
 
            foundTechnique.skill = skill;
            currentGladiator.totalPoints += skill;
        }
    }
 
    gladiators.sort((a, b) => b.totalPoints - a.totalPoints || a.gladiator.localeCompare(b.gladiator));
   
    for (let currGladiator of gladiators) {
       
        currGladiator.skills.sort((a, b) => b.skill - a.skill || a.technique.localeCompare(b.technique));
       
        console.log(`${currGladiator.gladiator}: ${currGladiator.totalPoints} skill`);
 
        for (let atributes of currGladiator.skills) {
           
            console.log(`- ${atributes.technique} <!> ${atributes.skill}`);
        }
       
    }
}
solve([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
])
/* solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]) */