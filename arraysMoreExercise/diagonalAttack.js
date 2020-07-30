function diagonalAttack(arr) {

    let diagIndexes = [];
    let leftDiagSum = 0;
    let rightDiagSum = 0;

    for (let i = 0; i < arr.length; i ++) {
        arr[i] = arr[i].split(' ');

        diagIndexes.push(`${i}, ${i}`);
        leftDiagSum += Number(arr[i][i]);
    }

    for (let i = arr.length - 1; i >= 0; i --) {
        let index = arr.length - 1 - i;
        diagIndexes.push(`${index}, ${i}`);
        rightDiagSum += Number(arr[index][i]);
    }
    
    if (leftDiagSum == rightDiagSum) {

        for (let i = 0; i < arr.length; i ++) {

            for (let j = 0; j < arr[i].length; j ++) {
    
                if (!diagIndexes.includes(`${i}, ${j}`)) {
    
                    arr[i][j] = leftDiagSum;
                }
            }
        }
    }
    
    for (let i = 0; i < arr.length; i ++) {
        console.log(arr[i].join(' '));
        
    }
    
}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)