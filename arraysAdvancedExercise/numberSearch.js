/* function numberSearch(arr1, arr2) {

    let sliced = arr1.splice(0, arr2[0]);

    for (let i = 0; i < arr2[1]; i ++) {
        sliced.shift();
    }

    let counter = 0;

    for (const num of sliced) {
        if (num == arr2[2]) counter ++;
    }

    console.log(`Number ${arr2[2]} occurs ${counter} times.`);
    
}
numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]) */