/* function addSubstract(arr) {
    let newArr = [];    
    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i ++) {

        arrSum += Number(arr[i]);

        if (i > 0) {
            if (arr[i] % 2 === 0) {
                newArr[i] = arr[i] + i;
            }
            else {
                newArr[i] = arr[i] - i;
            }
        }
        else {
            newArr[i] = arr[i];
        }

        newArrSum += Number(newArr[i]);
    }
    

    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);

}
addSubstract([-5, 11, 3, 0, 2]); */