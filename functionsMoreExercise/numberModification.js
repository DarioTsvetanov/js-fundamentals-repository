/* function numberModification(num) {
    let str = num.toString();

    let averageValCalc = (str) => {

        let sum = 0;

        for (let i = 0; i < str.length; i ++) {

            sum += Number(str[i]);
        }

        let average = sum / str.length;

        return average;
    };

    let averageValue = averageValCalc(str);
    
    if (averageValue >= 5) {
        console.log(num);
        return;
    }
    
    let modification = (str, num) => {
        
        while (num < 5) {

            str += 9;
            let sum = 0;

            for (let i = 0; i < str.length; i ++) {

                sum += Number(str[i]);
            }

            let average = sum / str.length;
            num = average;
        }

        return str;
    };

    let modifiedString = modification(str, averageValue);
    console.log(modifiedString);
}
numberModification(5835); */