function solve(input) {

    let patern = /\d{2}([\.\-\/])[A-Z][a-z]{2}\1\d{4}\b/g;

    let validDates = input[0].match(patern);

    for (let date of validDates) {
        
        let separator = date[2];

        let [day, month, year] = date.split(separator);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"])