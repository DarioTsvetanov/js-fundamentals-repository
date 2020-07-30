function solve(input) {

    let concat = input[0].concat(input[1]).split('');
    
    let keyWord = input.pop();

    let counter = 0;

    for (let ch of concat) {
        
        let ascii = ch.charCodeAt(0);

        let index = concat.indexOf(ch);

        if (ascii == 97 || ascii == 101 || ascii == 105 || ascii == 111 || ascii == 117) {

            if (counter == keyWord.length) counter = 0;

            concat[index] = keyWord[counter].toUpperCase();
            counter += 1;
        }
    }

    console.log(`Your generated password is ${concat.reverse().join('')}`);
}

/* solve([
'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]) */

solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
])