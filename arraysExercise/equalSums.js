/* function equalSums(arr) {

    for (let i = 0; i < arr.length; i ++) {
        let leftSide = arr.slice(0, i);
        let rightSide = arr.slice(i + 1);
        
        let leftSideSum = leftSide.reduce(function(result, current) {
            result += current;
            return result;
        }, 0);

        let rightSideSum = rightSide.reduce(function(result, current) {
            result += current;
            return result;
        }, 0)

        if (leftSideSum == rightSideSum) {
            console.log(i);
            return;
            
        }

    }

    console.log('no');
    
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); */