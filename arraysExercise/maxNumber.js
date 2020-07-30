/* function maxNumber(arr) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i ++) {
        let isTopInt = true;
        let current = arr[i];
        let rightSide = arr.slice(i + 1);

        for (let j = 0; j < rightSide.length; j ++) {

            if (current <= rightSide[j]) {
                isTopInt = false;
                break;
            }
        }

        if (isTopInt) resultArr.push(current);

    }

    console.log(resultArr.join(' '));
    
}
maxNumber([14, 24, 3, 19, 15, 17]); */