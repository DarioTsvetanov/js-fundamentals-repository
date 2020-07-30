/* function twodimentionArray(arr) {

    let rowSum = 0;
    let colSum = 0;
    let arrTwo = [];

    for (let a = 0; a < arr.length; a ++) {

        for (let b = 0; b < arr[a].length; b ++) {

            rowSum += arr[a][b];
            colSum += arr[b][a];
        }
        arrTwo.push(rowSum);
        rowSum = 0;
        arrTwo.push(colSum);
        colSum = 0;
    }

    for (let k = 0; k < arrTwo.length - 1; k ++) {

        if (arrTwo[k] !== arrTwo[k + 1]) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}
twodimentionArray([
    [4, 5, 6],
    [6, 4, 5],
    [5, 5, 5]]
   ); */