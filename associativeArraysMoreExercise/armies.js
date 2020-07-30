function solve(input) {
 
    let leaders = [];
 
    for (let line of input) {
       
        line = line.split(' ');
 
        if (line.includes('arrives')) {
 
            line.pop();
 
            leaders.push(
                {
                    leaderName: line.join(' '),
                    totalArmyCount: 0,
                    armies: []
                }
            )
        }
        else if (line.includes('+')) {
 
            let armyCount = Number(line.pop());
            line.pop();
           
            let armyName = line.join('');
           
            for (let leader of leaders) {
               
                let army = leader.armies.find(obj => obj.armyName == armyName);
               
                if (!army) continue;
 
                army.armyCount += armyCount;
               
                leader.totalArmyCount += armyCount;
                break;
            }
        }
        else if (line.includes('defeated')) {
 
            line.pop();
 
            let leaderName = line.join(' ');
 
            let leader = leaders.find(obj => obj.leaderName == leaderName);
 
            if (!leader) continue;
 
            let index = leaders.indexOf(leader);
 
            leaders.splice(index, 1);
        }
        else {
 
            line = line.join(' ').split(', ');
            let armyCount = Number(line.pop());
 
            let [leaderName, armyName] = line[0].split(': ');
 
            let leader = leaders.find(obj => obj.leaderName == leaderName);
 
            if (!leader) continue;
 
            leader.armies.push(
                {
                    armyName: armyName,
                    armyCount: armyCount
                }
            )
 
            leader.totalArmyCount += armyCount;
        }
    }
   
    leaders.sort((a, b) => b.totalArmyCount - a.totalArmyCount);
   
    for (let leader of leaders) {
       
        console.log(`${leader.leaderName}: ${leader.totalArmyCount}`);
       
        leader.armies.sort((a, b) => b.armyCount - a.armyCount);
 
        for (let army of leader.armies) {
           
            console.log(`>>> ${army.armyName} - ${army.armyCount}`);
           
        }
    }
}
solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
 
/* let armies = [
    {
        name: 'Dario',
        totalArmyCount: 10,
        armyInfo: [
            {
                armyName: 'da',
                armyCount: 12
            },
            {
                armyName: 'ne',
                armyCount: 1
            }
        ]
    }
] */