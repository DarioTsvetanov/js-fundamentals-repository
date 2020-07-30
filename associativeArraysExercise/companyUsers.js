function solve(arr) {

    let obj = {};

    for (let el of arr) {
        
        let [employer, employee] = el.split(' -> ');

        if (!obj[employer]) {

            obj[employer] = [employee];
            continue;
        }

        if (!obj[employer].includes(employee)) {

            obj[employer].push(employee);
        }
    }

    let keys = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (let key of keys) {
        
        console.log(key);

        for (let employee of obj[key]) {
            
            console.log(`-- ${employee}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
  ])