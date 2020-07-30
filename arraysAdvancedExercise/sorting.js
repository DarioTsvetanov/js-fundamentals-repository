/* function sorting(arr) {

    let ascending = arr.slice().sort((a, b) => a - b);
    
    let descending = arr.slice().sort((a, b) => b - a);
    
    let newArr = [];

    let ascCount = 0;
    let descCount = 0;

    for (let i = 0; i < arr.length; i ++) {
        
        if (i % 2 == 0) {
            
            newArr.push(descending[descCount]);
            descCount ++;
        }
        else if (i % 2 !== 0) {
            
            newArr.push(ascending[ascCount]);
            ascCount ++;
        }
    }

    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]) */