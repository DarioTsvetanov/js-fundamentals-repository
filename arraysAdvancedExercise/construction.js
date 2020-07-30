/* function construction(arr) {
    
    arr = arr.map(Number);

    let dailyConsumedConc = 0;
    let concArray = [];

    while (true) {
        let sum = arr.reduce((a, b) => a + b, 0);

        if (sum == (arr.length * 30)) break;

        for (let i = 0; i < arr.length; i ++) {

            if (arr[i] < 30) {

                arr[i] = arr[i] + 1;
                dailyConsumedConc += 195;
            }

        }

        concArray.push(dailyConsumedConc);
        dailyConsumedConc = 0;

    }

    console.log(concArray.join(', '));
    
    let price = concArray.reduce((a, b) => {
        a += b;
        return a;
    }, 0) 

    console.log(`${price * 1900} pesos`);
    
}
construction([17, 22, 17, 19, 17]) */