/* function decimalToBinary(dec, num) {

    let result = '';

    while (dec > 0) {
        
        result = dec % 2 + result;
        dec = Math.trunc(dec / 2);
    }

    let counter = 0;

    for (let i = 0; i < result.length; i ++) {

        if (result[i] == num) counter ++;
    }
    
    console.log(counter);
    
}
decimalToBinary(10, 0) */