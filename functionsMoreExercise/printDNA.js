/* function printDNA(num) {

    let arr = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let pointer = 0;
    let row = 1;

    for (let i = 0; i < num; i ++) {

        if (!arr[pointer]) pointer = 0;
        let first = arr[pointer];
        pointer ++;
        if (!arr[pointer]) pointer = 0;
        let second = arr[pointer];
        pointer ++;
        
        if (row == 1) console.log(`**${first}${second}**`);
        else if (row == 2) console.log(`*${first}--${second}*`);
        else if (row == 3) console.log(`${first}----${second}`);
        else console.log(`*${first}--${second}*`);
        
        row ++;
        if (row == 5) row = 1;
    }
}
printDNA(10); */