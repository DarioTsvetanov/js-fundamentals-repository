function solve(input) {
 
    let totalIncome = 0;
 
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/;
   
    for (let i = 0; i < input.length - 1; i ++) {
 
        let line = input[i];
 
        if (line == 'end of shift') break;
 
        let match = pattern.exec(line);
       
        if (!match) continue;
 
        let sum = Number(match.groups.count) * Number(match.groups.price);
 
        console.log(`${match.groups.name}: ${match.groups.product} - ${sum.toFixed(2)}`);
       
        totalIncome += sum;
    }
 
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
 
solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ])