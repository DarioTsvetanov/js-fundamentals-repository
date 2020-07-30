/* function smallestNumbers(arr) {

    let firstSmallestNumber;
    for (let i = 0; i < arr.length; i ++) {
        let curr = arr[i];

        if (i == 0) firstSmallestNumber = curr;

        if (curr < firstSmallestNumber) {
            firstSmallestNumber = curr;
        }
    }

    function removeNumber(arr) {
        let index = arr.indexOf(firstSmallestNumber);

        arr.splice(index, 1);
        return arr;
    }
    removeNumber(arr);

    let secondSmallestNumber;
    for (let i = 0; i < arr.length; i ++) {
        
        if (i == 0) secondSmallestNumber = arr[i];

        if (arr[i] < secondSmallestNumber) secondSmallestNumber = arr[i];
    }

    console.log(firstSmallestNumber, secondSmallestNumber);
}
smallestNumbers([30, 15, 50, 5]) */