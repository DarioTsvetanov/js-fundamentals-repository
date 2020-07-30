/* function map(arr) {

    let newArray = [];

    arr.map((number, index) => {

        number % 2 == 0 ? number += index : number -= index;

        newArray.push(number);
    });

    console.log(newArray);
    console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue));
    console.log(newArray.reduce((accumulator, currentValue) => accumulator + currentValue));
       
}
map([-5, 11, 3, 0, 2]); */