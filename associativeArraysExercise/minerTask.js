function solve(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {

        let ore = arr[i];
        let quantity = Number(arr[i + 1]);

        if (!obj[ore]) {

            obj[ore] = quantity;
        }
        else {

            quantity += obj[ore];
            obj[ore] = quantity;
        }
    }

    for (let key in obj) {
        
        console.log(`${key} -> ${obj[key]}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )