/* function loadingBar(num) {

    let result = '';

    function barPoints(num) {
        return num / 10;
    };

    function load(num) {

        result += `[`
        for (let i = 0; i < 10; i ++) {

            if (i < num) result += `%`;
            else result += `.`;
        }
        result += `]`
    };

    let barPointsValue = barPoints(num);
    load(barPointsValue);
    
    if (barPointsValue == 10) {

        console.log(`${num}% Complete!`);
        console.log(result);
    }
    else {
        console.log(`${num}% ${result}`);
        console.log('Still loading...');
        
    }
}
loadingBar(50) */