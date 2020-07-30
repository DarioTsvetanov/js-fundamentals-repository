/* function special(num) {
    let sum = 0;
    for (let i = 1; i <= num; i ++) {
        let number = i.toString();

        for (let j = 0; j < number.length; j ++) {
            sum += Number(number[j]);

            
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
            
        }
        else {
            console.log(`${i} -> False`);
            
        }
        
        sum = 0;
    }
}
special(15); */