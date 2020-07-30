function solve(arr) {

    let destinations = {};

    for (let destination of arr) {

        let [country, city, price] = destination.split(' > ');
        price = Number(price);
        
        if (!destinations[country]) {

            destinations[country] = [{
                city: city,
                price: price
            }]
            
            continue;
        }

        let currentCity = destinations[country].find(el => el.city == city);
        
        if (!currentCity) {

            destinations[country].push({

                city: city,
                price: price
            });

            continue;
        }

        if (currentCity.price > price) {

            currentCity.price = price;
        }
    }

    for (let destination in destinations) {
        
        destinations[destination].sort((a, b) => a.price - b.price);
    }

    let keys = Object.keys(destinations);

    let output = '';

    keys.sort((a, b) => a.localeCompare(b));

    keys.forEach(country => {
        output += `${country} -> `;

        destinations[country].forEach(el => {

            output += `${el.city} -> ${el.price} `
        });

        output += '\n';
    });

    console.log(output);    
}
solve([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
  ])