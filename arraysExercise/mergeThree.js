/* function merge(arr1, arr2) {

    let newArray = [];

    arr1.map((number, index) => {

        index % 2 == 0 ? newArray.push(Number(number) + Number(arr2[index])) : newArray.push(number + arr2[index]);

    });

    console.log(newArray.join('-'));
    
}
merge(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']); */