/* function maxSequence(arr) {
    
    let longest = [];
    let last = [];

    for (let i = 0; i < arr.length; i ++) {
        
        if (arr[i] == arr[i - 1]) {
            last.push(arr[i]);
        }
        else {
            last = [arr[i]];
        }

        if (last.length > longest.length) {
            longest = last;
        }
    }

    console.log(longest.join(' '));
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]); */