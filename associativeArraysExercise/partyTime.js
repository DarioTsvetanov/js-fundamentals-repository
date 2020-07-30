function solve(input) {
 
    let attending = [];
 
    while (true) {
 
        let curr = input.shift();
 
        if (curr == 'PARTY') break;
 
        attending.push(curr);
    }
 
    for (let guest of input) {
       
        if (attending.includes(guest)) {
 
            let index = attending.indexOf(guest);
            attending.splice(index, 1);
        }
    }
 
   
    attending.sort((a, b) => {
 
        if (!isNaN(a[0]) && isNaN(b[0])) return -1;
        else if (isNaN(a[0]) && !isNaN(b[0])) return 1;
        else if (!isNaN(a[0]) && !isNaN(b[0])) return 0;
        else if (isNaN(a[0]) && isNaN(b[0])) return 0;
    });
 
    console.log(attending.length);
   
    for (let guest of attending) {
       
        console.log(guest);  
    }
}
solve([
  '7IK9Yo0h', '9NoBUajQ',
  'Ce8vwPmE', 'SVQXQCbc',
  'tSzE5t0p', 'PARTY',
  '9NoBUajQ', 'Ce8vwPmE',
  'SVQXQCbc'
]);