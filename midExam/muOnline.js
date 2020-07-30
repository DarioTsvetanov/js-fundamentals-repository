function muOnline(arr) {
 
    let health = 100;
    let bitcoins = 0;
 
    let commandArr = arr[0].split('|');
 
    for (let i = 0; i < commandArr.length; i ++) {
 
        let [command, num] = commandArr[i].split(' ');
        num = Number(num);
 
        if (command == 'potion') {
 
            if (num + health > 100) {
 
                console.log(`You healed for ${100 - health} hp.`);
 
                health = 100;
            }
            else {
               
                health += num;
               
                console.log(`You healed for ${num} hp.`);
            }
 
            console.log(`Current health: ${health} hp.`);
        }
        else if (command == 'chest') {
 
            bitcoins += num;
 
            console.log(`You found ${num} bitcoins.`);
        }
        else {
 
            health -= num;
 
            if (health > 0) {
 
                console.log(`You slayed ${command}.`);
            }
            else {
 
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }
 
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}  
muOnline([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])