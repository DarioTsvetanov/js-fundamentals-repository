/* function condense(arr) {

    while (arr.length > 1) {

        for (let i = 0; i < arr.length - 1; i ++) {
            let curr = arr[i];
            let next = arr[i + 1];
            arr[i] = curr + next;
        
        }
        arr.pop();
    }

    console.log(Number(arr[0]));
    
}
condense([2,10,3]); */