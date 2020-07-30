function manipulateArray(arr) {

    let numArr = arr.shift().split(' ').map(Number);

    let addNumber = (numArr, num) => {
        numArr.push(num);
        return numArr;
    };

    let removeNumber = (numArr, num) => {
        
        // let index = numArr.indexOf(num);

        // numArr.splice(index, 1);
        if (numArr.includes(num)) {
            
            let index = numArr.indexOf(num);

            numArr.splice(index, 1);
        }
        
        return numArr;
    };

    let removeIndexNum = (numArr, index) => {

        // if (numArr.length > index) {

            
        // }
        numArr.splice(index, 1);

        return numArr;
    };

    let insertNumber = (numArr, num, index) => {
        
        numArr.splice(index, 0, num);
        return numArr;
    };

    while (true) {
        
        let command = arr.shift();
        
        if (!command) break;

        command = command.split(' ');
        
        let step = command[0];
        let int = Number(command[1]);

        if (step == 'Add') {

            addNumber(numArr, int);
        }
        else if (step == 'Remove') {
            
            removeNumber(numArr, int);
        }
        else if (step == 'RemoveAt') {

            removeIndexNum(numArr, int);
        }
        else if (step == 'Insert') {
            insertNumber(numArr, int, Number(command[2]));
        }

    }

    console.log(numArr.join(' '));
}
manipulateArray(['4 19 2 53 6 43',
'Add 3',
'Add 5',
'RemoveAt 1',
'Insert 8 3']);