function solve(arr) {

    let text = arr.shift().split(' ');

    let keyWords = arr[0];

    for (let keyWord of keyWords) {
        
        let hole = '_'.repeat(keyWord.length);

        for (let word of text) {
            
            let index = text.indexOf(word);

            if (word.includes('_')) {

                let frontRest = '';
                let backRest = '';

                if (word[0] !== '_') {

                    frontRest = word[0];
                    word = word.substring(1, word.length);
                }
                else if (word[word.length - 1] !== '_') {

                    backRest = word[word.length - 1];
                    word = word.substring(0, word.length - 1);
                }

                if (hole == word) {

                    text[index] = `${frontRest}${keyWord}${backRest}`;
                }
            }
        }
    }

    console.log(text.join(' '));
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)