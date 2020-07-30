function solve(string) {

    let firstPartEnd = (string.length / 2);
    let secondPartEnd = string.length + 1;

    let firstSentence = string.substring(0, firstPartEnd);
    let secondSentence = string.substring(firstPartEnd, secondPartEnd);

    let firstSentenceReversed = '';
    let secondSentenceReversed = '';

    for (let i = firstSentence.length - 1; i >= 0; i --) {

        firstSentenceReversed += firstSentence[i];
    }

    for (let i = secondSentence.length - 1; i >= 0; i --) {

        secondSentenceReversed += secondSentence[i];
    }
    console.log(firstSentenceReversed);
    console.log(secondSentenceReversed);
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')