/* function perfectNumber(num) {

    if (num < 0) {
        console.log("It's not so perfect.");
        return;
    }

    let sum = 0;

    for (let i = 1; i <= num / 2; i ++) {

        if (num % i == 0) {
            sum += i;
        }
    }

    sum == num ? console.log("We have a perfect number!") : console.log("It's not so perfect.");
}
perfectNumber(1236498); */