/* function dungeon(str) {
    let arr = str.split('|');
    let health = 100;
    let coins = 0;

    for (let i = 0; i < arr.length; i ++) {
        let room = arr[i].split(' ');
        let item = room[0];
        let number = room[1];

        if (item == 'potion') {

            if (health < 100) {

                let diff = 100 - health;

                if (diff < Number(number)) {
                    console.log(`You healed for ${diff} hp.`);
                }
                else {
                    console.log(`You healed for ${number} hp.`);
                }

                health += Number(number);
            }
            
            if (health > 100) {
                health = 100;
            }
            
            
            console.log(`Current health: ${health}`);
            
        }
        else if (item == 'chest') {
            coins += Number(number);

            console.log(`You found ${number} coins.`);
            
        }
        else {
            health -= Number(number);

            if (health > 0) {
                console.log(`You slayed ${item}.`);
                
            }
            else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                return;
                
            }
        }
    
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeon('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'); */