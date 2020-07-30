/* function numberSequence(arrLength, num) {

    let arr = [];

    for (let i = 0; i < arrLength; i ++) {

        if (i == 0 || i == 1) {

            arr[i] = 1;
        }
        else {

            let sum = 0;

            if (num > i) {

                for (let j = i - 1; j >= 0; j --) {

                    sum += arr[j];
                }
                arr[i] = sum;
            }
            else {

                for (let j = i - 1; j >= i - num; j --) {

                    sum += arr[j];
                }
                arr[i] = sum;
            }
        }

    }
    console.log(arr.join(' '));
    
}
numberSequence(6, 3) */