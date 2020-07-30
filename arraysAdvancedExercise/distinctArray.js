/* function distinctArray(arr) {

    let counter = 1;

    for (let i = 0; i < arr.length; i ++) {

        while (true) {
            
            if (counter >= arr.length) break;

            if (arr[counter] == arr[i] && counter !== i) {

                arr.splice(counter, 1)
            }
            else {
                counter ++;
            }
            
        }
        counter = 0;
        
    }

    console.log(arr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]) */