/* function rotation(arr, num) {

    let position = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i ++) {

        position = i;

        for (let j = 1; j <= num; j ++) {

            position --;
            
            if (position < 0) {
                position = arr.length - 1;
            }
        }

        newArr[position] = arr[i];
    }

    let result = '';
    for (let j = 0; j < newArr.length; j ++) {

        result += `${newArr[j]} `;
    }
    console.log(result);

}
rotation([32, 21, 61, 1], 4); */

/* function rotation(arr, num) {

    for (let i = 0; i < num; i ++) {

        let first = arr.shift();

        arr.push(first);
    }

    console.log(arr.join(' '));
    
}
rotation([32, 21, 61, 1], 4); */

/* 
function rotation(arr, num) {

    for (let i = 0; i < num; i ++) {
        let first = arr[0];

        for (let j = 0; j < arr.length - 1; j ++) {

            arr[j] = arr[j + 1];

        }

        arr[arr.length - 1] = first;
    }
    console.log(arr.join(' '));
}
rotation([32, 21, 61, 1], 4);
*/