/* function gladiatorInventory(arr) {

    let itemSet = arr.shift().split(' ');

    let buy = (arr, item) => {
        
        if (!arr.includes(item)) {
            
            arr.push(item);
        }

        return arr;
    };

    let trash = (arr, item) => {

        if (arr.includes(item)) {

            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }

        return arr;
    };

    let repair = (arr, item) => {

        if (arr.includes(item)) {
            
            let index = arr.indexOf(item);
            arr.splice(index, 1);
            arr.push(item);
        }

        return arr;
    };

    let upgrade = (arr, item, mod) => {

        if (arr.includes(item)) {

            let index = arr.indexOf(item);
            let addOn = `${item}:${mod}`;

            arr.splice(index + 1, 0, addOn)
        }

        return arr;
    };
    
    while (true) {

        let curr = arr.shift();

        if (!curr) break;

        curr = curr.split(' ');

        let command = curr[0];
        let item = curr[1];

        if (command == 'Buy') buy(itemSet, item);
        else if (command == 'Trash') trash(itemSet, item);
        else if (command == 'Repair') repair(itemSet, item);
        else if (command == 'Upgrade') {

            item = item.split('-');

            let equipment = item[0];
            let mod = item[1];

            upgrade(itemSet, equipment, mod);
        }

    }

    console.log(itemSet.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
) */