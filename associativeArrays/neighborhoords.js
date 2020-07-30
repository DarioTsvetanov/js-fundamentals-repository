function neighborhoords(arr) {

    let neighborhoord = arr.shift().split(', ');

    let map = new Map();

    for (let place of neighborhoord) {
        
        map.set(place, []);

    }

    for (let command of arr) {
        
        let [street, person] = command.split(' - ');

        if (map.has(street)) {

            map.get(street).push(person);
        }
    }

    let neighborhoordsArray = Array.from(map).sort((a, b) => b[1].length - a[1].length);

    
    for (let neighborhoord of neighborhoordsArray) {
        
        console.log(`${neighborhoord[0]}: ${neighborhoord[1].length}`);

        if (neighborhoord[1].length == 0) continue;
        
        for (let i = 0; i < neighborhoord[1].length; i ++) {

            let person = neighborhoord[1][i];
            console.log(`--${person}`);
        }
    }
}
neighborhoords([
'Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)