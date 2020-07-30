/* function merge(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i ++) {

        if (i % 2 == 0) {
            newArr[i] = Number(arr1[i]) + Number(arr2[i]);
        }
        else {
            newArr[i] = arr1[i] + arr2[i];
        }
    }

    //let str = newArr.join('-');

    let str = '';

    for (let i = 0; i < newArr.length; i ++) {

        if (i == newArr.length - 1) {
            str += `${newArr[i]}`;
        }
        else {
            str += `${newArr[i]} - `;
        }
        
    }
    
    console.log(str);
    
}
merge(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']) */