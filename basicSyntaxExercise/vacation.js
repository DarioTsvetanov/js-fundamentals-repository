/* function vacation(num1, str, str2) {
    let peopleNumber = num1;
    let typeGroup = str;
    let day = str2;

    let pricePerPerson = 0;

    if (typeGroup == 'Students') {
        if (day == 'Friday') {
            pricePerPerson = 8.45
        }
        else if (day == 'Saturday') {
            pricePerPerson = 9.80;
        }
        else if (day == 'Sunday') {
            pricePerPerson = 10.46;
        }
    }
    else if (typeGroup == 'Business') {
        if (day == 'Friday') {
            pricePerPerson = 10.90
        }
        else if (day == 'Saturday') {
            pricePerPerson = 15.60;
        }
        else if (day == 'Sunday') {
            pricePerPerson = 16;
        }
    }
    else if (typeGroup == 'Regular') {
        if (day == 'Friday') {
            pricePerPerson = 15;
        }
        else if (day == 'Saturday') {
            pricePerPerson = 20;
        }
        else if (day == 'Sunday') {
            pricePerPerson = 22.50;
        }
    }

    let price = pricePerPerson * peopleNumber;

    if (typeGroup == 'Students' && peopleNumber >= 30) {
        price -= price * 0.15;
    }

    if (typeGroup == 'Business' && peopleNumber >= 100) {
        price -= (pricePerPerson * 10);
    }

    if (typeGroup == 'Regular' && peopleNumber >= 10 && peopleNumber <= 20) {
        price -= price * 0.05;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
    
}
vacation(30, 'Students', 'Sunday'); */