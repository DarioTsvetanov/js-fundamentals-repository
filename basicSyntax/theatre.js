/* function theatre(str, num) {
    let typeDay = str;
    let age = num;

    let ticketPrice;

    if (typeDay == 'Weekday') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 12;
        }
        else if (age > 18 && age <= 64) {
            ticketPrice = 18;
        }
        else if (age > 64 && age <= 122) {
            ticketPrice = 12;
        }
        else {
            ticketPrice = 'Error!';
        }
    }
    else if (typeDay == 'Weekend') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 15;
        }
        else if (age > 18 && age <= 64) {
            ticketPrice = 20;
        }
        else if (age > 64 && age <= 122) {
            ticketPrice = 15;
        }
        else {
            ticketPrice = 'Error!';
        }
    }
    else if (typeDay == 'Holiday') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 5;
        }
        else if (age > 18 && age <= 64) {
            ticketPrice = 12;
        }
        else if (age > 64 && age <= 122) {
            ticketPrice = 10;
        }
        else {
            ticketPrice = 'Error!';
        }
    }
    if (ticketPrice == 'Error!') {
        console.log(`Error!`);
        
    }
    else {
        console.log(`${ticketPrice}$`);
        
    }
    
} */