/* function removeAdd(arr) {
    let row = [];
    let start = 0;
    for (let i = 0; i < arr.length; i ++) {
        start ++;
        if (arr[i] == 'add') {

            row.push(start);
        }
        else if (arr[i] == 'remove') {

            row.pop();
        }
    }

    if (row.length == 0) {
        console.log('Empty');
        
    }
    else {
        console.log(row.join(' '));
        
    }
}
removeAdd(['add', 'add', 'remove', 'add', 'add']) */