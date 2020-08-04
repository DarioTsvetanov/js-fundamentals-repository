function solve(input) {
    
    let guests = [];

    let unlikedMeals = 0;

    input.pop();

    for (let line of input) {

        let [action, name, meal] = line.split('-');

        let guest = guests.find(obj => obj.name == name);

        if (action == 'Like') {

            if (!guest) {

                guests.push({
                    name: name,
                    meals: [meal],
                    mealsCounter: 1
                });
            }
            else {

                if (!guest.meals.includes(meal)) {

                    guest.meals.push(meal);

                    guest.mealsCounter ++;
                }
            }
        }
        else if (action == 'Unlike') {

            if (!guest) console.log(`${name} is not at the party.`);
            else {

                if (!guest.meals.includes(meal)) console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                else {

                    let index = guest.meals.indexOf(meal);

                    guest.meals.splice(index, 1);

                    console.log(`${name} doesn't like the ${meal}.`);

                    unlikedMeals ++;

                    guest.mealsCounter --;
                }
            }
        }
    }

    guests.sort((a, b) => b.mealsCounter - a.mealsCounter || a.name.localeCompare(b.name));

    for (let guest of guests) {
        
        console.log(`${guest.name}: ${guest.meals.join(', ')}`);
    }

    console.log(`Unliked meals: ${unlikedMeals}`);
}

solve([''])