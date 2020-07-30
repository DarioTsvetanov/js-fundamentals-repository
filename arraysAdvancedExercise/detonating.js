/* function detonating(arr1, arr2) {
    let [bombNum, power] = arr2;
      
    let counter = 0;
    let rangeStart = 0;
    let rangeEnd = 0;
    let range = 0;
    
    while (true) {

        if (counter == arr1.length) break;

        let index = arr1.indexOf(bombNum);

        if (arr1[counter] == bombNum) {

            rangeStart = index - power;
            if (rangeStart < 0) rangeStart = 0;
            
            rangeEnd = index + power;
            if (rangeEnd >= arr1.length) rangeEnd = arr1.length - 1;

            range = rangeEnd - rangeStart + 1;
            
            arr1.splice(rangeStart, range);

            counter = 0;
        }
        else {

            counter ++;
        }
    }

    let sum = arr1.reduce((a, b) => a + b, 0);
    
    console.log(sum);
}
detonating([3, 2, 3, 3, 2, 2, 2, 2, 3], [2, 2]); */