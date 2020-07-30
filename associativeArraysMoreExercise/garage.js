function solve(input) {
 
    let garage = [];
 
    for (let currentLine of input) {
       
        currentLine = currentLine.split(' - ');
        let garageNumber = Number(currentLine.shift());
        let carsInfo = currentLine[0].split(', ');
 
        let currentCar = garage.find(obj => obj.number == garageNumber);
 
        if (!currentCar) {
 
            currentCar = {
                number: garageNumber,
                carInfo: []
            }
 
            garage.push(currentCar);
        }
 
        let tempObj = {};
        for (let car of carsInfo) {
           
            let [key, value] = car.split(': ')
 
            tempObj[key] = value;
        }
 
        currentCar.carInfo.push(tempObj);
    }
   
    let output = '';
 
    for (let car of garage) {
       
        console.log(`Garage № ${car.number}`);
 
        for (let el of car.carInfo) {
           
            output += `--- `
 
            for (let key in el) {
               
                output += `${key} - ${el[key]}, `
               
            }
 
            console.log(output.substring(0, output.length - 2));
            output = '';
        }
    }
 
   
    /* let output = [];
    for (let car of garage) {
 
        console.log(`Garage № ${car.number}`);
 
        for (let el of car.carInfo) {
           
            for (let key in el) {
 
                output.push(`${key} - ${el[key]}`);
            }
 
            console.log(`--- ${output.join(', ')}`);
            output = [];
        }
 
    } */
}
 
solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '1 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
  ])