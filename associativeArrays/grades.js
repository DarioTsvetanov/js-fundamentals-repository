function grades(arr) {

    let grades = new Map();

    for (let student of arr) {
        
        let curr = student.split(' ');
        let name = curr.shift();
        curr = curr.map(Number);

        if (grades.has(name)) {

            grades.set(name, grades.get(name).concat(curr))
            continue;
        }

        grades.set(name, curr);
    }

    let sorted = Array.from(grades)

    sorted.sort((a, b) => reduce(a[1]) - reduce(b[1]));

    for (let el of sorted) {
        
        console.log(`${el[0]}: ${el[1].join(', ')}`);
    }

    function reduce(arr) {
        let sum = 0;

        for (let num of arr) {
            
            sum += num;
        }

        return (sum / arr.length);
    }
}
grades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']); 