/* function amazinNumber(num) {
    let str = num.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i ++) {
        let digit = Number(str[i]);
        sum += digit;
    }

    sum = sum.toString();

    for (let j = 0; j < sum.length; j ++) {

        if (sum[j] == 9) {
            console.log(`${num} Amazing? True`);
            return;
        }
    }

    console.log(`${num} Amazing? False`);
    
}
amazinNumber(999);  */