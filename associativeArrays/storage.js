/* function storage(arr) {

    let storage = new Map();

    for (let el of arr) {
        
        let [item, quan] = el.split(' ');
        quan = Number(quan);

        if (storage.has(item)) {

            storage.set(item, (quan + storage.get(item)));
            continue;
        }

        storage.set(item, quan);
    }

    for (let el of storage) {
        
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
storage([
'tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
) */ 