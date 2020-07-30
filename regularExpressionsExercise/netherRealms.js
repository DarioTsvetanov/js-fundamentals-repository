function solve(input) {

    input = input[0].split(/\,[ ]*/g).sort((a, b) => a.localeCompare(b));
    
    let healthPattern = /[^0-9+\-\*\/\.]/g;

    let health = 0;

    let damagePattern = /\-?\d+\.?\d*/g;

    let multyOrDivPattern = /[/*]/g;

    let damage = 0;

    let list = [];

    for (let line of input) {
        
        let letters = line.match(healthPattern);

        if (letters) {

            for (let ch of letters) {
                
                health += ch.charCodeAt(0);
            }
        }

        let numbers = line.match(damagePattern);

        if (numbers) {

            for (let num of numbers) {
            
                damage += Number(num);
            }
        }
        
        let signs = line.match(multyOrDivPattern);

        if (signs) {

            for (let sign of signs) {
                
                if (sign == '*') damage *= 2;
                else damage = damage / 2;
            }
        }

        list.push({
            name: line,
            health,
            damage
        })

        damage = 0;
        health = 0;
    }

    for (let item of list) {
        
        console.log(`${item.name} - ${item.health} health, ${item.damage.toFixed(2)} damage`);
    }
}

// solve(['dario-1-2s32/, dario']);
// solve([ 'M3ph-0.5s-0.5t0.0**' ]);
// solve([ 'M3ph1st0**, Azazel' ]);
solve([ 'Gos/ho' ]);