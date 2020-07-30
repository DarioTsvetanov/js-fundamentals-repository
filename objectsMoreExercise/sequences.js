function sequences(arr) {
 
    let outputArr = [];
 
    for (let i = 0; i < arr.length; i ++) {
 
        let curr = JSON.parse(arr[i]).sort((a, b) => b - a);
        curr = JSON.stringify(curr);
 
        if (!outputArr.includes(curr)) {
 
            outputArr.push(curr);
        }
    }
   
    for (let i = 0; i < outputArr.length; i ++) {
 
        outputArr[i] = JSON.parse(outputArr[i]);
    }
   
    outputArr.sort((a, b) => a.length - b.length);
   
    for (let arrEl of outputArr) {
       
        console.log(`[${arrEl.join(', ')}]`);
    }
}
sequences([
"[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]",
"[4, -3, 3, 2, -2, 1, 1, 1]"
]);