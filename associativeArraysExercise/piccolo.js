/* function solve(arr) {
 
    let parkingSet = new Set();
 
    for (let car of arr) {
       
        let [action, plate] = car.split(', ');
 
        if (action == 'IN') {
 
            parkingSet.add(plate);
        }
        else if (action == 'OUT') {
 
            parkingSet.delete(plate);
        }
    }
 
    let parkingArr = Array.from(parkingSet);
   
    if (parkingArr.length == 0) {
 
        console.log(`Parking Lot is Empty`);
        return;
    }
 
    parkingArr.sort((a, b) => {
       
        let curr = a.slice(2, 6);
        let next = b.slice(2, 6);
       
        return Number(curr) - Number(next);
    })
   
    for (let car of parkingArr) {
       
        console.log(car);
    }
}
solve([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']) */
 
/* function solve(arr) {
 
    let parkingLot = new Map();
 
    for (let car of arr) {
       
        let [action, plate] = car.split(', ');
 
        parkingLot.set(plate, action);
    }
 
    let parkingArray = Array.from(parkingLot).filter(el => el[1] == 'IN');
   
    if (parkingArray.length == 0) {
 
        console.log(`Parking Lot is Empty`);
        return;
    }
 
    parkingArray.sort((a, b) => a.localeCompare(b));
 
    for (let car of parkingArray) {
       
        console.log(car[0]);
    }
}
solve([]) */
 
 function solve(arr) {
 
    let cars = [];
 
    for (let car of arr) {
       
        let [action, plate] = car.split(', ');
 
        if (action == 'IN') {
 
            if (!cars.includes(plate)) {
 
                cars.push(plate);
            }
        }
        else if (action == 'OUT') {
 
            if (cars.includes(plate)) {
 
                let index = cars.indexOf(plate);
                cars.splice(index, 1);
            }
        }
    }
 
    if (cars.length == 0) {
 
        console.log('Parking Lot is Empty');
        return;
    }
 
    cars.sort((a, b) => a.localeCompare(b));
 
    for (let car of cars) {
       
        console.log(car);
    }
}
solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);