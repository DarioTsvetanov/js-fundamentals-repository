/* function factorialNumber(num1, num2) {

    let firstFactorialCalculation = (a) => {
        let sum = 1;

        for (let i = a; i > 0; i --) {

            sum *= i;
        }

        return sum;
    };

    let factorialOne = firstFactorialCalculation(num1);

    let secondFactorialCalculation = (a) => {
        let sum = 1;

        for (let i = a; i > 0; i --) {

            sum *= i;
        }

        return sum;
    };

    let factorialTwo = secondFactorialCalculation(num2);

    let divideCalculation = (a, b) => {
        return a / b;
    };

    let divideResult = divideCalculation(factorialOne, factorialTwo);
    console.log(divideResult.toFixed(2));
    
} 
factorialNumber(6, 2) 
*/