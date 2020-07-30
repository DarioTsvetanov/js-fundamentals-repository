function inventory(arr) {
 
    let storage = arr.shift().split(', ');
   
    for (let i = 0; i < arr.length; i ++) {
 
        if (arr[i] == 'Craft') break;
 
        let [command, item] = arr[i].split(' - ');
 
        if (command == 'Collect') {
 
            if (storage.includes(item)) continue;
 
            storage.push(item);
        }
        else if (command == 'Drop') {
 
            if (!storage.includes(item)) continue;
 
            let index = storage.indexOf(item);
            storage.splice(index, 1);
        }
        else if (command == 'Combine Items') {
 
            let [oldItem, newItem] = item.split(':');
 
            if (!storage.includes(oldItem)) continue;
 
            let index = storage.indexOf(oldItem);
            storage.splice(index + 1, 0, newItem);
        }
        else if (command == 'Renew') {
 
            if (!storage.includes(item)) continue;
 
            let index = storage.indexOf(item);
            let replacement = storage.splice(index, 1);
            storage.push(replacement);
        }
    }
 
    console.log(storage.join(', '));
   
}
// inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);