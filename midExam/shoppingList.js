function solve(input) {

    let list = input.shift().split('!');

    while (true) {

        let line = input.shift();

        if (line == 'Go Shopping!') break;

        let [command, item, newItem] = line.split(' ');

        if (command == 'Urgent') {

            if (!list.includes(item)) list.unshift(item);
        }
        else if (command == 'Unnecessary') {

            if (list.includes(item)) {

                let index = list.indexOf(item);

                list.splice(index, 1);
            }
        }
        else if (command == 'Correct') {

            if (list.includes(item)) {

                let index = list.indexOf(item);

                list[index] = newItem;
            }
        }
        else if (command == 'Rearrange') {

            if (list.includes(item)) {

                let index = list.indexOf(item);

                list.splice(index, 1);

                list.push(item);
            }
        }
    }

    console.log(list.join(', '));
}

solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
])