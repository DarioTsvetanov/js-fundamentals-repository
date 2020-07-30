/* function arrays(arr) {

    let firstRowSum;
    let prevColSum;

    for (let i = 0; i < arr[0].length; i ++) {

        let colSum = arr[i][i].reduce(function(res, cur) {
            res += cur;
            return res;
        }, 0);
    }

    for (let i = 0; i < arr.length; i ++) {

        let rowSum = arr[i].reduce(function(res, cur) {
            res += cur;
            return res;
        }, 0);

        if (!firstRowSum) firstRowSum = rowSum;
        else if (firstRowSum !== rowSum) return console.log(false);
        
        
    }
} */