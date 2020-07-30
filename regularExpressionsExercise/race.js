function solve(input) {
 
    let nameList = input.shift().split(', ');
 
    let namePattern = /[a-zA-Z]/g;
 
    let numberPattern = /[1-9]/g;
 
    let ranking = [];
 
    while (true) {
 
        let line = input.shift();
 
        if (line == 'end of race') break;
 
        let currentName = line.match(namePattern).join('');
       
        let currentDistance = line.match(numberPattern).map(Number).reduce((a, b) => a + b, 0);
 
        if (!nameList.includes(currentName)) continue;
       
        let findPerson = ranking.find(obj => obj.name == currentName);
       
        if (!findPerson) {
 
            ranking.push({
                name: currentName,
                distance: currentDistance
            });
        }
        else findPerson.distance += currentDistance
    }
 
    ranking.sort((a, b) => b.distance - a.distance);
 
    if (ranking.length > 3) ranking.length = 3;
   
    for (let i = 0; i < ranking.length; i ++) {
 
        if (i == 0) console.log(`1st place: ${ranking[i].name}`);
        else if (i == 1) console.log(`2nd place: ${ranking[i].name}`);
        else if (i == 2) console.log(`3rd place: ${ranking[i].name}`);
    }
}
 
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]);