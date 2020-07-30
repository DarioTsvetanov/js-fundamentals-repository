function solve(input) {

    let text = input.shift();

    let chars = {};

    for (let i = 0; i < text.length; i ++) {

        let ch = text[i];

        if (!chars[ch]) {

            chars[ch] = [];
            chars[ch].push(i);
        }
        else {

            chars[ch].push(i);
        }
    }

    for (let key in chars) {
        
        console.log(`${key}:${chars[key].join('/')}`);
    }
}

solve(['avjavamsdmcalsdm'])