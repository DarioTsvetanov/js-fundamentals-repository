/* function arrayManipulation(numArr, instrArr) {

    let add = (arr, index, element) => {

        arr.splice(index, 0, element);
        return arr;
    };

    let addMany = (arr, index, arr2) => {
        
        arr.splice(index, 0, ...arr2);
        
        return arr;
    };

    let contains = (arr, element) => {

        if (arr.includes(element)) {
            
            console.log(arr.indexOf(element));
        }
        else {

            console.log(-1);
        }

        return arr;
    };

    let remove = (arr, index) => {
        
        arr.splice(index, 1);
        
        return arr;
    };

    let shift = (arr, positions) => {

        for (let i = 0; i < positions; i ++) {

            let shifted = arr.shift();
            arr.push(shifted);
        }
        
        return arr;
    };

    let sumPairs = (arr) => {
        let newArr = [];

        for (let i = 0; i < arr.length; i += 2) {

            let sum = arr[i]

            if (arr[i + 1]) {
                sum += arr[i + 1];
            }
            newArr.push(sum);

        }

        return newArr;
    }
    
    while (true) {

        let curr = instrArr.shift();

        if (!curr) break;

        curr = curr.split(' ');

        let command = curr[0];

        if (command == 'print') console.log(`[ ${numArr.join(', ')} ]`);
        else if (command == 'add') add(numArr, Number(curr[1]), Number(curr[2]));
        else if (command == 'addMany') {

            let elementArr = [];
            for (let i = 2; i < curr.length; i ++) {

                elementArr.push(Number(curr[i]))
            }
            addMany(numArr, curr[1], elementArr);
        }
        else if (command == 'contains') contains(numArr, Number(curr[1]));
        else if (command == 'remove') remove(numArr, Number(curr[1]));
        else if (command == 'shift') shift(numArr, Number(curr[1]));
        else if (command == 'sumPairs') {
            
            let newArr = sumPairs(numArr);
            numArr = newArr;
        }
    }
}
arrayManipulation([1, 2, 4, 5, 6, 7, 8] ,
    ['sumPairs', 'print']
    ) */