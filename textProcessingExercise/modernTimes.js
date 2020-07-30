function solve(sentense) {

    let matchWords = [];
    let isValid = true;

    for (let word of sentense.split(' ')) {
        
        if (word[0] == '#' && word.length > 1) {

            let substring = word.substring(1, word.length);

            for (let ch of substring) {
                
                ch = ch.toLowerCase();

                if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {

                    isValid = false;
                    break;
                }
            }

            if (isValid) {

                matchWords.push(substring);
            }

            isValid = true;
        }
    }

    for (let word of matchWords) {
        
        console.log(word);
    }
}
solve('Nowadays everyone uses #e to tag a #special word in #soc#ialMedia')