/* function carWash(arr) {

    let percentageCount = (arr) => {

        let percentage = 0;

        for (let i = 0; i < arr.length; i ++) {
            let curr = arr[i];

            if (curr == 'soap') percentage += 10;
            else if (curr == 'water') percentage += percentage * 0.20;
            else if (curr == 'vacuum cleaner') percentage += percentage * 0.25;
            else if (curr == 'mud') percentage -= percentage * 0.10;
        }

        return percentage;
    }

    let percentage = percentageCount(arr);

    console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']); */