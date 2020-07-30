function solve(input) {
 
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+|\d+.\d+)!(?<quantity>\d+)/;
 
    let boughtFurniture = [];
 
    let totalMoney = 0;
 
    let result;
 
    while (true) {
 
        let line = input.shift();
 
        if (line == 'Purchase') break;
 
        result = pattern.exec(line);
       
        if (result !== null) {
 
            boughtFurniture.push(result.groups.name);
            totalMoney += result.groups.quantity * result.groups.price;
        }
       
    }
 
    console.log('Bought furniture:');
   
    for (let el of boughtFurniture) {
       
        console.log(el);
    }
 
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);  
}
 
solve([  '>Invalid<<!5', 'Purchase' ]);