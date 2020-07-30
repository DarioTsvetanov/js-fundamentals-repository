/* function arrayRotation(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i ++) {

        let last = arr.pop();
        arr.unshift(last);
    }

    console.log(arr.join(' '));
    
}
arrayRotation(['1', '2', '3', '4', '2']); */